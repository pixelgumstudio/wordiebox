import { NextResponse } from 'next/server';
import axios from 'axios';
import { chromium } from 'playwright';

// Type definitions for the oEmbed API responses
interface OEmbedResponse {
  title?: string;
  html?: string;
  caption?: string;
  raw?: any;
}

interface TikTokData {
  caption: string;
  hashtags: string[];
  error?: string;
}

// oEmbed endpoints for supported platforms (Instagram, Twitter, Facebook)
const oEmbedEndpoints = {
  instagram: (url: string, token: string) =>
    `https://graph.facebook.com/v17.0/instagram_oembed?url=${encodeURIComponent(url)}&access_token=${token}`,
  facebook: (url: string, token: string) =>
    `https://graph.facebook.com/v17.0/oembed_post?url=${encodeURIComponent(url)}&access_token=${token}`,
  twitter: (url: string) =>
    `https://publish.twitter.com/oembed?url=${encodeURIComponent(url)}`,
};

// Function to fetch TikTok content using Playwright
async function fetchTikTokContent(url: string): Promise<TikTokData> {
    try {
      const browser = await chromium.launch();
      const page = await browser.newPage();
  
      console.log('Navigating to TikTok post...');
      await page.goto(url, { waitUntil: 'domcontentloaded' });
  
      // Wait for the caption to load (use a longer wait time if needed)
      console.log('Waiting for the caption to load...');
      await page.waitForSelector('h1[data-e2e="video-caption"]', { timeout: 10000 }); // Wait up to 10 seconds
  
      // Extract the caption
      const caption = await page.$eval('h1[data-e2e="video-caption"]', (el: HTMLElement) => el.textContent) || '';
      console.log('Caption:', caption);
  
      // Extract hashtags from the caption
      const hashtags = caption.match(/#\w+/g) || [];
      console.log('Hashtags:', hashtags);
  
      await browser.close();
  
      return { caption, hashtags };
    } catch (error) {
      console.error('Error fetching TikTok content:', error);
      return { caption: '', hashtags: [], error: 'Failed to fetch TikTok post content' };
    }
  }

// Main handler function for the API route
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'Missing URL' }, { status: 400 });
  }

  const token = process.env.FB_APP_TOKEN; // Instagram/Facebook oEmbed token

  try {
    // Check for TikTok URL and handle it differently (scraping)
    if (url.includes('tiktok.com')) {
      const data = await fetchTikTokContent(url);
      if (data.error) {
        return NextResponse.json(data, { status: 500 });
      }
      return NextResponse.json(data, { headers: { 'Content-Type': 'application/json' } });
    }

    // Handle Instagram, Facebook, and Twitter using oEmbed
    let apiUrl: string | null = null;

    if (url.includes('instagram.com')) {
      if (!token) return NextResponse.json({ error: 'Missing FB_APP_TOKEN' }, { status: 500 });
      apiUrl = oEmbedEndpoints.instagram(url, token);
    } else if (url.includes('facebook.com')) {
      if (!token) return NextResponse.json({ error: 'Missing FB_APP_TOKEN' }, { status: 500 });
      apiUrl = oEmbedEndpoints.facebook(url, token);
    } else if (url.includes('twitter.com') || url.includes('x.com')) {
      apiUrl = oEmbedEndpoints.twitter(url);
    } else {
      return NextResponse.json({ error: 'Unsupported URL' }, { status: 400 });
    }

    // Fetch content from the oEmbed API
    const { data }: { data: OEmbedResponse } = await axios.get(apiUrl);

    return NextResponse.json({
      caption: data.title || data.html || 'No caption found',
      raw: data,
    }, { headers: { 'Content-Type': 'application/json' } });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch post content' }, { status: 500 });
  }
}

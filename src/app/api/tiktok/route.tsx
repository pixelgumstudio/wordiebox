import { chromium } from 'playwright';

interface FetchTikTokContentResult {
    caption: string;
    hashtags: string[];
    error?: string;
}

interface FetchTikTokContentParams {
    url: string;
}

async function fetchTikTokContent(url: FetchTikTokContentParams['url']): Promise<FetchTikTokContentResult> {
    try {
        // Launch browser in headless mode
        const browser = await chromium.launch();
        const page = await browser.newPage();

        // Navigate to TikTok URL
        await page.goto(url, { waitUntil: 'domcontentloaded' });

        // Extract caption and hashtags
        const caption: string = await page.$eval('h1[data-e2e="video-caption"]', (el) => el.textContent || '') || '';
        const hashtags: string[] = caption.match(/#\w+/g) || [];

        // Close browser
        await browser.close();

        return { caption, hashtags };
    } catch (error) {
        console.error('Error fetching TikTok content:', error);
        return { caption: '', hashtags: [], error: 'Failed to fetch TikTok post content' };
    }
}

interface FetchTikTokContentResult {
    caption: string;
    hashtags: string[];
    error?: string;
}

export async function GET(req: Request): Promise<Response> {
    const { searchParams } = new URL(req.url);
    const url: string | null = searchParams.get('url');

    if (!url) {
        return new Response(JSON.stringify({ error: 'Missing URL' }), { status: 400 });
    }

    if (url.includes('tiktok.com')) {
        const data: FetchTikTokContentResult = await fetchTikTokContent(url);
        if (data.error) {
            return new Response(JSON.stringify(data), { status: 500 });
        }
        return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
    }

    // Fallback to oEmbed APIs for Instagram, Twitter, etc.
    // (Same implementation as before for other platforms)

    return new Response(JSON.stringify({ error: 'Unsupported URL' }), { status: 400 });
}

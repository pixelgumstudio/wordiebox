import Head from 'next/head';
import { ReactNode } from 'react';

export interface Metadata {
    title: string;
    description: string;
    keywords: string;
    icons: {
      icon: string;
    };
    openGraph?: {
      type: string;
      url: string;
      title: string;
      description: string;
      siteName: string;
      images?: {
        url: string;
      }[];
    };
    twitter?: {
      card: string;
      site: string;
      images: string;
      title: string;
      description: string;
    };
  }


interface LayoutProps {
    children: ReactNode;
  }
const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'This is a description of my Next.js app.',
  keywords: 'Next.js, React, SEO',
  icons: {
    icon: '/favicon.ico', // Replace with the path to your favicon
  },
};

  
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="icon" href={metadata.icons.icon} />
        {/* Add Open Graph and Twitter Card metadata here */}
      </Head>
      {children}
    </>
  );
};

export default Layout;

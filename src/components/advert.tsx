"use client"
import { FC } from 'react';

interface AdvertTrackerProps {
  product: string;
  label: string;
  url: string;
  website?: string;
}

const Advert: FC<AdvertTrackerProps> = ({ product, label, url }) => {
  const handleClick = async () => {
    try {
      // Track the button click
      await fetch('/api/clicks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product, website: "Wordiebox" }),
      });
console.log('click sent')
      // Open the URL in a new tab
      window.open(url, '_blank');
    } catch (error) {
      console.error(`Failed to track click for ${product}:`, error);
    }
  };

  return (
    <button onClick={handleClick}>
      {label}
    </button>
  );
};

export default Advert;

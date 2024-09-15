import { Metadata } from 'next';
import PageFile from './pageFile';

export async function generateMetadata({ params }: { params: { language: string } }): Promise<Metadata> {
  const { language } = params;

  const capitalizedLang = (language || "").replace(/-/g, " "); 
  const lang = capitalizedLang.charAt(0).toUpperCase() + capitalizedLang.slice(1);
  
  return {
    title: ` ${lang} names |  ${lang} boy names |  ${lang} girl names  -  Wordiebox.com`,
    description: `The free online ${lang} names  tool allows you to generate a name and its meaning in the ${lang} for male and female`,
    icons: {
      icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
    },
    openGraph: {
      type: "website",
      siteName: "Wordiebox",
      title: ` ${lang} names |  ${lang} boy names |  ${lang} girl names  -  Wordiebox.com`,
      description: `The free online ${lang} names  tool allows you to generate a name and its meaning in the ${lang} for male and female`,
      url: `https://wordiebox.com/gender-names-generator/${lang}`,
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: `https://wordiebox.com/gender-names-generator/${lang}`,
      title: ` ${lang} names |  ${lang} boy names |  ${lang} girl names  -  Wordiebox.com`,
      description: `The free online ${lang} names  tool allows you to generate a name and its meaning in the ${lang} for male and female`,
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
  };
}

const NameGenerator = ({ params }: { params: { language: string } }) => {
  return <PageFile />;
};

export default NameGenerator;

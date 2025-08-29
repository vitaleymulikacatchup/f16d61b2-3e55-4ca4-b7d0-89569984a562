"use client";
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import YearRoadmapTimeline from '@/components/sections/layouts/roadmap/YearRoadmapTimeline';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

const __randTraceNavbar = {};
const __randTraceHero = {};
const __randTraceAbout = {};
const __randTraceFAQ = {};
const __randTraceHowToBuy = {};
const __randTraceTokenomics = {};
const __randTraceFooter = {};

export default function Home() {
  return (
    <>
      <NavbarBase
        logoSrc="/images/logo.svg"
        logoAlt="MemePulse Logo"
        logoWidth={200}
        logoHeight={50}
        navItems={
          [
            { name: "Hero", id: "#hero" },
            { name: "About", id: "#about" },
            { name: "FAQ", id: "#faq" },
            { name: "How to Buy", id: "#how-to-buy" },
            { name: "Tokenomics", id: "#tokenomics" },
            { name: "Footer", id: "#footer" }
          ]
        }
        className="fixed top-0 left-0 right-0 z-50"
      />
      <BillboardHero
        title="Welcome to MemePulse Coin"
        subtitle="Join the trendiest memecoin in the market!"
      />
      <SplitAbout
        description="At MemePulse, we create a community around the hottest trends in crypto. Join us!"
      />
      <CentralFAQ
        items={
          [
            { title: "What is MemePulse Coin?", content: "MemePulse is a community-focused cryptocurrency formed around meme culture." },
            { title: "How can I buy MemePulse?", content: "You can purchase MemePulse Coin through various crypto exchanges." },
            { title: "What are the benefits of holding MemePulse?", content: "Join our vibrant community and enjoy exclusive rewards and bonuses!" },
          ]
        }
      />
      <SplitHero
        title="Buying Made Simple"
        subtitle="Follow these 3 simple steps to get started" 
        primaryButtonText="Start Buying"
        secondaryButtonText="Learn More"
      />
      <NumberGridTokenomics
        title="Tokenomics"
        description="Our tokenomics structure ensures transparency and solid growth for our community."
        kpiItems={
          [
            { value: "50M", description: "Total Supply", icon: null },
            { value: "10M", description: "Market Cap", icon: null },
            { value: "20%", description: "Liquidity", icon: null },
          ]
        }
      />
      <FooterBase
        logoSrc="/images/logo.svg"
        logoWidth={200}
        logoHeight={50}
        columns={
          [
            { title: "Links", items: [ { label: "Home", onClick: () => {} }, { label: "About", onClick: () => {} }, { label: "FAQ", onClick: () => {} }, { label: "How to Buy", onClick: () => {} } ] },
            { title: "Follow Us", items: [ { label: "Twitter", onClick: () => {} }, { label: "Telegram", onClick: () => {} }, { label: "Discord", onClick: () => {} }, { label: "Reddit", onClick: () => {} } ] },
            { title: "Legal", items: [ { label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} } ] }
          ]
        }
        copyrightText="© 2023 MemePulse All rights reserved."
        onPrivacyClick={() => {}}
      />
    </>
  );
}

"use client";

import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

const companies = [
  { name: "AWS", logo: "aws" },
  { name: "Claude", logo: "claude" },
  { name: "Gemini", logo: "gemini" },
  { name: "Microsoft", logo: "microsoft" },
  { name: "NVIDIA", logo: "nvidia" },
  { name: "OKX", logo: "okx" },
  { name: "OpenAI", logo: "openai" },
  { name: "Oracle", logo: "oracle" },
  { name: "Spotify", logo: "spotify" },
  { name: "Tesla", logo: "tesla" },
];

export default function CompaniesSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-black overflow-hidden">
      <div className="relative z-10 w-full px-0">
        <InfiniteMovingCards
          items={companies}
          direction="left"
          speed="normal"
          pauseOnHover={true}
          className="[--animation-duration:40s]"
        />
      </div>
    </section>
  );
}


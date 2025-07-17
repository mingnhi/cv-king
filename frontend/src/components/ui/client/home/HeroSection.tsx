"use client";

import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import HeroSlider from "@/components/ui//common/HeroSlider";

import ImageBanner1 from "@/assets/images/banner1.png";
import ImageBanner2 from "@/assets/images/banner2.png";
import ImageBanner3 from "@/assets/images/banner3.png";

const images = [
  {
    src: ImageBanner1,
    alt: "Banner 1",
    onClick: () => window.open("https://cvking.vn", "_blank"),
  },
  {
    src: ImageBanner2,
    alt: "Banner 2",
    onClick: () => window.open("https://cvking.vn", "_blank"),
  },
  {
    src: ImageBanner3,
    alt: "Banner 3",
    onClick: () => window.open("https://cvking.vn", "_blank"),
  },
];

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <section className="max-w-6xl mx-auto px-6 py-5 lg:px-0">
      <Box>
        {isMobile ? (
          <HeroSlider images={images} height="200px" />
        ) : (
          <Box className="grid grid-cols-3 gap-4">
            {images.map((img, index) => (
              <Box
                key={index}
                className="relative h-40 w-full cursor-pointer overflow-hidden rounded-[0.75rem]"
                onClick={img.onClick}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{
                    objectFit: "cover",
                    border: "1px solid orange",
                    borderRadius: "0.75rem",
                  }}
                />
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </section>
  );
};

export default HeroSection;
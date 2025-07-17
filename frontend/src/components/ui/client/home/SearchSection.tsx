"use client";
import React, { useState, useRef } from "react";
import { Box, Button, ClickAwayListener, Portal, Paper } from "@mui/material";
import {
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ChevronsRight,
  List,
  Search,
} from "lucide-react";
import HeroSlider from "@/components/ui/common/HeroSlider";

import ImageBanner1 from "@/assets/images/banner5.png";
import ImageBanner2 from "@/assets/images/banner6.png";
import ImageBanner3 from "@/assets/images/banner7.png";
import image from "@/assets/images/banner11.png";

const sliderImages = [
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

const TodayJobStats = {
  totalJobs: "234345",
  newJobsToday: "1234",
};


const SearchSection: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const anchorRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const date = new Date().toLocaleDateString("vi-VN");

  return (
    <section
      className="w-full mx-auto py-5 px-6"
      style={{
        background:
          // "linear-gradient(to bottom, #f97316 0%, #fef3c7 40%, #f3f4f6 100%)",
          "linear-gradient(#E36414, #800200)",
      }}
    >
      <Box className="text-center mb-4">
        <h1 className="text-white font-semibold text-3xl">
          Tìm việc làm nhanh, việc làm mới nhất trên toàn quốc
        </h1>
        <p className="text-white mt-2">
          Tiếp cận 60,000+ tin tuyển dụng việc làm mỗi ngày từ hàng nghìn doanh
          nghiệp uy tín tại Việt Nam
        </p>
      </Box>

      <Box className="flex flex-col md:flex-row gap-3 max-w-6xl shadow-2xl bg-white mx-auto rounded-xl mb-5 py-2 px-2 relative">
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box className="relative w-full md:w-auto">
            <Button
              variant="outlined"
              startIcon={<List />}
              onClick={handleClick}
              ref={anchorRef}
              sx={{
                width: { xs: "100%", md: "auto" },
                color: "rgba(0, 0, 0, 0.6)",
                borderRadius: "10rem",
                borderColor: "rgba(128, 128, 128, 0.6)",
                fontSize: "13px",
                fontWeight: "bold",
                paddingX: "16px",
                paddingY: "10px",
                justifyContent: "center",
                "&:hover": {
                  backgroundColor: "transparent",
                  borderColor: "orange",
                  color: "orange",
                },
              }}
            >
              Danh mục nghề
            </Button>

            {open && (
              <Portal>
                <Box
                  sx={{
                    position: "absolute",
                    top: anchorRef.current?.getBoundingClientRect().bottom ?? 0,
                    left: anchorRef.current?.getBoundingClientRect().left ?? 0,
                    zIndex: 1300,
                  }}
                >
                  <Paper
                    sx={{
                      marginTop: 3,
                      padding: 2,
                      borderRadius: 2,
                      boxShadow: 3,
                      minWidth: 200,
                      maxHeight: 300,
                      overflowY: "auto",
                    }}
                  >
                    <ul className="space-y-1">
                      <li className="hover:text-orange-500 cursor-pointer">
                        IT - Phần mềm
                      </li>
                      <li className="hover:text-orange-500 cursor-pointer">
                        Kinh doanh
                      </li>
                      <li className="hover:text-orange-500 cursor-pointer">
                        Marketing
                      </li>
                      <li className="hover:text-orange-500 cursor-pointer">
                        Thiết kế đồ họa
                      </li>
                      <li className="hover:text-orange-500 cursor-pointer">
                        Hành chính - Nhân sự
                      </li>
                      <li className="hover:text-orange-500 cursor-pointer">
                        Giáo dục - Đào tạo
                      </li>
                      <li className="hover:text-orange-500 cursor-pointer">
                        Tài chính - Kế toán
                      </li>
                    </ul>
                  </Paper>
                </Box>
              </Portal>
            )}
          </Box>
        </ClickAwayListener>

        <input
          type="text"
          placeholder="Vị trí tuyển dụng, tên công ty,..."
          className="w-full md:flex-1 px-4 py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <Button
          variant="outlined"
          startIcon={<Search />}
          sx={{
            width: { xs: "100%", md: "auto" },
            marginLeft: { xs: 0, md: "15px" },
            marginTop: { xs: "4px", md: 0 },
            color: "white",
            borderRadius: "10rem",
            borderColor: "orange",
            fontSize: "13px",
            fontWeight: "bold",
            textTransform: "none",
            backgroundColor: "orange",
            paddingX: "16px",
            paddingY: "10px",
            justifyContent: "center",
            "&:hover": {
              backgroundColor: "rgba(255,140,0,1)",
            },
          }}
        >
          Tìm kiếm
        </Button>
      </Box>
      <Box className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 md:gap-6 mt-6 max-w-6xl mx-auto items-center justify-center">
        <Box className="col-span-1 h-full">
          <Box
            className="group w-full rounded-3xl shadow-md p-6 flex flex-col gap-3 h-full relative transition-all duration-300 overflow-hidden"
            sx={{
              height: "100%",
              width: "100%",
              backgroundImage: `url(${image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "24px",
            }}
          >
            <Box className="flex items-center justify-between">
              <Box className="flex items-center">
                <BriefcaseBusiness className="text-orange-500 mr-2" />
                <p className="text-xl font-bold">Thị trường việc làm</p>
              </Box>
              <p className="text-orange-500 font-semibold text-xl">{date}</p>
            </Box>

            <Box>
              <Box className="flex items-center">
                <p className="font-semibold text-lg mr-2">Việc tuyển dụng</p>
                <p className="text-xl text-orange-400 font-semibold mr-1">
                  {TodayJobStats.totalJobs}
                </p>
              </Box>
              <Box className="flex items-center">
                <p className="font-semibold text-lg mr-2">
                  Việc làm mới hôm nay
                </p>
                <p className="text-xl text-orange-400 font-semibold mr-1">
                  {TodayJobStats.newJobsToday}
                </p>
                <Box className="items-center justify-center bg-orange-400/20 p-2 rounded-full">
                  <ChartNoAxesCombined size={20} className="text-orange-400" />
                </Box>
              </Box>
            </Box>

            <Box  className="flex items-center justify-center absolute w-32 h-9 bg-orange-400 bottom-15 sm:bottom-5 right-0 rounded-l-2xl text-white opacity-0 group-hover:opacity-100 translate-x-full group-hover:translate-x-0 transition-all duration-300 cursor-pointer">
              <p className="mr-1">Xem thêm</p>
              <ChevronsRight />
            </Box>
          </Box>
        </Box>
        <Box className="col-span-2 h-full">
          <HeroSlider images={sliderImages} height="200px" />
        </Box>
      </Box>
    </section>
  );
};

export default SearchSection;

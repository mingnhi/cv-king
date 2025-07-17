"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import JobCard from "@/components/ui/common/JobCard";
import PaginationItem from "@/components/ui/common/PaginationItem";
import FilterItem from "../../common/FilterItem";
import Image from "next/image";
import VerticalBanner2 from "@/assets/images/vertical2.png";
import VerticalBanner3 from "@/assets/images/vertical5.png"
import banner1 from "@/assets/images/banner1.png";

const FILTER_OPTIONS = [
  "Tất cả",
  "Địa điểm",
  "Mức lương",
  "Kinh nghiệm",
  "Ngành nghề",
] as const;
type FilterOption = (typeof FILTER_OPTIONS)[number];

const FILTER_DATA: Record<FilterOption, string[]> = {
  "Tất cả": [],
  "Địa điểm": [
    "Hà Nội",
    "Hồ Chí Minh",
    "Đà Nẵng",
    "Cần Thơ",
    "Quảng Ninh",
    "Hải Phòng",
    "Bắc Ninh",
    "Bình Dương",
    "Đồng Nai",
    "Nghệ An",
    "Thanh Hóa",
    "Hải Dương",
  ],
  "Mức lương": ["< 10 triệu", "10 - 20 triệu", "20 - 30 triệu", "> 30 triệu"],
  "Kinh nghiệm": ["Chưa có", "1 - 2 năm", "3 - 5 năm", "5+ năm"],
  "Ngành nghề": ["Công nghệ", "Kinh doanh", "Marketing", "Tài chính"],
};

const JOBS = [
  {
    id: "1",
    image: banner1,
    title: "Nhân viên kinh doanh phần mềm",
    company: "Công ty ABC",
    salary: "10 - 20 triệu",
    location: "Hà Nội",
    experience: "1 - 2 năm",
    field: "Công nghệ",
  },
  {
    id: "2",
    image: banner1,
    title: "Tư vấn bảo hiểm tài chính",
    company: "Sun Life",
    salary: "16 - 35 triệu",
    location: "Hồ Chí Minh",
    experience: "3 - 5 năm",
    field: "Tài chính",
  },
  {
    id: "3",
    image: banner1,
    title: "Marketing Online Executive",
    company: "Công ty XYZ",
    salary: "20 - 30 triệu",
    location: "Đà Nẵng",
    experience: "1 - 2 năm",
    field: "Marketing",
  },
  {
    id: "4",
    image: banner1,
    title: "Nhân viên bán hàng",
    company: "Công ty ABC",
    salary: "< 10 triệu",
    location: "Cần Thơ",
    experience: "Chưa có",
    field: "Kinh doanh",
  },
  {
    id: "5",
    image: banner1,
    title: "Nhân viên bán hàng",
    company: "Công ty ABC",
    salary: "< 10 triệu",
    location: "Cần Thơ",
    experience: "Chưa có",
    field: "Kinh doanh",
  },
  {
    id: "6",
    image: banner1,
    title: "Nhân viên bán hàng",
    company: "Công ty ABC",
    salary: "< 10 triệu",
    location: "Cần Thơ",
    experience: "Chưa có",
    field: "Kinh doanh",
  },
  {
    id: "7",
    image: banner1,
    title: "Nhân viên bán hàng",
    company: "Công ty ABC",
    salary: "< 10 triệu",
    location: "Cần Thơ",
    experience: "Chưa có",
    field: "Kinh doanh",
  },
  {
    id: "8",
    image: banner1,
    title: "Nhân viên bán hàng",
    company: "Công ty ABC",
    salary: "< 10 triệu",
    location: "Cần Thơ",
    experience: "Chưa có",
    field: "Kinh doanh",
  },
  {
    id: "9",
    image: banner1,
    title: "Nhân viên bán hàng",
    company: "Công ty ABC",
    salary: "< 10 triệu",
    location: "Cần Thơ",
    experience: "Chưa có",
    field: "Kinh doanh",
  },
  {
    id: "10",
    image: banner1,
    title: "Nhân viên bán hàng",
    company: "Công ty ABC",
    salary: "< 10 triệu",
    location: "Quảng Ninh",
    experience: "Chưa có",
    field: "Kinh doanh",
  },
  {
    id: "11",
    image: banner1,
    title: "Nhân viên bán hàng",
    company: "Công ty ABC",
    salary: "< 10 triệu",
    location: "Hải Phòng",
    experience: "Chưa có",
    field: "Kinh doanh",
  },
  {
    id: "12",
    image: banner1,
    title: "Nhân viên bán hàng",
    company: "Công ty ABC",
    salary: "< 10 triệu",
    location: "Bắc Ninh",
    experience: "Chưa có",
    field: "Kinh doanh",
  },
  {
    id: "17",
    image: banner1,
    title: "Nhân viên bán hàng",
    company: "Công ty ABC",
    salary: "< 10 triệu",
    location: "Cần Thơ",
    experience: "Chưa có",
    field: "Kinh doanh",
  },
];

const JobsSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedFilter, setSelectedFilter] =
    useState<FilterOption>("Địa điểm");
  const [selectedSubFilter, setSelectedSubFilter] = useState<string | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  useEffect(() => {
    const updatePageSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setPageSize(4);
      } else {
        setPageSize(9);
      }
    };
    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilter, selectedSubFilter]);

  const handleFilterChange = (filter: string, subFilter: string | null) => {
    setSelectedFilter(filter as FilterOption);
    setSelectedSubFilter(subFilter);
  };

  const filteredJobs =
    selectedFilter === "Tất cả" || !selectedSubFilter
      ? JOBS
      : JOBS.filter((job) => {
          switch (selectedFilter) {
            case "Địa điểm":
              return job.location === selectedSubFilter;
            case "Mức lương":
              return job.salary === selectedSubFilter;
            case "Kinh nghiệm":
              return job.experience === selectedSubFilter;
            case "Ngành nghề":
              return job.field === selectedSubFilter;
            default:
              return true;
          }
        });

  const totalPages = Math.ceil(filteredJobs.length / pageSize);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <section className="bg-gray-100 py-5 px-6">
      <Box
        className={`max-w-6xl mx-auto  ${isMobile ? "flex flex-col" : "flex"}`}
      >
        <Box
          className={isMobile ? "w-full" : "w-[70%] inline-block"}
          sx={{ verticalAlign: "top" }}
        >
          <Box className="mb-4">
            <h1 className="text-orange-400 font-semibold text-3xl">
              Việc làm hấp dẫn
            </h1>
          </Box>
          {isMobile && (
            <Box
              sx={{
                width: "100%",
                maxWidth: 500,
                mx: "auto",
                my: 2,
              }}
            >
              <Image
                src={VerticalBanner2}
                alt="Vertical Banner"
                width={300}
                height={400}
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </Box>
          )}

          <FilterItem
            filterData={FILTER_DATA}
            filterOptions={FILTER_OPTIONS}
            onFilterChange={handleFilterChange}
          />

          <Box className="flex flex-col gap-6 mt-4">
            <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
              {paginatedJobs.length > 0 ? (
                paginatedJobs.map((job) => <JobCard key={job.id} job={job} />)
              ) : (
                <Typography className="text-center text-gray-500 col-span-full">
                  Không có công việc nào để hiển thị.
                </Typography>
              )}
            </Box>
            <Box
              sx={{
                backgroundColor: "transparent",
                paddingY: 2,
                display: "flex",
                justifyContent: "center",
                width: !isMobile ? "66.6667%" : "100%",
                maxWidth: !isMobile ? "800px" : "none",
                marginX: "auto",
              }}
            >
              <PaginationItem
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </Box>
          </Box>
        </Box>

        {!isMobile && (
          <Box
            className=" inline-block"
            sx={{ verticalAlign: "top", marginLeft: "1rem" }}
          >
            <Image
              src={VerticalBanner3}
              alt="Vertical Banner"
              width={300}
              height={400}
              style={{ objectFit: "cover" }}
              className="rounded-xl shadow-amber-600 shadow-lg w-full h-auto lg:mt-9"
            />
          </Box>
        )}
      </Box>
    </section>
  );
};

export default JobsSection;

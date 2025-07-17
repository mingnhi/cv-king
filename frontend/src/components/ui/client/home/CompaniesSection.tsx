"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import SubFilter from "@/components/ui/common/SubFilterItem";
import CompanyCard from "@/components/ui/common/CompanyCard";
import imageCompany from "@/assets/images/jobstat1.png";
import PaginationItem from "../../common/PaginationItem";
const INDUSTRIES = [
  "Tất cả",
  "Ngân hàng",
  "Bất động sản",
  "Xây dựng",
  "IT - Phần mềm",
  "Tài chính",
  "Bán lẻ - Hàng tiêu dùng - FMCG",
  "Sản xuất",
  "Logistics - Vận tải",
  "Viễn thông",
  "Bảo hiểm",
  "Nhà hàng / Khách sạn",
  "IT - Phần cứng",
  "Marketing / Truyền thông / Quảng cáo",
  "Chứng khoán",
  "Điện tử / Điện lạnh",
  "Xuất nhập khẩu",
  "Thương mại điện tử",
  "Dược phẩm / Y tế / Công nghệ sinh học",
  "Tư vấn",
];

const COMPANIES = [
  {
    id: "1",
    name: "Techcombank",
    industry: "Ngân hàng",
    image: imageCompany,
    location: "Hà Nội",
    totalJobs: 88,
    description:
      "Ngân hàng hàng đầu tại Việt Nam với các dịch vụ tài chính hiện đại.",
  },
  {
    id: "2",
    name: "Vingroup",
    industry: "Bất động sản",
    image: imageCompany,
    location: "TP. Hồ Chí Minh",
    totalJobs: 120,
    description:
      "Tập đoàn bất động sản và dịch vụ hàng đầu Việt Nam, phát triển các dự án Vinhomes và Vincom.",
  },
  {
    id: "3",
    name: "FPT Software",
    industry: "IT - Phần mềm",
    image: imageCompany,
    location: "Hà Nội",
    totalJobs: 250,
    description:
      "Công ty công nghệ thông tin lớn nhất Việt Nam, chuyên về phát triển phần mềm và chuyển đổi số.",
  },
  {
    id: "4",
    name: "Vinamilk",
    industry: "Bán lẻ - Hàng tiêu dùng - FMCG",
    image: imageCompany,
    location: "TP. Hồ Chí Minh",
    totalJobs: 60,
    description:
      "Thương hiệu sữa và sản phẩm tiêu dùng hàng đầu, xuất khẩu sang hơn 50 quốc gia.",
  },
  {
    id: "5",
    name: "Tập đoàn Hoà Phát",
    industry: "Sản xuất",
    image: imageCompany,
    location: "Hải Dương",
    totalJobs: 90,
    description:
      "Nhà sản xuất thép và vật liệu xây dựng hàng đầu Việt Nam, tiên phong trong sản xuất xanh.",
  },
  {
    id: "6",
    name: "Viettel",
    industry: "Viễn thông",
    image: imageCompany,
    location: "Hà Nội",
    totalJobs: 150,
    description:
      "Tập đoàn viễn thông lớn nhất Việt Nam, cung cấp dịch vụ di động và giải pháp công nghệ.",
  },
  {
    id: "7",
    name: "Shopee Việt Nam",
    industry: "Thương mại điện tử",
    image: imageCompany,
    location: "TP. Hồ Chí Minh",
    totalJobs: 200,
    description:
      "Nền tảng thương mại điện tử hàng đầu, cung cấp trải nghiệm mua sắm trực tuyến tiện lợi.",
  },
  {
    id: "8",
    name: "Tập đoàn Sun Group",
    industry: "Nhà hàng / Khách sạn",
    image: imageCompany,
    location: "Đà Nẵng",
    totalJobs: 75,
    description:
      "Tập đoàn phát triển du lịch và khách sạn cao cấp, sở hữu các khu nghỉ dưỡng như InterContinental Danang.",
  },
  {
    id: "9",
    name: "VPBank",
    industry: "Tài chính",
    image: imageCompany,
    location: "Hà Nội",
    totalJobs: 100,
    description:
      "Ngân hàng thương mại hàng đầu, cung cấp các giải pháp tài chính cá nhân và doanh nghiệp.",
  },
  {
    id: "10",
    name: "TMA Solutions",
    industry: "IT - Phần mềm",
    image: imageCompany,
    location: "TP. Hồ Chí Minh",
    totalJobs: 180,
    description:
      "Công ty gia công phần mềm quốc tế, chuyên cung cấp giải pháp công nghệ cho khách hàng toàn cầu.",
  },
  {
    id: "11",
    name: "Bamboo Airways",
    industry: "Logistics - Vận tải",
    image: imageCompany,
    location: "Hà Nội",
    totalJobs: 50,
    description:
      "Hãng hàng không tư nhân, cung cấp dịch vụ vận tải hàng không chất lượng cao.",
  },
];
const CompaniesSection: React.FC = () => {
  const [selectedSubFilter, setSelectedSubFilter] = useState<string>("Tất cả");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  // Thêm trạng thái để quản lý danh sách công ty được theo dõi
  const [followedCompanies, setFollowedCompanies] = useState<string[]>([]);

  useEffect(() => {
    const updatePageSize = () => {
      const width = window.innerWidth;
      setPageSize(width < 640 ? 4 : 9);
    };
    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedSubFilter]);

  const filteredCompanies =
    selectedSubFilter === "Tất cả"
      ? COMPANIES
      : COMPANIES.filter((company) => company.industry === selectedSubFilter);

  const totalPages = Math.ceil(filteredCompanies.length / pageSize);

  const paginatedCompanies = filteredCompanies.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleSubFilterChange = (sub: string) => {
    setSelectedSubFilter(sub);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFollow = (companyId: string) => {
    setFollowedCompanies((prev) =>
      prev.includes(companyId)
        ? prev.filter((id) => id !== companyId)
        : [...prev, companyId]
    );
  };
  useEffect(() => {
    const savedFollowed = localStorage.getItem("followedCompanies");
    if (savedFollowed) {
      setFollowedCompanies(JSON.parse(savedFollowed));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem(
      "followedCompanies",
      JSON.stringify(followedCompanies)
    );
  }, [followedCompanies]);

  return (
    <section className="py-5 px-6">
      <Box className="max-w-6xl mx-auto">
        <h1 className="text-orange-400 font-semibold text-3xl mb-4">
          Công ty tuyển dụng
        </h1>
        <Box className="rounded-3xl shadow-sm p-4 bg-white">
          <Box className="mb-4">
            <h2 className="font-semibold text-xl">Thương hiệu lớn tiêu biểu</h2>
          </Box>

          <SubFilter
            subFilters={INDUSTRIES}
            selectedSubFilter={selectedSubFilter}
            onSubFilterChange={handleSubFilterChange}
          />

          <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {paginatedCompanies.length > 0 ? (
              paginatedCompanies.map((company) => (
                <CompanyCard
                  key={company.id}
                  company={company}
                  isFollowed={followedCompanies.includes(company.id)}
                  onFollow={() => handleFollow(company.id)}
                />
              ))
            ) : (
              <Typography className="text-center text-gray-500 col-span-full">
                Không có công ty nào trong ngành này.
              </Typography>
            )}
          </Box>
          {totalPages > 1 && (
            <Box className="mt-6">
              <PaginationItem
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </Box>
          )}
        </Box>
      </Box>
    </section>
  );
};

export default CompaniesSection;

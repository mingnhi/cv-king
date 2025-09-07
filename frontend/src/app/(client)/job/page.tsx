"use client";
import React, { useState } from "react";
import { Job } from "@/types/job.type";
import BreadcrumbTabActive from "@/components/ui/common/breadcrumb/BreadcrumbTabActive";
import JobSearch from "@/components/ui/client/job/JobSearch";
import ActiveFilters from "@/components/ui/client/job/ActiveFilters";
import JobFilters from "@/components/ui/client/job/JobFilters";
import JobList from "@/components/ui/client/job/JobList";

// Mock data can be moved to a separate file later, but stays here for now.
const jobs: Job[] = [
  {
    id: 1,
    title: "Lập Trình Viên Frontend Senior",
    company: "TechCorp Vietnam",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=face",
    location: "TP. Hồ Chí Minh",
    salary: "20 - 30 triệu",
    type: "Toàn thời gian",
    experience: "3-5 năm",
    posted: "2 ngày trước",
    postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    tags: ["React", "TypeScript", "Remote"],
    description:
      "Chúng tôi đang tìm kiếm một Lập trình viên Frontend Senior để gia nhập đội ngũ năng động...",
    urgent: false,
    featured: true,
  },
  {
    id: 2,
    title: "Quản Lý Sản Phẩm",
    company: "StartupVN",
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=64&h=64&fit=crop&crop=face",
    location: "Hà Nội",
    salary: "18 - 25 triệu",
    type: "Toàn thời gian",
    experience: "2-4 năm",
    posted: "1 ngày trước",
    postedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    tags: ["Chiến lược", "Phân tích", "Agile"],
    description:
      "Tham gia đội ngũ sản phẩm để thúc đẩy sự đổi mới và tăng trưởng...",
    urgent: true,
    featured: false,
  },
  {
    id: 3,
    title: "Thiết Kế UX/UI",
    company: "Design Studio",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    location: "Đà Nẵng",
    salary: "12 - 20 triệu",
    type: "Bán thời gian",
    experience: "1-3 năm",
    posted: "3 ngày trước",
    postedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    tags: ["Figma", "Design System", "Prototype"],
    description:
      "Tạo ra những trải nghiệm người dùng tuyệt vời cho các sản phẩm số...",
    urgent: false,
    featured: true,
  },
  ...Array.from({ length: 15 }, (_, i) => ({
    id: i + 4,
    title: `${
      [
        "Fullstack Developer",
        "Data Scientist",
        "DevOps Engineer",
        "Backend Developer",
        "Mobile Developer",
      ][i % 5]
    }`,
    company: `${
      [
        "TechViet Corp",
        "Innovation Hub",
        "Digital Solutions",
        "Smart Systems",
        "Future Tech",
      ][i % 5]
    }`,
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=face",
    location: ["TP. Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Cần Thơ", "Làm từ xa"][
      i % 5
    ],
    salary: `${10 + (i % 5) * 3} - ${20 + (i % 5) * 4} triệu`,
    type: ["Toàn thời gian", "Bán thời gian", "Hợp đồng", "Freelance"][i % 4],
    experience: ["1-2 năm", "2-4 năm", "3-5 năm", "5+ năm"][i % 4],
    posted: `${(i % 7) + 1} ngày trước`,
    postedDate: new Date(Date.now() - ((i % 7) + 1) * 24 * 60 * 60 * 1000),
    tags: [
      ["React", "TypeScript", "Remote"],
      ["Node.js", "API", "GraphQL"],
      ["Python", "AI", "Machine Learning"],
      ["Java", "Spring", "Microservices"],
      ["Swift", "iOS", "Mobile"],
    ][i % 5],
    description: "Mô tả công việc chi tiết cho vị trí này...",
    urgent: i % 6 === 0,
    featured: i % 8 === 0,
  })),
];

const JobsPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    industry: "",
  });

  const [advancedFilters, setAdvancedFilters] = useState({
    experienceLevels: [] as string[],
    salaryRanges: [] as string[],
    jobTypes: [] as string[],
    industries: [] as string[],
  });
  const jobsPerPage = 9;

  // Filtering and Sorting Logic
  const filteredJobs = jobs.filter((job) => {
    const keywordMatch =
      filters.keyword === "" ||
      job.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
      job.company.toLowerCase().includes(filters.keyword.toLowerCase()) ||
      job.tags.some((tag) =>
        tag.toLowerCase().includes(filters.keyword.toLowerCase())
      );

    const locationMatch =
      filters.location === "" ||
      (filters.location === "ho-chi-minh" &&
        job.location.toLowerCase().includes("hồ chí minh")) ||
      (filters.location === "hanoi" &&
        job.location.toLowerCase().includes("hà nội")) ||
      (filters.location === "da-nang" &&
        job.location.toLowerCase().includes("đà nẵng")) ||
      (filters.location === "can-tho" &&
        job.location.toLowerCase().includes("cần thơ")) ||
      (filters.location === "làm từ xa" &&
        job.location.toLowerCase().includes("làm từ xa"));

    const industryMatch =
      filters.industry === "" ||
      (filters.industry === "it" &&
        (job.title.toLowerCase().includes("developer") ||
          job.title.toLowerCase().includes("lập trình") ||
          job.tags.some((tag) =>
            ["react", "node.js", "python"].includes(tag.toLowerCase())
          ))) ||
      (filters.industry === "design" &&
        job.title.toLowerCase().includes("thiết kế")) ||
      (filters.industry === "marketing" &&
        job.title.toLowerCase().includes("marketing"));

    const experienceMatch =
      advancedFilters.experienceLevels.length === 0 ||
      advancedFilters.experienceLevels.some((level) =>
        job.experience.includes(level.split(" ")[0])
      );

    const salaryMatch =
      advancedFilters.salaryRanges.length === 0 ||
      advancedFilters.salaryRanges.some((range) => {
        const [min] = job.salary.match(/\d+/g)?.map(Number) || [0];
        if (range === "5-10 triệu") return min >= 5 && min <= 10;
        if (range === "10-20 triệu") return min >= 10 && min <= 20;
        if (range === "20-30 triệu") return min >= 20 && min <= 30;
        if (range === "30+ triệu") return min >= 30;
        return false;
      });

    const jobTypeMatch =
      advancedFilters.jobTypes.length === 0 ||
      advancedFilters.jobTypes.includes(job.type);

    return (
      keywordMatch &&
      locationMatch &&
      industryMatch &&
      experienceMatch &&
      salaryMatch &&
      jobTypeMatch
    );
  });

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return b.postedDate.getTime() - a.postedDate.getTime();
      case "salary-high":
        const salaryA = parseInt(a.salary.split(" - ")[1] || a.salary);
        const salaryB = parseInt(b.salary.split(" - ")[1] || b.salary);
        return salaryB - salaryA;
      case "salary-low":
        const salaryALow = parseInt(a.salary.split(" - ")[0]);
        const salaryBLow = parseInt(b.salary.split(" - ")[0]);
        return salaryALow - salaryBLow;
      default:
        return 0;
    }
  });

  // Handlers
  const handleJobClick = (job: Job) => {
    console.log("Navigating to job details:", job);
    // router.push(`/job/${job.id}`);
  };

  const toggleAdvancedFilter = (
    category: keyof typeof advancedFilters,
    value: string
  ) => {
    setAdvancedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setFilters({ keyword: "", location: "", industry: "" });
    setAdvancedFilters({
      experienceLevels: [],
      salaryRanges: [],
      jobTypes: [],
      industries: [],
    });
    setCurrentPage(1);
  };

  const handleSearch = () => {
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <BreadcrumbTabActive items={[{ name: "Việc làm" }]} />
        </div>

        <JobSearch
          filters={filters}
          setFilters={setFilters}
          handleSearch={handleSearch}
          setCurrentPage={setCurrentPage}
        />

        <ActiveFilters
          filters={filters}
          advancedFilters={advancedFilters}
          setFilters={setFilters}
          toggleAdvancedFilter={toggleAdvancedFilter}
          clearAllFilters={clearAllFilters}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <JobFilters
            advancedFilters={advancedFilters}
            toggleAdvancedFilter={toggleAdvancedFilter}
            clearAllFilters={clearAllFilters}
          />

          <JobList
            jobs={sortedJobs}
            sortBy={sortBy}
            setSortBy={setSortBy}
            viewMode={viewMode}
            setViewMode={setViewMode}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            jobsPerPage={jobsPerPage}
            onJobClick={handleJobClick}
          />
        </div>
      </div>
    </div>
  );
};

export default JobsPage;

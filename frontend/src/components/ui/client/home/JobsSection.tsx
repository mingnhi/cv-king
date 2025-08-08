"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, useMediaQuery, Button } from "@mui/material";
import JobCard from "@/components/ui/common/JobCard";
import PaginationItem from "@/components/ui/common/PaginationItem";
import FilterItem from "../../common/FilterItem";
import Image from "next/image";
import VerticalBanner2 from "@/assets/images/vertical2.png";
import VerticalBanner3 from "@/assets/images/vertical5.png"
import employee from "@/assets/images/employee.png";
import { Briefcase, Eye, Search, Upload } from "lucide-react";

const FILTER_OPTIONS = [
    "Tất cả",
    "Địa điểm",
    "Mức lương",
    "Kinh nghiệm",
    "Ngành nghề",
    "Hình thức",
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
    "Hình thức": ["Online", "offline"]
};

const JOBS = [
    {
        id: "1",
        image: employee,
        title: "Nhân viên kinh doanh phần mềm",
        company: "Công ty ABC",
        salary: "10 - 20 triệu",
        location: "Hà Nội",
        experience: "1 - 2 năm",
        field: "Công nghệ",
        form: "online"
    },
    {
        id: "2",
        image: employee,
        title: "Tư vấn bảo hiểm tài chính",
        company: "Sun Life",
        salary: "16 - 35 triệu",
        location: "Hồ Chí Minh",
        experience: "3 - 5 năm",
        field: "Tài chính",
        form: "offline"
    },
    {
        id: "3",
        image: employee,
        title: "Marketing Online Executive",
        company: "Công ty XYZ",
        salary: "20 - 30 triệu",
        location: "Đà Nẵng",
        experience: "1 - 2 năm",
        field: "Marketing",
        form: "online"
    },
    {
        id: "4",
        image: employee,
        title: "Nhân viên bán hàng",
        company: "Công ty ABC",
        salary: "< 10 triệu",
        location: "Cần Thơ",
        experience: "Chưa có",
        field: "Kinh doanh",
        form: "offline"
    },
    {
        id: "5",
        image: employee,
        title: "Nhân viên bán hàng",
        company: "Công ty ABC",
        salary: "< 10 triệu",
        location: "Cần Thơ",
        experience: "Chưa có",
        field: "Kinh doanh",
        form: "offline"
    },
    {
        id: "6",
        image: employee,
        title: "Nhân viên bán hàng",
        company: "Công ty ABC",
        salary: "< 10 triệu",
        location: "Cần Thơ",
        experience: "Chưa có",
        field: "Kinh doanh",
        form: "offline"
    },
    {
        id: "7",
        image: employee,
        title: "Nhân viên bán hàng",
        company: "Công ty ABC",
        salary: "< 10 triệu",
        location: "Cần Thơ",
        experience: "Chưa có",
        field: "Kinh doanh",
        form: "offline"
    },
    {
        id: "8",
        image: employee,
        title: "Nhân viên bán hàng",
        company: "Công ty ABC",
        salary: "< 10 triệu",
        location: "Cần Thơ",
        experience: "Chưa có",
        field: "Kinh doanh",
        form: "offline"
    },
    {
        id: "9",
        image: employee,
        title: "Nhân viên bán hàng",
        company: "Công ty ABC",
        salary: "< 10 triệu",
        location: "Cần Thơ",
        experience: "Chưa có",
        field: "Kinh doanh",
        form: "offline"
    },
    {
        id: "10",
        image: employee,
        title: "Nhân viên bán hàng",
        company: "Công ty ABC",
        salary: "< 10 triệu",
        location: "Quảng Ninh",
        experience: "Chưa có",
        field: "Kinh doanh",
        form: "offline"
    },
    {
        id: "11",
        image: employee,
        title: "Nhân viên bán hàng",
        company: "Công ty ABC",
        salary: "< 10 triệu",
        location: "Hải Phòng",
        experience: "Chưa có",
        field: "Kinh doanh",
        form: "offline"
    },
    {
        id: "12",
        image: employee,
        title: "Nhân viên bán hàng",
        company: "Công ty ABC",
        salary: "< 10 triệu",
        location: "Bắc Ninh",
        experience: "Chưa có",
        field: "Kinh doanh",
        form: "offline"
    },
    {
        id: "13",
        image: employee,
        title: "Kỹ sư phần mềm",
        company: "FPT Software",
        salary: "20 - 40 triệu",
        location: "Hà Nội",
        experience: "3 - 5 năm",
        field: "Công nghệ",
        form: "online"
    },
    {
        id: "14",
        image: employee,
        title: "Nhân viên kế toán",
        company: "Công ty Tài Chính XYZ",
        salary: "15 - 25 triệu",
        location: "TP. Hồ Chí Minh",
        experience: "1 - 3 năm",
        field: "Tài chính",
        form: "offline"
    },
    {
        id: "15",
        image: employee,
        title: "Chuyên viên marketing",
        company: "VinaMedia",
        salary: "18 - 30 triệu",
        location: "Đà Nẵng",
        experience: "2 - 4 năm",
        field: "Marketing",
        form: "online"
    },
    {
        id: "16",
        image: employee,
        title: "Nhân viên nhân sự",
        company: "Công ty HR Solutions",
        salary: "12 - 20 triệu",
        location: "Hải Phòng",
        experience: "Chưa có",
        field: "Nhân sự",
        form: "offline"
    },
    {
        id: "17",
        image: employee,
        title: "Nhân viên bán hàng",
        company: "Công ty ABC",
        salary: "< 10 triệu",
        location: "Cần Thơ",
        experience: "Chưa có",
        field: "Kinh doanh",
        form: "offline"
    },
    {
        id: "18",
        image: employee,
        title: "Thiết kế đồ họa",
        company: "Creative Studio",
        salary: "15 - 25 triệu",
        location: "Bình Dương",
        experience: "1 - 2 năm",
        field: "Thiết kế",
        form: "online"
    },
    {
        id: "19",
        image: employee,
        title: "Phát triển web",
        company: "TechCorp",
        salary: "25 - 35 triệu",
        location: "Hà Nội",
        experience: "3 - 5 năm",
        field: "Công nghệ",
        form: "online"
    },
    {
        id: "20",
        image: employee,
        title: "Quản lý dự án",
        company: "Project Masters",
        salary: "30 - 50 triệu",
        location: "TP. Hồ Chí Minh",
        experience: "5+ năm",
        field: "Kinh doanh",
        form: "offline"
    },
    {
        id: "21",
        image: employee,
        title: "Nhân viên chăm sóc khách hàng",
        company: "CustomerCare Co.",
        salary: "< 10 triệu",
        location: "Đà Nẵng",
        experience: "Chưa có",
        field: "Kinh doanh",
        form: "offline"
    },
    {
        id: "22",
        image: employee,
        title: "Analyst dữ liệu",
        company: "Data Insights",
        salary: "20 - 30 triệu",
        location: "Hà Nội",
        experience: "2 - 4 năm",
        field: "Công nghệ",
        form: "online"
    },
    {
        id: "23",
        image: employee,
        title: "Nhân viên logistics",
        company: "LogiTech",
        salary: "15 - 25 triệu",
        location: "Bình Dương",
        experience: "1 - 3 năm",
        field: "Kinh doanh",
        form: "offline"
    },
    {
        id: "24",
        image: employee,
        title: "Chuyên viên PR",
        company: "MediaPro",
        salary: "18 - 30 triệu",
        location: "TP. Hồ Chí Minh",
        experience: "2 - 4 năm",
        field: "Marketing",
        form: "online"
    },
    {
        id: "25",
        image: employee,
        title: "Nhân viên IT hỗ trợ",
        company: "TechSupport",
        salary: "10 - 20 triệu",
        location: "Hải Phòng",
        experience: "Chưa có",
        field: "Công nghệ",
        form: "online"
    },
    {
        id: "26",
        image: employee,
        title: "Quản lý tài chính",
        company: "FinancePro",
        salary: "> 30 triệu",
        location: "Cần Thơ",
        experience: "5+ năm",
        field: "Tài chính",
        form: "offline"
    },
    {
        id: "27",
        image: employee,
        title: "Nhân viên tuyển dụng",
        company: "HR Solutions",
        salary: "12 - 20 triệu",
        location: "Quảng Ninh",
        experience: "1 - 2 năm",
        field: "Nhân sự",
        form: "offline"
    },
    {
        id: "28",
        image: employee,
        title: "Thiết kế UI/UX",
        company: "DesignHub",
        salary: "20 - 35 triệu",
        location: "Đà Nẵng",
        experience: "3 - 5 năm",
        field: "Thiết kế",
        form: "online"
    },
    {
        id: "29",
        image: employee,
        title: "Nhân viên kinh doanh bất động sản",
        company: "RealEstate Co.",
        salary: "15 - 30 triệu",
        location: "Bắc Ninh",
        experience: "2 - 4 năm",
        field: "Kinh doanh",
        form: "offline"
    },
    {
        id: "30",
        image: employee,
        title: "Chuyên viên phân tích kinh doanh",
        company: "Business Analytics",
        salary: "25 - 40 triệu",
        location: "TP. Hồ Chí Minh",
        experience: "3 - 5 năm",
        field: "Tài chính",
        form: "online"
    }
];
const JobsSection: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [location, setLocation] = useState('Tất cả địa điểm');
    const [selectedSalary, setSelectedSalary] = useState([]);
    const [selectedExperience, setSelectedExperience] = useState('');
    const [selectedWorkType, setSelectedWorkType] = useState([]);
    const [visibleJobsLimit, setVisibleJobsLimit] = useState(21);
    const handleSalaryChange = (salary) => {
        if (selectedSalary.includes(salary)) {
            setSelectedSalary(selectedSalary.filter(s => s !== salary));
        } else {
            setSelectedSalary([...selectedSalary, salary]);
        }
    };

    const handleWorkTypeChange = (type) => {
        if (selectedWorkType.includes(type)) {
            setSelectedWorkType(selectedWorkType.filter(t => t !== type));
        } else {
            setSelectedWorkType([...selectedWorkType, type]);
        }
    };

    const jobCategories = [
        { name: 'IT - Phần mềm', count: 2340, color: 'bg-orange-100 text-orange-600' },
        { name: 'Kinh doanh', count: 571, color: 'bg-blue-100 text-blue-600' },
        { name: 'Marketing', count: 112, color: 'bg-green-100 text-green-600' },
        { name: 'Nhân sự', count: 192, color: 'bg-purple-100 text-purple-600' },
        { name: 'Thiết kế', count: 81, color: 'bg-pink-100 text-pink-600' }
    ];

    const popularSearches = [
        'Sales Executive', 'Marketing Manager', 'Product Manager', 'Data Analyst'
    ];

    // Danh sách các địa điểm
    const locations = [
        'Tất cả địa điểm',
        'Hà Nội',
        'TP. Hồ Chí Minh',
        'Đà Nẵng',
        'Hải Phòng',
        'Cần Thơ',
        'Bình Dương',
        'Đồng Nai',
        'Khánh Hòa',
        'Lâm Đồng',
        'Quảng Nam',
        'Bà Rịa - Vũng Tàu',
        'Long An',
        'Thanh Hóa',
        'Nghệ An',
        'Thừa Thiên Huế'
    ];

    // Render options sử dụng vòng lặp for
    const renderLocationOptions = () => {
        const options = [];
        for (let i = 0; i < locations.length; i++) {
            options.push(
                <option key={i} value={locations[i]}>
                    {locations[i]}
                </option>
            );
        }
        return options;
    };

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
        setVisibleJobsLimit(21);
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
                    case "Hình thức":
                        return job.form === selectedSubFilter;
                    default:
                        return true;
                }
            });

    const totalPages = Math.ceil(filteredJobs.length / pageSize);
    const paginatedJobs = filteredJobs.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const handleShowMore = () => {
        setVisibleJobsLimit(JOBS.length);
    };
    return (
        <section className="bg-gray-100 py-5 px-6 flex flex-row">
            <div className="min-h-screen bg-gray-50 w-[400px]">
                <div className="w-[390px] p-4 ml-0">
                    <div className="space-y-6">
                        {/* Sidebar - Search Filters */}
                        <div>
                            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6 w-[400px] ml-0">
                                {/* Search Section */}
                                <div>
                                    <div className="text-lg font-semibold text-gray-800 mb-4">Tìm việc làm nhanh</div>

                                    {/* Search Input */}
                                    <div className="relative mb-4">
                                        <input
                                            type="text"
                                            placeholder="vị trí, công ty..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        />
                                    </div>

                                    {/* Location Dropdown */}
                                    <div className="mb-4">
                                        <select
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        >
                                            {renderLocationOptions()}
                                        </select>
                                    </div>

                                    {/* Search Button */}
                                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-md transition-colors flex items-center justify-center gap-2">
                                        <Search size={18} />
                                        Tìm Kiếm
                                    </button>
                                </div>

                                {/* Salary Filter */}
                                <div>
                                    <div className="font-medium text-gray-700 mb-3">Mức lương mong muốn</div>
                                    <div className="space-y-2">
                                        {['Dưới 10 triệu', '10 - 15 triệu', '15 - 20 triệu', '20 - 30 triệu', '30 - 50 triệu', 'Thỏa thuận'].map((salary) => (
                                            <label key={salary} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedSalary.includes(salary)}
                                                    onChange={() => handleSalaryChange(salary)}
                                                    className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-600">{salary}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Experience Filter */}
                                <div>
                                    <div className="font-medium text-gray-700 mb-3">Kinh nghiệm</div>
                                    <div className="space-y-2">
                                        {['Chưa có kinh nghiệm', 'Dưới 1 năm', '1 - 3 năm', '3 - 5 năm', 'Trên 5 năm'].map((exp) => (
                                            <label key={exp} className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="experience"
                                                    value={exp}
                                                    checked={selectedExperience === exp}
                                                    onChange={(e) => setSelectedExperience(e.target.value)}
                                                    className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-600">{exp}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Work Type Filter */}
                                <div>
                                    <div className="font-medium text-gray-700 mb-3">Hình thức làm việc</div>
                                    <div className="space-y-2">
                                        {['Bán thời gian', 'Toàn thời gian', 'Remote', 'Thực tập'].map((type) => (
                                            <label key={type} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedWorkType.includes(type)}
                                                    onChange={() => handleWorkTypeChange(type)}
                                                    className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-600">{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Search */}
                                <div>
                                    <div className="font-medium text-gray-700 mb-3">Tìm kiếm nhanh</div>
                                    <div className="bg-orange-500 text-white p-4 rounded-lg">
                                        <div className="text-sm mb-2">Việc làm mới nhất</div>
                                        <div className="text-xs opacity-90 mb-2">Cập nhật mới nhất hôm nay</div>
                                        <div className="text-xs opacity-75">Gồng số đăng tuyển</div>
                                    </div>
                                </div>

                                {/* Popular Searches */}
                                <div>
                                    <div className="font-medium text-gray-700 mb-3">Tìm kiếm gần đây</div>
                                    <div className="space-y-2">
                                        {popularSearches.map((search, index) => (
                                            <button
                                                key={index}
                                                className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                                            >
                                                {search}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Job Categories */}
                        <div className="bg-white rounded-lg shadow-sm p-6 w-[400px] ml-0">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Ngành nghề phổ biến</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {jobCategories.map((category, index) => (
                                    <div
                                        key={index}
                                        className={`${category.color} p-4 rounded-lg cursor-pointer hover:shadow-md transition-shadow`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="font-medium">{category.name}</div>
                                                <div className="text-sm opacity-75">({category.count.toLocaleString()})</div>
                                            </div>
                                            <Briefcase size={24} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CV Section */}
                        <div className="bg-white rounded-lg shadow-sm p-6 w-[400px] ml-0">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Công cụ CV</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2">
                                    <Upload size={18} />
                                    Tạo CV mới
                                </button>
                                <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2">
                                    <Eye size={18} />
                                    Xem mẫu CV
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Box className={`w-[1064px] ml-[30px]  ${isMobile ? "flex flex-col" : "flex"}`}>
                <Box className={isMobile ? "w-full" : "w-[70%] inline-block"} sx={{ verticalAlign: "top" }}>
                    <Box className="mb-4">
                        <h1 className="text-black font-bold text-[64px]">
                            Việc làm tốt nhất
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



                    <Box className="flex flex-col gap-6 mt-4 w-[1064px]">
                        <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start ">
                            {filteredJobs.length > 0 ? (
                                filteredJobs.slice(0, visibleJobsLimit).map((job) => <JobCard key={job.id} job={job} />)
                            ) : (
                                <Typography className="text-center text-gray-500 col-span-full">
                                    Không có công việc nào để hiển thị.
                                </Typography>
                            )}
                        </Box>
                        {visibleJobsLimit < JOBS.length && filteredJobs.length > visibleJobsLimit && (
                            <Box sx={{ display: "flex", justifyContent: "center", paddingY: 2 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleShowMore}
                                    sx={{
                                        backgroundColor: "#facc15", color: "black", "&:hover": { backgroundColor: "#f59e0b" }
                                    }}
                                >
                                    Xem thêm
                                </Button>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>
        </section>
    );
};

export default JobsSection;

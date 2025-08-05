"use client";
import React, { useState } from 'react';

import { Heart, Bookmark, MapPin, DollarSign, Clock, Building } from 'lucide-react';

const CompaniesSection = () => {
  const [activeTab, setActiveTab] = useState('Tất cả');
  const [currentPage, setCurrentPage] = useState(1);

  const tabs = [
    'Tất cả',
    'Ngân hàng',
    'Bất Động sản',
    'Xây dựng',
    'IT - Phần mềm',
    'logistics-vận tải'
  ];

  const jobData = [
    {
      id: 1,
      company: 'Techcombank',
      type: 'Ngân hàng • Công ty niêm yết',
      rating: 4.4,
      reviews: 1234,
      urgent: true,
      featured: false,
      location: 'Hà Nội, TP.HCM, Đà Nẵng',
      salary: '10 - 20 triệu',
      experience: 'Toàn thời gian-Hybrid',
      skills: ['Chuyên viên tín dụng', 'Chuyên viên CNTT'],
      benefits: [
        'Bảo hiểm xã hội theo cơ chế',
        'Thưởng hiệu quả 2-6 tháng lương',
        'Đào tạo & phát triển nghề nghiệp',
        'Nghỉ phép 15 ngày/năm'
      ],
      postedDate: '31/07/2025 lúc 14 h30'
    },
    {
      id: 2,
      company: 'Techcombank',
      type: 'Ngân hàng • Công ty niêm yết',
      rating: 4.8,
      reviews: 1234,
      urgent: false,
      featured: true,
      location: 'Hà Nội, TP.HCM, Đà Nẵng',
      salary: '12 - 20 triệu',
      experience: 'Toàn thời gian-Hybrid',
      skills: ['Chuyên viên tín dụng', 'Chuyên viên CNTT'],
      benefits: [
        'Bảo hiểm xã hội theo cơ chế',
        'Thưởng hiệu quả 2-6 tháng lương',
        'Đào tạo & phát triển nghề nghiệp',
        'Nghỉ phép 15 ngày/năm'
      ],
      postedDate: '31/07/2025 lúc 14 h30'
    },
    {
      id: 3,
      company: 'Techcombank',
      type: 'Ngân hàng • Công ty niêm yết',
      rating: 4.8,
      reviews: 1234,
      urgent: true,
      featured: false,
      location: 'Hà Nội, TP.HCM, Đà Nẵng',
      salary: '10 - 20 triệu',
      experience: 'Toàn thời gian-Hybrid',
      skills: ['Chuyên viên khách hàng', 'Business Analyst'],
      benefits: [
        'Bảo hiểm xã hội theo cơ chế',
        'Thưởng hiệu quả 2-6 tháng lương',
        'Đào tạo & phát triển nghề nghiệp',
        'Nghỉ phép 15 ngày/năm'
      ],
      postedDate: '31/07/2025 lúc 14 h30'
    },
    {
      id: 4,
      company: 'Techcombank',
      type: 'Ngân hàng • Công ty niêm yết',
      rating: 4.0,
      reviews: 1234,
      urgent: false,
      featured: true,
      location: 'Hà Nội, TP.HCM, Đà Nẵng',
      salary: '10 - 20 triệu',
      experience: 'Toàn thời gian-Hybrid',
      skills: ['Chuyên viên tín dụng', 'Chuyên viên CNTT'],
      benefits: [
        'Bảo hiểm xã hội theo cơ chế',
        'Thưởng hiệu quả 2-6 tháng lương',
        'Đào tạo & phát triển nghề nghiệp',
        'Nghỉ phép 15 ngày/năm'
      ],
      postedDate: '31/07/2025 lúc 14 h30'
    }
  ];

  const JobCard = ({ job }) => (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <Building className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{job.company}</h3>
            <p className="text-sm text-gray-600">{job.type}</p>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-yellow-400">★</span>
              <span className="text-sm font-medium">{job.rating}</span>
              <span className="text-sm text-gray-500">({job.reviews} reviews)</span>
            </div>
                         <div className="flex gap-2 mt-2">
              {job.urgent && (
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
                  Gấp
                </span>
              )}
              {job.featured && (
                <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-medium">
                  Hot job
                </span>
              )}
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium">
                Tuyển gấp
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Job Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <DollarSign className="w-4 h-4" />
          <span>{job.salary}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{job.experience}</span>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Vị trí đang tuyển:</h4>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Phúc lợi nổi bật:</h4>
        <ul className="space-y-1">
          {job.benefits.map((benefit, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
              <span className="text-green-500 mt-1">•</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <button className="bg-[#F6E2CC] hover:bg-orange-600 text-[#CD6D00] px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 w-[230px h-[30px],">
          Xem việc làm
          <span>→</span>
        </button>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Bookmark className="w-4 h-4 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Heart className="w-4 h-4 text-gray-400" />
          </button>

        </div>
                
      </div>
            <span className="text-xs text-gray-500">

            Đăng ngày: {job.postedDate}
          </span>
    </div>
  );

  const Pagination = () => (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button className="p-2 hover:bg-gray-100 rounded">
        <span className="text-gray-400">«</span>
      </button>
      <button className="p-2 hover:bg-gray-100 rounded">
        <span className="text-gray-400">‹</span>
      </button>
      
      {[1, 2, 3, 4, 5, 6].map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`w-10 h-10 rounded ${
            currentPage === page
              ? 'bg-orange-500 text-white'
              : 'hover:bg-gray-100 text-gray-700'
          }`}
        >
          {page}
        </button>
      ))}
      
      <button className="p-2 hover:bg-gray-100 rounded">
        <span className="text-gray-400">›</span>
      </button>
      <button className="p-2 hover:bg-gray-100 rounded">
        <span className="text-gray-400">»</span>
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              CÔNG TY TUYỂN DỤNG
            </h1>
            <p className="text-lg text-red-500 mb-4">
              Thương hiệu lớn tin tưởng sử dụng
            </p>
            <p className="text-gray-600 mb-2">
              Khám phá cơ hội nghề nghiệp tại những thương hiệu uy tín nhất.
            </p>
            <p className="text-gray-600 mb-6">
              Tìm kiếm môi trường làm việc lý tưởng với mức lương hấp dẫn và cơ hội phát triển không giới hạn.
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? tab === 'Tất cả'
                        ? 'bg-red-500 text-white'
                        : 'bg-orange-100 text-orange-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Job Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobData.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
};

export default CompaniesSection;

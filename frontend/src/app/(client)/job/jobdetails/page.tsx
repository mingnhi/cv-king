"use client";
import React, { useState } from "react";
import {
  MapPin,
  DollarSign,
  Clock,
  Bookmark,
  Share2,
  Building2,
  Users,
  Calendar,
  CheckCircle,
  AlertCircle,
  Star,
  ArrowLeft,
  Send,
  Eye,
  Globe,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";
import BreadcrumbTabActive from "@/components/ui/common/breadcrumb/BreadcrumbTabActive";

interface JobDetailPageProps {
  jobId: string | null;
  navigate?: (page: string, id?: string) => void;
}

export default function JobDetailPage({ jobId, navigate }: JobDetailPageProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);

  // Mock job data - in real app would fetch based on jobId
  const job = {
    id: jobId || "1",
    title: "Lập Trình Viên Frontend Senior",
    company: "TechCorp Vietnam",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=96&h=96&fit=crop&crop=face",
    location: "TP. Hồ Chí Minh",
    salary: "25 - 35 triệu",
    type: "Toàn thời gian",
    experience: "3-5 năm",
    posted: "2 ngày trước",
    deadline: "30/12/2024",
    featured: true,
    urgent: false,
    views: 234,
    applicants: 45,
    tags: ["React", "TypeScript", "Node.js", "Remote", "Senior Level"],
    description: `Chúng tôi đang tìm kiếm một Senior Frontend Developer có kinh nghiệm để gia nhập đội ngũ phát triển sản phẩm của chúng tôi. Bạn sẽ chịu trách nhiệm xây dựng và duy trì các ứng dụng web hiện đại, làm việc chặt chẽ với đội thiết kế UX/UI và backend.

Trách nhiệm chính:
• Phát triển và duy trì các ứng dụng web sử dụng React, TypeScript
• Hợp tác với đội thiết kế để hiện thực hóa UI/UX
• Tối ưu hóa hiệu suất ứng dụng
• Code review và mentoring các developer junior
• Tham gia vào quy trình phát triển sản phẩm

Môi trường làm việc:
• Văn phòng hiện đại tại trung tâm TP.HCM
• Flexible working time
• Remote 2-3 ngày/tuần
• Team building và các hoạt động nội bộ thường xuyên`,
    requirements: [
      "3+ năm kinh nghiệm với React và TypeScript",
      "Hiểu biết sâu về HTML, CSS, JavaScript ES6+",
      "Kinh nghiệm với state management (Redux, Zustand)",
      "Có kinh nghiệm làm việc với API RESTful và GraphQL",
      "Kiến thức về testing (Jest, React Testing Library)",
      "Kinh nghiệm với Git và CI/CD",
      "Khả năng giao tiếp tốt và làm việc nhóm",
    ],
    benefits: [
      "Lương từ 25-35 triệu VND (có thể thương lượng theo năng lực)",
      "Thưởng dự án và KPI hấp dẫn",
      "Bảo hiểm xã hội, y tế đầy đủ theo quy định",
      "Bảo hiểm sức khỏe cao cấp cho cá nhân và gia đình",
      "Làm việc từ xa 2-3 ngày/tuần",
      "13th month salary + performance bonus",
      "Cơ hội học tập và phát triển với budget training",
      "Môi trường làm việc trẻ, năng động và sáng tạo",
      "Các hoạt động team building, du lịch công ty",
    ],
    companyInfo: {
      name: "TechCorp Vietnam",
      size: "100-500 nhân viên",
      industry: "Công nghệ thông tin",
      website: "https://techcorp.vn",
      email: "hr@techcorp.vn",
      phone: "+84 28 1234 5678",
      address: "Tầng 15, Tòa nhà ABC, 123 Nguyễn Huệ, Quận 1, TP.HCM",
      description:
        "TechCorp Vietnam là một công ty công nghệ hàng đầu chuyên phát triển các giải pháp phần mềm cho doanh nghiệp. Với hơn 8 năm kinh nghiệm, chúng tôi đã phục vụ hơn 200+ khách hàng trong và ngoài nước.",
      established: "2016",
      specialties: [
        "Web Development",
        "Mobile Apps",
        "Cloud Solutions",
        "AI/ML",
      ],
    },
  };

  const relatedJobs = [
    {
      id: "2",
      title: "Frontend Developer",
      company: "StartupVN",
      salary: "18 - 25 triệu",
      location: "Hà Nội",
      posted: "1 ngày trước",
      type: "Toàn thời gian",
      urgent: false,
    },
    {
      id: "3",
      title: "React Developer",
      company: "Digital Agency",
      salary: "20 - 28 triệu",
      location: "Đà Nẵng",
      posted: "3 ngày trước",
      type: "Toàn thời gian",
      urgent: true,
    },
    {
      id: "4",
      title: "Full Stack Developer",
      company: "Tech Solutions",
      salary: "22 - 32 triệu",
      location: "TP. Hồ Chí Minh",
      posted: "2 ngày trước",
      type: "Toàn thời gian",
      urgent: false,
    },
  ];

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.target as HTMLImageElement;
    target.src = `data:image/svg+xml;base64,${btoa(`
      <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="96" height="96" rx="12" fill="#f26b38"/>
        <path d="M48 24C54.6274 24 60 29.3726 60 36V60C60 66.6274 54.6274 72 48 72C41.3726 72 36 66.6274 36 60V36C36 29.3726 41.3726 24 48 24ZM48 30C44.6863 30 42 32.6863 42 36V60C42 63.3137 44.6863 66 48 66C51.3137 66 54 63.3137 54 60V36C54 32.6863 51.3137 30 48 30Z" fill="white"/>
      </svg>
    `)}`;
  };

  const handleApply = () => {
    setShowApplyModal(false);
    if (navigate) {
      navigate("cv-builder");
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${job.title} - ${job.company}`,
        text: `Tìm hiểu về vị trí ${job.title} tại ${job.company}`,
        url: window.location.href,
      });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      // In a real app, show a toast notification here
    }
  };

  const ApplyModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="font-semibold text-gray-900 mb-4">
          Ứng tuyển: {job.title}
        </h3>
        <p className="text-gray-600 mb-6">
          Bạn có chắc chắn muốn ứng tuyển cho vị trí này không? Hệ thống sẽ
          chuyển bạn đến trang tạo CV.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => setShowApplyModal(false)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Hủy
          </button>
          <button
            onClick={handleApply}
            className="flex-1 px-4 py-2 bg-[#f26b38] hover:bg-[#e55a2b] text-white rounded-lg transition-colors"
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <BreadcrumbTabActive
            items={[
              { name: "Trang chủ" },
              { name: "Việc làm" },
              { name: job.title },
            ]}
          />
        </div>

        {/* Back Button */}
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate?.("jobs")}
            className="flex items-center text-gray-600 hover:text-[#f26b38] transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại danh sách việc làm
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header Card */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-16 h-16 rounded-lg object-cover"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h1 className="text-2xl font-bold text-gray-900">
                        {job.title}
                      </h1>
                      {job.featured && (
                        <span className="bg-[#f26b38] text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current" />
                          NỔI BẬT
                        </span>
                      )}
                      {job.urgent && (
                        <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          URGENT
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-gray-700 mb-2 flex items-center">
                      <Building2 className="h-4 w-4 mr-2 text-gray-400" />
                      {job.company}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {job.views} lượt xem
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {job.applicants} ứng viên
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`p-2 rounded-lg border transition-colors ${
                      isBookmarked
                        ? "text-[#f26b38] border-[#f26b38] bg-orange-50"
                        : "text-gray-400 border-gray-300 hover:text-[#f26b38] hover:border-[#f26b38]"
                    }`}
                  >
                    <Bookmark
                      className={`h-4 w-4 ${
                        isBookmarked ? "fill-current" : ""
                      }`}
                    />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-lg border border-gray-300 text-gray-400 hover:text-[#f26b38] hover:border-[#f26b38] transition-colors"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Job Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
                  <span>Đăng {job.posted}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
                  <span>Hạn: {job.deadline}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {job.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-orange-50 text-[#f26b38] text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowApplyModal(true)}
                  className="flex-1 sm:flex-none bg-[#f26b38] hover:bg-[#e55a2b] text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Ứng tuyển ngay
                </button>
                <button
                  onClick={() => navigate?.("company-detail", "1")}
                  className="flex-1 sm:flex-none border border-gray-300 hover:border-[#f26b38] hover:text-[#f26b38] px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Building2 className="h-4 w-4" />
                  Xem công ty
                </button>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="font-semibold text-gray-900 mb-4">
                Mô tả công việc
              </h2>
              <div className="prose prose-gray max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {job.description}
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="font-semibold text-gray-900 mb-4">
                Yêu cầu công việc
              </h2>
              <ul className="space-y-3">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Quyền lợi</h2>
              <ul className="space-y-3">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Info */}
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">
                Thông tin công ty
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-gray-500">Tên công ty</span>
                  <p className="font-medium text-gray-900">
                    {job.companyInfo.name}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Quy mô</span>
                  <p className="font-medium text-gray-900">
                    {job.companyInfo.size}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Lĩnh vực</span>
                  <p className="font-medium text-gray-900">
                    {job.companyInfo.industry}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Thành lập</span>
                  <p className="font-medium text-gray-900">
                    {job.companyInfo.established}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Địa chỉ</span>
                  <p className="text-gray-700">{job.companyInfo.address}</p>
                </div>

                {/* Contact Info */}
                <div className="pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-500 block mb-3">
                    Thông tin liên hệ
                  </span>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Globe className="h-4 w-4 mr-2 text-gray-400" />
                      <a
                        href={job.companyInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#f26b38] hover:underline"
                      >
                        Website
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="h-4 w-4 mr-2 text-gray-400" />
                      <a
                        href={`mailto:${job.companyInfo.email}`}
                        className="text-[#f26b38] hover:underline"
                      >
                        {job.companyInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{job.companyInfo.phone}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-sm text-gray-500">Chuyên môn</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {job.companyInfo.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => navigate?.("company-detail", "1")}
                  className="w-full border border-gray-300 hover:border-[#f26b38] hover:text-[#f26b38] px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Xem thông tin chi tiết
                </button>
              </div>
            </div>

            {/* Related Jobs */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Việc làm liên quan
              </h3>
              <div className="space-y-4">
                {relatedJobs.map((relatedJob) => (
                  <div
                    key={relatedJob.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-[#f26b38] cursor-pointer transition-colors group"
                    onClick={() => navigate?.("job-detail", relatedJob.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 group-hover:text-[#f26b38] transition-colors line-clamp-1">
                        {relatedJob.title}
                      </h4>
                      {relatedJob.urgent && (
                        <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full flex-shrink-0">
                          URGENT
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {relatedJob.company}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center">
                        <DollarSign className="h-3 w-3 mr-1" />
                        {relatedJob.salary}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {relatedJob.location}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Đăng {relatedJob.posted}
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate?.("jobs")}
                className="w-full border border-gray-300 hover:border-[#f26b38] hover:text-[#f26b38] px-4 py-2 rounded-lg transition-colors mt-4"
              >
                Xem thêm việc làm
              </button>
            </div>
          </div>
        </div>
      </div>

      {showApplyModal && <ApplyModal />}
    </div>
  );
}

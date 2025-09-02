"use client";
import React, { useState } from "react";

const PostJobPage = () => {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    mode: "",
    level: "",
    salaryMin: "",
    salaryMax: "",
    salaryCurrency: "USD",
    description: "",
    requirements: "",
    benefits: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (draft: boolean) => {
    console.log(draft ? "Lưu bản nháp" : "Đăng tuyển", form);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column */}
      <div className="lg:col-span-2 space-y-6">
        {/* Thông tin cơ bản */}
        <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Thông tin cơ bản</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Chức danh *</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-300 text-sm rounded-md px-3 py-2"
                placeholder="VD: Lập trình viên Frontend"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tên công ty *</label>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-300 text-sm rounded-md px-3 py-2"
                placeholder="Tên công ty của bạn"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Địa điểm *</label>
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-300 text-sm rounded-md px-3 py-2"
                placeholder="Nhập địa điểm"
              />
            </div>
            <div className="grid grid-cols-3 gap-3 col-span-full">
              <div>
                <label className="block text-sm font-medium mb-1">Loại công việc *</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 text-sm rounded-md px-3 py-2"
                >
                  <option value="">Chọn loại</option>
                  <option>Toàn thời gian</option>
                  <option>Bán thời gian</option>
                  <option>Hợp đồng</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Hình thức làm việc</label>
                <select
                  name="mode"
                  value={form.mode}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 text-sm rounded-md px-3 py-2"
                >
                  <option value="">Chọn hình thức</option>
                  <option>Remote</option>
                  <option>Hybrid</option>
                  <option>Văn phòng</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Kinh nghiệm</label>
                <select
                  name="level"
                  value={form.level}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 text-sm rounded-md px-3 py-2"
                >
                  <option value="">Chọn mức</option>
                  <option>Junior</option>
                  <option>Mid</option>
                  <option>Senior</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label className="block text-sm font-medium mb-1">Mức lương</label>
              <div className="grid grid-cols-5 gap-3 items-center">
                <input
                  name="salaryMin"
                  value={form.salaryMin}
                  onChange={handleChange}
                  className="col-span-2 bg-gray-50 border border-gray-300 text-sm rounded-md px-3 py-2"
                  placeholder="Tối thiểu"
                />
                <span className="flex justify-center">đến</span>
                <input
                  name="salaryMax"
                  value={form.salaryMax}
                  onChange={handleChange}
                  className="col-span-2 bg-gray-50 border border-gray-300 text-sm rounded-md px-3 py-2"
                  placeholder="Tối đa"
                />
                <select
                  name="salaryCurrency"
                  value={form.salaryCurrency}
                  onChange={handleChange}
                  className="col-span-1 bg-gray-50 border border-gray-300 text-sm rounded-md px-3 py-2"
                >
                  <option>USD</option>
                  <option>VND</option>
                </select>
              </div>
              <span className="text-sm text-gray-500 mt-1 inline-block">/ mỗi tháng</span>
            </div>
          </div>
        </section>

        {/* Mô tả công việc */}
        <section className="bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-semibold">Mô tả công việc</h2>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full bg-gray-50 border rounded px-3 py-2"
            rows={4}
            placeholder="Mô tả công việc *"
          />
          <textarea
            name="requirements"
            value={form.requirements}
            onChange={handleChange}
            className="w-full bg-gray-50 border rounded px-3 py-2"
            rows={3}
            placeholder="Yêu cầu"
          />
          <textarea
            name="benefits"
            value={form.benefits}
            onChange={handleChange}
            className="w-full bg-gray-50 border rounded px-3 py-2"
            rows={3}
            placeholder="Phúc lợi"
          />
        </section>

        {/* Kỹ năng */}
        <section className="bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-semibold">Kỹ năng cần có</h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Nhập kỹ năng và nhấn Enter"
              className="flex-grow bg-gray-50 border px-3 py-2 rounded"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              Thêm
            </button>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Kỹ năng gợi ý</p>
            <div className="flex flex-wrap gap-2">
              {[
                "React", "TypeScript", "JavaScript", "Node.js", "Python", "Java", "PHP", "HTML/CSS", "Vue.js", "Angular",
                "Express.js", "MongoDB", "PostgreSQL", "AWS", "Docker", "Git", "Figma",
                "Product Management", "UX/UI Design", "Marketing", "Sales",
                "Customer Service", "Data Analysis",
              ].map((skill) => (
                <button
                  key={skill}
                  type="button"
                  className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full border"
                >
                  + {skill}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Thông tin ứng tuyển */}
        <section className="bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-semibold">Thông tin ứng tuyển</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Hạn chót nộp hồ sơ</label>
              <input
                type="date"
                name="deadline"
                className="w-full bg-gray-50 border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email liên hệ *</label>
              <input
                type="email"
                name="email"
                placeholder="hr@congty.com"
                className="w-full bg-gray-50 border rounded px-3 py-2"
              />
            </div>
          </div>
          <div className="space-y-2 pt-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-orange-500" />
              <span>Đánh dấu là cần tuyển gấp (+5$)</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-orange-500" />
              <span>Làm nổi bật tin tuyển dụng (+15$)</span>
            </label>
          </div>
        </section>
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        {/* Pricing */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-base font-semibold text-gray-800 mb-4">Chi phí</h3>
          <div className="flex justify-between text-sm text-gray-700 mb-3">
            <span>Đăng tin cơ bản</span>
            <span>Miễn phí</span>
          </div>
          <hr className="border-gray-200 mb-3" />
          <div className="flex justify-between font-semibold text-sm text-gray-900">
            <span>Tổng cộng</span>
            <span>0đ</span>
          </div>
        </div>

        {/* Preview */}
        <div className="bg-white p-6 rounded-lg shadow space-y-3">
          <h3 className="text-lg font-semibold">Xem trước</h3>
          <div><strong>Chức danh:</strong> {form.title || "Chức danh công việc"}</div>
          <div><strong>Công ty:</strong> {form.company || "Tên công ty"}</div>
          <div><strong>Địa điểm:</strong> {form.location || "Địa điểm"}</div>
          <div><strong>Loại:</strong> {form.type || "Loại công việc"}</div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => handleSubmit(true)}
            className="w-full py-2 border rounded hover:bg-gray-100"
          >
            Lưu bản nháp
          </button>
          <button
            onClick={() => handleSubmit(false)}
            className="w-full py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
          >
            Đăng tuyển
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostJobPage;

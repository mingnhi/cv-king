"use client";
import React from "react";
import { jobs } from "@/faker/jobs-data";

const CompanyJobs: React.FC = () => {
    return (
        <div className="bg-[#fff7ef] rounded-xl shadow p-4 mt-4 border border-blue-200">
            <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
                <span className="material-icons text-lg">workic</span>
                Vị trí tuyển dụng
            </h3>
            <div className="flex flex-col gap-4">
                {jobs && jobs.length > 0 ? (
                    jobs.map((job) => (
                        <div
                            key={job.id}
                            className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 border-l-4 border-red-400"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-bold text-[17px] text-[#222]">{job.title}</div>
                                    <div className="flex gap-2 text-[13px] text-gray-600 mt-1">
                                        <span className="flex items-center gap-1">
                                            <span className="material-icons text-[15px]">ic</span>
                                            {job.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <span className="material-icons text-[15px]">ic</span>
                                            {job.type}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <span className="material-icons text-[15px]">ic</span>
                                            Hạn nộp: {job.deadline}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-[13px] text-gray-700 line-clamp-2">{job.description}</div>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-green-600 font-semibold text-[15px]">
                                    Lương: {job.salary}
                                </span>
                                <button className="border border-orange-400 text-orange-400 rounded-full px-3 py-1 text-[13px] font-medium hover:bg-orange-50 transition">
                                    Ứng tuyển
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-gray-400 col-span-full text-center">Chưa có việc làm nào</div>
                )}
            </div>
        </div>
    );
};

export default CompanyJobs;
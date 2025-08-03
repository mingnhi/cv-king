import React from "react";
import { Building2 } from "lucide-react";
import { getCompanyIntroText, getCompanyIntroByIndex } from "@/faker/companyintro-data";

interface CompanyIntroProps {
    companyIndex?: number;
}

const CompanyIntro: React.FC<CompanyIntroProps> = ({ companyIndex = 0 }) => {
    // Lấy dữ liệu intro từ faker
    const intro = getCompanyIntroText(companyIndex);
    const companyData = getCompanyIntroByIndex(companyIndex);
    const paragraphs = intro.split(/\n\s*\n/);

    return (
        <div className="border border-blue-300 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
                <Building2 className="text-black w-5 h-5" />
                <h3 className="text-lg font-semibold text-black">Giới thiệu công ty</h3>
            </div>
            <hr className="mb-4 border-t border-gray-300" />

            {/* Thông tin cơ bản */}
            {companyData && (
                <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        {companyData.foundedYear && (
                            <div>
                                <span className="font-semibold text-gray-700">Thành lập:</span>
                                <span className="ml-2 text-gray-600">{companyData.foundedYear}</span>
                            </div>
                        )}
                        {companyData.employeeCount && (
                            <div>
                                <span className="font-semibold text-gray-700">Nhân viên:</span>
                                <span className="ml-2 text-gray-600">{companyData.employeeCount}</span>
                            </div>
                        )}
                        {companyData.headquarters && (
                            <div>
                                <span className="font-semibold text-gray-700">Trụ sở:</span>
                                <span className="ml-2 text-gray-600">{companyData.headquarters}</span>
                            </div>
                        )}
                        {companyData.industry && (
                            <div>
                                <span className="font-semibold text-gray-700">Ngành nghề:</span>
                                <span className="ml-2 text-gray-600">{companyData.industry}</span>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Nội dung giới thiệu */}
            <div className="flex flex-col gap-4">
                {paragraphs.map((text, index) => (
                    <div
                        key={index}
                        className={`rounded-xl shadow p-4 text-sm text-gray-800 bg-[#fdf8f5] ${index === 1 ? 'border-l-4 border-red-600 pl-3' : ''
                            }`}
                    >
                        {text}
                    </div>
                ))}
            </div>

            {/* Highlights */}
            {companyData?.highlights && companyData.highlights.length > 0 && (
                <div className="mt-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Điểm nổi bật:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {companyData.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">{highlight}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CompanyIntro;

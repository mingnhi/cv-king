import React from "react";
import { Building2 } from "lucide-react";

interface CompanyIntroProps {
    intro: string;
}

const CompanyIntro: React.FC<CompanyIntroProps> = ({ intro }) => {
    const paragraphs = intro.split(/\n\s*\n/);
    return (
        <div className="border border-blue-300 rounded-xl p-4">
            {/* Tiêu đề */}
            <div className="flex items-center gap-2 mb-2">
                <Building2 className="text-black w-5 h-5" />
                <h3 className="text-lg font-semibold text-black">Giới thiệu công ty</h3>
            </div>
            <hr className="mb-4 border-t border-gray-300" />

            {/* Các đoạn giới thiệu */}
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
        </div>
    );
};

export default CompanyIntro;

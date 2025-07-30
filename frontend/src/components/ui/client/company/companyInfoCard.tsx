import React from "react";
import Image, { StaticImageData } from "next/image";

const CompanyInfoCard = ({
    logo,
    name,
    slogan,
    website,
    followers,
    employees,
    applyUrl,
}: {
    logo: string | StaticImageData;
    name: string;
    slogan?: string;
    website?: string;
    followers?: number;
    employees?: string;
    applyUrl?: string;
}) => {
    return (
        <div className="w-[80%] mx-auto rounded-lg border border-blue-200 p-2 flex items-center gap-3 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-200 shadow-sm">
            {/* Logo */}
            <div className="flex-shrink-0">
                <Image src={logo} alt={name} width={48} height={48} className="rounded-full bg-white p-1" />
            </div>
            {/* Thông tin chính */}
            <div className="flex-1 flex flex-col gap-1">
                <h2 className="text-white text-base font-bold mb-0.5 drop-shadow">{name}</h2>
                {slogan && <p className="text-white text-xs mb-1 drop-shadow">{slogan}</p>}
                <div className="flex flex-wrap items-center gap-2 text-white/90 text-xs mb-1">
                    {website && (
                        <a href={website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                            <span className="material-icons text-sm">public</span>
                            {website}
                        </a>
                    )}
                    <span className="flex items-center gap-1">
                        <span className="material-icons text-sm">person</span>
                        {followers ?? 590} người theo dõi
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="material-icons text-sm">apartment</span>
                        {employees ?? "5000+"} nhân viên
                    </span>
                </div>
                {/* Nút hành động */}
                <div className="flex gap-2 mt-1">
                    <a href={applyUrl || website || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-white text-orange-500 font-semibold px-2 py-1 rounded shadow hover:bg-orange-100 transition text-xs">
                        <span className="material-icons text-base">send</span> Ứng tuyển ngay
                    </a>
                    <button className="flex items-center gap-1 bg-orange-100 text-orange-600 font-semibold px-2 py-1 rounded shadow hover:bg-orange-200 transition text-xs">
                        <span className="material-icons text-base">notifications</span> Theo dõi
                    </button>
                    <button className="flex items-center gap-1 bg-orange-100 text-orange-600 font-semibold px-2 py-1 rounded shadow hover:bg-orange-200 transition text-xs">
                        <span className="material-icons text-base">share</span> chia sẻ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CompanyInfoCard;

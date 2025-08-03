import React from "react";
import Image, { StaticImageData } from "next/image";
import { BellRing, Hotel, MapPinned, Send, Share2, User } from "lucide-react";

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
        <div className="w-[1104px] h-[220px] mx-auto rounded-lg border border-blue-200 p-4 flex items-center gap-4 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-200 shadow-sm">
            {/* Logo */}
            <div className="flex-shrink-0 w-[182px] h-[182px]">
                <Image src={logo} alt={name} width={182} height={182} className="rounded-full bg-white p-1 object-cover" />
            </div>
            {/* Thông tin chính */}
            <div className="flex-1 flex flex-col gap-1">
                <h2 className="text-white text-[24px] font-bold mb-0.5 drop-shadow">{name}</h2>
                {slogan && <p className="text-white text-[14] xs mb-1 drop-shadow">{slogan}</p>}
                <div className="flex flex-wrap items-center gap-2 text-white text-[14px] xs mb-1">
                    {website && (
                        <a href={website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                            <span className="material-icons text-sm"><MapPinned /></span>
                            {website}
                        </a>
                    )}
                    <span className="flex items-center gap-1">
                        <span className="material-icons text[14px] "><User /></span>
                        {followers ?? 590} người theo dõi
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="material-icons text[14px]"><Hotel /></span>
                        {employees ?? "5000+"} nhân viên
                    </span>
                </div>
                {/* Nút hành động */}
                <div className="flex gap-2 mt-1">
                    <a href={applyUrl || website || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1 text-[16px] bg-white text-orange-500 font-semibold w-[226px] h-[44px] rounded-[15px] border border-orange-500 shadow hover:bg-orange-100 transition">
                        <span className="material-icons text-base"><Send /></span> Ứng tuyển ngay
                    </a>
                    <button className="flex items-center justify-center gap-1 text-[16px] bg-orange-100 text-orange-600 font-semibold w-[123px] h-[44px] rounded-[15px] border border-white shadow hover:bg-orange-200 transition">
                        <span className="material-icons text-base"><BellRing /></span> Theo dõi
                    </button>
                    <button className="flex items-center justify-center gap-1 text-[16px] bg-orange-100 text-orange-600 font-semibold w-[123px] h-[44px] rounded-[15px] border border-white shadow hover:bg-orange-200 transition">
                        <span className="material-icons text-base"><Share2 /></span> chia sẻ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CompanyInfoCard;

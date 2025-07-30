"use client"
import React from "react";

interface SocialLink {
    type: string;
    url: string;
}

interface CompanyContactProps {
    address: string;
    phone: string;
    email: string;
    website: string;
    social?: SocialLink[];
}
const iconMap: Record<string, React.ReactNode> = {
    address: <span className="material-icons text-orange-400">location</span>,
    phone: <span className="material-icons text-orange-400">call</span>,
    email: <span className="material-icons text-orange-400">email</span>,
    website: <span className="material-icons text-orange-400">public</span>,
};
const socialIconMap: Record<string, React.ReactNode> = {
    facebook: <i className="fab fa-facebook-f text-2xl text-blue-600"></i>,
    linkedin: <i className="fab fa-linkedin-in text-2xl text-blue-700"></i>,
    twitter: <i className="fab fa-twitter text-2xl text-sky-400"></i>,
    github: <i className="fab fa-github text-2xl text-black"></i>,
};

const CompanyContact: React.FC<CompanyContactProps> = ({ address, phone, email, website, social }) => {
    return (
        <div className="bg-orange-50 rounded-2xl shadow p-4 border border-gray-200">
            <h3 className="text-base font-semibold mb-3 flex items-center gap-2 text-gray-800">
                <span className="material-icons text-orange-400">info</span>
                Thông tin liên hệ
            </h3>
            <div className="text-sm text-gray-700 space-y-2">
                <div className="flex items-center gap-2">
                    {iconMap.address}
                    <span>Trụ sở chính:</span>{address}
                </div>
                <div className="flex items-center gap-2">
                    {iconMap.phone}
                    <span>Điện thoại:</span> {phone}
                </div>
                <div className="flex items-center gap-2">
                    {iconMap.email}
                    <span>Email</span>: <a href={`mailto:${email}`} className="text-blue-500 underline">{email}</a>
                </div>
                <div className="flex items-center gap-2">
                    {iconMap.website}
                    <span>Website</span>: <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{website}</a>
                </div>
                {social && (
                    <div className="flex items-center gap-3 mt-2">
                        {social.map((s, idx) => (
                            <a key={idx} href={s.url} target="_blank" rel="noopener noreferrer">
                                {socialIconMap[s.type] || <i className="material-icons text-2xl">public</i>}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
export default CompanyContact; 
"use client"
import React from "react";

interface CompanyMapProps {
    address: string;
}

const CompanyMap: React.FC<CompanyMapProps> = () => {
    return (
        <div className="bg-orange-50 rounded-2xl shadow p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
                <span className="material-icons text-orange-400">map</span>
                <span className="font-semibold text-lg text-gray-800">Bản đồ</span>
            </div>
            <hr className="border-t border-gray-400 mb-3" />
            <div className="w-full h-60 bg-gray-200 rounded-xl flex items-center justify-center">
                <span className="flex items-center gap-1 text-gray-700">
                    <span className="material-icons text-red-500">location</span>
                    Bản đồ tòa nhà MSB
                </span>
            </div>
        </div>
    );
};

export default CompanyMap; 
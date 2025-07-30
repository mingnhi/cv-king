import React from "react";

interface CompanyImagesProps {
    images: { label: string }[];
}

const CompanyImages: React.FC<CompanyImagesProps> = ({ images }) => (
    <div className="bg-orange-50 rounded-2xl shadow p-4 border border-gray-200">
        <div className="flex items-center gap-2 mb-2">
            <span className="material-icons text-orange-400">image</span>
            <span className="font-semibold text-lg text-gray-800">Hình ảnh công ty</span>
        </div>
        <hr className="border-t border-gray-400 mb-3" />
        <div className="grid grid-cols-2 gap-3">
            {images.map((img, idx) => (
                <div key={idx} className="bg-gray-200 rounded-lg h-24 flex items-center justify-center text-gray-700 text-base">
                    {img.label}
                </div>
            ))}
        </div>
    </div>
);

export default CompanyImages;
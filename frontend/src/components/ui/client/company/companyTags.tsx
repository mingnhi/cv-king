import React from "react";

interface CompanyTagsProps {
    tags: string[];
}

const CompanyTags: React.FC<CompanyTagsProps> = ({ tags }) => {
    return (
        <div className="bg-orange-50 rounded-2xl shadow p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
                <span className="material-icons text-orange-400">local</span>
                <span className="font-semibold text-lg text-gray-800">Tags</span>
            </div>
            <hr className="border-t border-gray-400 mb-3" />
            <div className="flex flex-wrap gap-3">
                {tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="bg-orange-500 text-white px-5 py-2 rounded-full text-base font-medium shadow-sm"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default CompanyTags;

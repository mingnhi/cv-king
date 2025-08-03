export interface TagData {
    id: string;
    name: string;
    category: string;
    color?: string;
}

export interface CompanyTagsData {
    companyId: string;
    companyName: string;
    tags: TagData[];
}

// Danh sách tất cả tags có sẵn
export const allTags: TagData[] = [
    // Technology Tags
    { id: "tech-1", name: "Công nghệ", category: "Technology", color: "bg-blue-500" },
    { id: "tech-2", name: "Phần mềm", category: "Technology", color: "bg-blue-600" },
    { id: "tech-3", name: "AI/ML", category: "Technology", color: "bg-purple-500" },
    { id: "tech-4", name: "Cloud Computing", category: "Technology", color: "bg-indigo-500" },
    { id: "tech-5", name: "Digital Transformation", category: "Technology", color: "bg-cyan-500" },
    { id: "tech-6", name: "Mobile App", category: "Technology", color: "bg-teal-500" },
    { id: "tech-7", name: "Web Development", category: "Technology", color: "bg-blue-700" },
    { id: "tech-8", name: "DevOps", category: "Technology", color: "bg-slate-500" },
    { id: "tech-9", name: "Cybersecurity", category: "Technology", color: "bg-red-500" },
    { id: "tech-10", name: "Data Science", category: "Technology", color: "bg-green-500" },

    // Business Tags
    { id: "business-1", name: "E-commerce", category: "Business", color: "bg-orange-500" },
    { id: "business-2", name: "Retail", category: "Business", color: "bg-orange-600" },
    { id: "business-3", name: "Marketplace", category: "Business", color: "bg-amber-500" },
    { id: "business-4", name: "Fintech", category: "Business", color: "bg-emerald-500" },
    { id: "business-5", name: "Digital Payment", category: "Business", color: "bg-green-600" },
    { id: "business-6", name: "Logistics", category: "Business", color: "bg-blue-500" },
    { id: "business-7", name: "Supply Chain", category: "Business", color: "bg-indigo-600" },
    { id: "business-8", name: "Customer Service", category: "Business", color: "bg-pink-500" },
    { id: "business-9", name: "Digital Marketing", category: "Business", color: "bg-purple-600" },
    { id: "business-10", name: "Cross-border", category: "Business", color: "bg-yellow-500" },

    // Industry Tags
    { id: "industry-1", name: "Game", category: "Industry", color: "bg-purple-500" },
    { id: "industry-2", name: "Entertainment", category: "Industry", color: "bg-pink-600" },
    { id: "industry-3", name: "Healthcare", category: "Industry", color: "bg-red-600" },
    { id: "industry-4", name: "Education", category: "Industry", color: "bg-green-700" },
    { id: "industry-5", name: "Finance", category: "Industry", color: "bg-emerald-600" },
    { id: "industry-6", name: "Manufacturing", category: "Industry", color: "bg-gray-500" },
    { id: "industry-7", name: "Real Estate", category: "Industry", color: "bg-yellow-600" },
    { id: "industry-8", name: "Travel", category: "Industry", color: "bg-cyan-600" },
    { id: "industry-9", name: "Food & Beverage", category: "Industry", color: "bg-orange-700" },
    { id: "industry-10", name: "Fashion", category: "Industry", color: "bg-rose-500" },

    // Skills Tags
    { id: "skill-1", name: "React", category: "Skills", color: "bg-cyan-500" },
    { id: "skill-2", name: "Vue.js", category: "Skills", color: "bg-green-500" },
    { id: "skill-3", name: "Angular", category: "Skills", color: "bg-red-500" },
    { id: "skill-4", name: "Node.js", category: "Skills", color: "bg-green-600" },
    { id: "skill-5", name: "Python", category: "Skills", color: "bg-blue-500" },
    { id: "skill-6", name: "Java", category: "Skills", color: "bg-orange-500" },
    { id: "skill-7", name: "C++", category: "Skills", color: "bg-blue-600" },
    { id: "skill-8", name: "Go", category: "Skills", color: "bg-cyan-600" },
    { id: "skill-9", name: "Rust", category: "Skills", color: "bg-orange-600" },
    { id: "skill-10", name: "Kotlin", category: "Skills", color: "bg-purple-600" },

    // Experience Tags
    { id: "exp-1", name: "Junior", category: "Experience", color: "bg-green-400" },
    { id: "exp-2", name: "Mid-level", category: "Experience", color: "bg-yellow-500" },
    { id: "exp-3", name: "Senior", category: "Experience", color: "bg-orange-500" },
    { id: "exp-4", name: "Lead", category: "Experience", color: "bg-red-500" },
    { id: "exp-5", name: "Manager", category: "Experience", color: "bg-purple-500" },
    { id: "exp-6", name: "Director", category: "Experience", color: "bg-indigo-600" },
    { id: "exp-7", name: "C-level", category: "Experience", color: "bg-gray-700" },

    // Work Type Tags
    { id: "work-1", name: "Full-time", category: "Work Type", color: "bg-blue-500" },
    { id: "work-2", name: "Part-time", category: "Work Type", color: "bg-green-500" },
    { id: "work-3", name: "Contract", category: "Work Type", color: "bg-orange-500" },
    { id: "work-4", name: "Freelance", category: "Work Type", color: "bg-purple-500" },
    { id: "work-5", name: "Remote", category: "Work Type", color: "bg-cyan-500" },
    { id: "work-6", name: "Hybrid", category: "Work Type", color: "bg-teal-500" },
    { id: "work-7", name: "On-site", category: "Work Type", color: "bg-indigo-500" }
];

// Dữ liệu tags cho từng công ty
export const companyTagsData: CompanyTagsData[] = [
    {
        companyId: "fpt",
        companyName: "FPT Corporation",
        tags: [
            { id: "tech-1", name: "Công nghệ", category: "Technology", color: "bg-blue-500" },
            { id: "tech-2", name: "Phần mềm", category: "Technology", color: "bg-blue-600" },
            { id: "tech-5", name: "Digital Transformation", category: "Technology", color: "bg-cyan-500" },
            { id: "tech-3", name: "AI/ML", category: "Technology", color: "bg-purple-500" },
            { id: "tech-4", name: "Cloud Computing", category: "Technology", color: "bg-indigo-500" },
            { id: "tech-7", name: "Web Development", category: "Technology", color: "bg-blue-700" },
            { id: "tech-8", name: "DevOps", category: "Technology", color: "bg-slate-500" }
        ]
    },
    {
        companyId: "vng",
        companyName: "VNG Corporation",
        tags: [
            { id: "industry-1", name: "Game", category: "Industry", color: "bg-purple-500" },
            { id: "business-4", name: "Fintech", category: "Business", color: "bg-emerald-500" },
            { id: "business-1", name: "E-commerce", category: "Business", color: "bg-orange-500" },
            { id: "business-5", name: "Digital Payment", category: "Business", color: "bg-green-600" },
            { id: "industry-2", name: "Entertainment", category: "Industry", color: "bg-pink-600" },
            { id: "tech-6", name: "Mobile App", category: "Technology", color: "bg-teal-500" },
            { id: "tech-10", name: "Data Science", category: "Technology", color: "bg-green-500" }
        ]
    },
    {
        companyId: "tiki",
        companyName: "Tiki Corporation",
        tags: [
            { id: "business-1", name: "E-commerce", category: "Business", color: "bg-orange-500" },
            { id: "business-2", name: "Retail", category: "Business", color: "bg-orange-600" },
            { id: "business-6", name: "Logistics", category: "Business", color: "bg-blue-500" },
            { id: "business-8", name: "Customer Service", category: "Business", color: "bg-pink-500" },
            { id: "business-9", name: "Digital Marketing", category: "Business", color: "bg-purple-600" },
            { id: "tech-6", name: "Mobile App", category: "Technology", color: "bg-teal-500" },
            { id: "tech-7", name: "Web Development", category: "Technology", color: "bg-blue-700" }
        ]
    },
    {
        companyId: "shopee",
        companyName: "Shopee Vietnam",
        tags: [
            { id: "business-1", name: "E-commerce", category: "Business", color: "bg-orange-500" },
            { id: "business-3", name: "Marketplace", category: "Business", color: "bg-amber-500" },
            { id: "tech-6", name: "Mobile App", category: "Technology", color: "bg-teal-500" },
            { id: "business-5", name: "Digital Payment", category: "Business", color: "bg-green-600" },
            { id: "business-6", name: "Logistics", category: "Business", color: "bg-blue-500" },
            { id: "tech-10", name: "Data Science", category: "Technology", color: "bg-green-500" },
            { id: "tech-3", name: "AI/ML", category: "Technology", color: "bg-purple-500" }
        ]
    },
    {
        companyId: "lazada",
        companyName: "Lazada Vietnam",
        tags: [
            { id: "business-1", name: "E-commerce", category: "Business", color: "bg-orange-500" },
            { id: "business-2", name: "Retail", category: "Business", color: "bg-orange-600" },
            { id: "business-10", name: "Cross-border", category: "Business", color: "bg-yellow-500" },
            { id: "business-5", name: "Digital Payment", category: "Business", color: "bg-green-600" },
            { id: "business-8", name: "Customer Service", category: "Business", color: "bg-pink-500" },
            { id: "tech-6", name: "Mobile App", category: "Technology", color: "bg-teal-500" },
            { id: "tech-7", name: "Web Development", category: "Technology", color: "bg-blue-700" }
        ]
    },
    {
        companyId: "microsoft",
        companyName: "Microsoft Vietnam",
        tags: [
            { id: "tech-1", name: "Công nghệ", category: "Technology", color: "bg-blue-500" },
            { id: "tech-2", name: "Phần mềm", category: "Technology", color: "bg-blue-600" },
            { id: "tech-4", name: "Cloud Computing", category: "Technology", color: "bg-indigo-500" },
            { id: "tech-3", name: "AI/ML", category: "Technology", color: "bg-purple-500" },
            { id: "tech-5", name: "Digital Transformation", category: "Technology", color: "bg-cyan-500" },
            { id: "tech-9", name: "Cybersecurity", category: "Technology", color: "bg-red-500" },
            { id: "tech-10", name: "Data Science", category: "Technology", color: "bg-green-500" }
        ]
    },
    {
        companyId: "google",
        companyName: "Google Vietnam",
        tags: [
            { id: "tech-1", name: "Công nghệ", category: "Technology", color: "bg-blue-500" },
            { id: "tech-3", name: "AI/ML", category: "Technology", color: "bg-purple-500" },
            { id: "tech-10", name: "Data Science", category: "Technology", color: "bg-green-500" },
            { id: "tech-4", name: "Cloud Computing", category: "Technology", color: "bg-indigo-500" },
            { id: "tech-6", name: "Mobile App", category: "Technology", color: "bg-teal-500" },
            { id: "tech-7", name: "Web Development", category: "Technology", color: "bg-blue-700" },
            { id: "tech-8", name: "DevOps", category: "Technology", color: "bg-slate-500" }
        ]
    },
    {
        companyId: "amazon",
        companyName: "Amazon Vietnam",
        tags: [
            { id: "business-1", name: "E-commerce", category: "Business", color: "bg-orange-500" },
            { id: "tech-4", name: "Cloud Computing", category: "Technology", color: "bg-indigo-500" },
            { id: "tech-3", name: "AI/ML", category: "Technology", color: "bg-purple-500" },
            { id: "business-6", name: "Logistics", category: "Business", color: "bg-blue-500" },
            { id: "business-7", name: "Supply Chain", category: "Business", color: "bg-indigo-600" },
            { id: "tech-10", name: "Data Science", category: "Technology", color: "bg-green-500" },
            { id: "tech-8", name: "DevOps", category: "Technology", color: "bg-slate-500" }
        ]
    }
];

// Hàm helper để lấy tags theo companyId
export const getCompanyTagsById = (companyId: string): TagData[] => {
    const company = companyTagsData.find(c => c.companyId === companyId);
    return company?.tags || [];
};

// Hàm helper để lấy tags theo index
export const getCompanyTagsByIndex = (index: number = 0): TagData[] => {
    const company = companyTagsData[index];
    return company?.tags || [];
};

// Hàm helper để lấy tất cả tags
export const getAllTags = (): TagData[] => {
    return allTags;
};

// Hàm helper để lấy tags theo category
export const getTagsByCategory = (category: string): TagData[] => {
    return allTags.filter(tag => tag.category === category);
};

// Hàm helper để lấy tất cả categories
export const getAllCategories = (): string[] => {
    const categories = new Set(allTags.map(tag => tag.category));
    return Array.from(categories);
};

// Hàm helper để tìm kiếm tags theo tên
export const searchTags = (query: string): TagData[] => {
    const lowercaseQuery = query.toLowerCase();
    return allTags.filter(tag =>
        tag.name.toLowerCase().includes(lowercaseQuery) ||
        tag.category.toLowerCase().includes(lowercaseQuery)
    );
}; 
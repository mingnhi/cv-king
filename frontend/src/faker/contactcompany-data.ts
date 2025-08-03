export interface SocialLink {
    type: string;
    url: string;
}

export interface CompanyContactData {
    address: string;
    phone: string;
    email: string;
    website: string;
    social?: SocialLink[];
    tags?: string[];
    intro?: string; // Thêm intro
}

export const companyContactData: CompanyContactData[] = [
    {
        address: "Tầng 8, Tòa nhà Pearl Plaza, 561A Điện Biên Phủ, Quận 3, TP.HCM",
        phone: "028 7300 9999",
        email: "contact@fpt.com.vn",
        website: "https://fpt.com.vn",
        social: [
            {
                type: "facebook",
                url: "https://facebook.com/fptcorporation"
            },
            {
                type: "linkedin",
                url: "https://linkedin.com/company/fpt-corporation"
            },
            {
                type: "twitter",
                url: "https://twitter.com/fptcorporation"
            }
        ],
        tags: ["Công nghệ", "Phần mềm", "Digital Transformation", "AI/ML", "Cloud Computing"],
        intro: `FPT Corporation là tập đoàn công nghệ hàng đầu Việt Nam, được thành lập năm 1988 với sứ mệnh đưa công nghệ đến mọi người, mọi nhà, mọi tổ chức.

Với hơn 30 năm phát triển, FPT đã trở thành một trong những công ty công nghệ lớn nhất Việt Nam, hoạt động trong 3 lĩnh vực chính: Công nghệ (Technology), Viễn thông (Telecommunications) và Giáo dục (Education).

FPT tự hào là đối tác tin cậy của nhiều tập đoàn công nghệ hàng đầu thế giới như Microsoft, SAP, Oracle, IBM... và đã thực hiện thành công hàng nghìn dự án cho khách hàng tại hơn 40 quốc gia trên toàn cầu.`
    },
    {
        address: "Lô E2-M3, Đường D1, Khu Công nghệ cao, Quận 9, TP.HCM",
        phone: "028 7300 8888",
        email: "hr@vng.com.vn",
        website: "https://vng.com.vn",
        social: [
            {
                type: "facebook",
                url: "https://facebook.com/vngcorp"
            },
            {
                type: "linkedin",
                url: "https://linkedin.com/company/vng-corporation"
            },
            {
                type: "github",
                url: "https://github.com/vng-corp"
            }
        ],
        tags: ["Game", "Fintech", "E-commerce", "Digital Payment", "Entertainment"],
        intro: `VNG Corporation là công ty công nghệ hàng đầu Việt Nam, được thành lập năm 2004 với tên gọi ban đầu là VinaGame. VNG đã phát triển từ một công ty game nhỏ thành một tập đoàn công nghệ đa ngành.

VNG hiện là công ty công nghệ có giá trị vốn hóa lớn nhất Việt Nam, hoạt động trong nhiều lĩnh vực: Game (ZingPlay, VNG Cloud), Fintech (ZaloPay), E-commerce (Tiki), Digital Entertainment (Zing MP3, Zing TV), và nhiều sản phẩm công nghệ khác.

Với đội ngũ hơn 4,000 nhân viên tài năng và sáng tạo, VNG không ngừng đổi mới và phát triển các sản phẩm công nghệ tiên tiến, mang lại trải nghiệm tuyệt vời cho hàng triệu người dùng Việt Nam.`
    },
    {
        address: "Tầng 4, Tòa nhà Viettel, 285 Cách Mạng Tháng 8, Quận 10, TP.HCM",
        phone: "028 7300 7777",
        email: "info@tiki.vn",
        website: "https://tiki.vn",
        social: [
            {
                type: "facebook",
                url: "https://facebook.com/tiki.vn"
            },
            {
                type: "linkedin",
                url: "https://linkedin.com/company/tiki-corporation"
            },
            {
                type: "twitter",
                url: "https://twitter.com/tiki_vn"
            }
        ],
        tags: ["E-commerce", "Retail", "Logistics", "Customer Service", "Digital Marketing"],
        intro: `Tiki Corporation là một trong những nền tảng thương mại điện tử hàng đầu Việt Nam, được thành lập năm 2010 bởi anh Trần Ngọc Thái Sơn. Tiki tự hào là "Amazon của Việt Nam" với mô hình kinh doanh B2C (Business to Consumer).

Tiki nổi tiếng với cam kết "100% hàng chính hãng" và dịch vụ giao hàng nhanh chóng, đáng tin cậy. Với khoảng 10 triệu sản phẩm đa dạng từ sách, điện tử, thời trang đến đồ gia dụng, Tiki đã trở thành điểm đến tin cậy của hàng triệu người tiêu dùng Việt Nam.

Tiki không chỉ là nền tảng mua sắm trực tuyến mà còn là hệ sinh thái công nghệ toàn diện, bao gồm TikiNOW (giao hàng 2 giờ), TikiPay (ví điện tử), và nhiều dịch vụ tiện ích khác.`
    },
    {
        address: "Tầng 5, Tòa nhà Saigon Trade Center, 37 Tôn Đức Thắng, Quận 1, TP.HCM",
        phone: "028 7300 6666",
        email: "careers@shopee.com",
        website: "https://shopee.vn",
        social: [
            {
                type: "facebook",
                url: "https://facebook.com/shopee.vn"
            },
            {
                type: "linkedin",
                url: "https://linkedin.com/company/shopee"
            },
            {
                type: "twitter",
                url: "https://twitter.com/Shopee_VN"
            }
        ],
        tags: ["E-commerce", "Marketplace", "Mobile App", "Digital Payment", "Logistics"],
        intro: `Shopee Vietnam là một phần của Sea Group - tập đoàn công nghệ hàng đầu Đông Nam Á. Shopee được thành lập năm 2015 và nhanh chóng trở thành nền tảng thương mại điện tử hàng đầu tại Việt Nam và khu vực.

Shopee nổi tiếng với mô hình C2C (Consumer to Consumer) và B2C (Business to Consumer), tạo ra một hệ sinh thái mua bán trực tuyến sôi động. Với hơn 2 triệu người bán và hàng chục triệu người mua, Shopee đã tạo ra một cộng đồng thương mại điện tử lớn nhất Việt Nam.

Shopee không ngừng đổi mới với các tính năng như Shopee Live, Shopee Mall, ShopeePay, và nhiều chương trình khuyến mãi hấp dẫn, mang lại trải nghiệm mua sắm tuyệt vời cho người dùng.`
    },
    {
        address: "Tầng 6, Tòa nhà Diamond Plaza, 34 Lê Duẩn, Quận 1, TP.HCM",
        phone: "028 7300 5555",
        email: "hr@lazada.vn",
        website: "https://lazada.vn",
        social: [
            {
                type: "facebook",
                url: "https://facebook.com/lazada.vn"
            },
            {
                type: "linkedin",
                url: "https://linkedin.com/company/lazada"
            },
            {
                type: "twitter",
                url: "https://twitter.com/LazadaVN"
            }
        ],
        tags: ["E-commerce", "Retail", "Cross-border", "Digital Payment", "Customer Experience"],
        intro: `Lazada Vietnam là một phần của Lazada Group - nền tảng thương mại điện tử hàng đầu Đông Nam Á, thuộc sở hữu của Alibaba Group. Lazada được thành lập năm 2012 và đã phát triển mạnh mẽ tại Việt Nam.

Lazada nổi tiếng với mô hình B2C (Business to Consumer) chất lượng cao, tập trung vào việc kết nối các thương hiệu chính hãng với người tiêu dùng. Với hơn 100,000 người bán và hàng triệu sản phẩm đa dạng, Lazada đã trở thành điểm đến tin cậy cho việc mua sắm trực tuyến.

Lazada không chỉ là nền tảng mua sắm mà còn là hệ sinh thái thương mại điện tử toàn diện, bao gồm LazMall (trung tâm thương mại trực tuyến), Lazada Express (dịch vụ giao hàng), và nhiều dịch vụ tiện ích khác.`
    }
];

// Hàm helper để lấy dữ liệu theo index
export const getCompanyContactData = (index: number = 0): CompanyContactData => {
    return companyContactData[index] || companyContactData[0];
};

// Hàm helper để lấy tất cả dữ liệu
export const getAllCompanyContactData = (): CompanyContactData[] => {
    return companyContactData;
};

// Hàm helper để lấy tags theo index
export const getCompanyTags = (index: number = 0): string[] => {
    const data = getCompanyContactData(index);
    return data.tags || [];
};

// Hàm helper để lấy intro theo index
export const getCompanyIntro = (index: number = 0): string => {
    const data = getCompanyContactData(index);
    return data.intro || "";
};

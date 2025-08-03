export interface CompanyIntroData {
    id: string;
    companyName: string;
    intro: string;
    highlights?: string[];
    foundedYear?: number;
    employeeCount?: string;
    headquarters?: string;
    industry?: string;
    website?: string;
}

export const companyIntroData: CompanyIntroData[] = [
    {
        id: "fpt",
        companyName: "FPT Corporation",
        foundedYear: 1988,
        employeeCount: "30,000+",
        headquarters: "Hà Nội, Việt Nam",
        industry: "Công nghệ thông tin",
        website: "https://fpt.com.vn",
        intro: `FPT Corporation là tập đoàn công nghệ hàng đầu Việt Nam, được thành lập năm 1988 với sứ mệnh đưa công nghệ đến mọi người, mọi nhà, mọi tổ chức.

Với hơn 30 năm phát triển, FPT đã trở thành một trong những công ty công nghệ lớn nhất Việt Nam, hoạt động trong 3 lĩnh vực chính: Công nghệ (Technology), Viễn thông (Telecommunications) và Giáo dục (Education).

FPT tự hào là đối tác tin cậy của nhiều tập đoàn công nghệ hàng đầu thế giới như Microsoft, SAP, Oracle, IBM... và đã thực hiện thành công hàng nghìn dự án cho khách hàng tại hơn 40 quốc gia trên toàn cầu.`,
        highlights: [
            "Tập đoàn công nghệ hàng đầu Việt Nam",
            "Hoạt động tại hơn 40 quốc gia",
            "Đối tác của Microsoft, SAP, Oracle, IBM",
            "30,000+ nhân viên tài năng"
        ]
    },
    {
        id: "vng",
        companyName: "VNG Corporation",
        foundedYear: 2004,
        employeeCount: "4,000+",
        headquarters: "TP.HCM, Việt Nam",
        industry: "Công nghệ đa ngành",
        website: "https://vng.com.vn",
        intro: `VNG Corporation là công ty công nghệ hàng đầu Việt Nam, được thành lập năm 2004 với tên gọi ban đầu là VinaGame. VNG đã phát triển từ một công ty game nhỏ thành một tập đoàn công nghệ đa ngành.

VNG hiện là công ty công nghệ có giá trị vốn hóa lớn nhất Việt Nam, hoạt động trong nhiều lĩnh vực: Game (ZingPlay, VNG Cloud), Fintech (ZaloPay), E-commerce (Tiki), Digital Entertainment (Zing MP3, Zing TV), và nhiều sản phẩm công nghệ khác.

Với đội ngũ hơn 4,000 nhân viên tài năng và sáng tạo, VNG không ngừng đổi mới và phát triển các sản phẩm công nghệ tiên tiến, mang lại trải nghiệm tuyệt vời cho hàng triệu người dùng Việt Nam.`,
        highlights: [
            "Công ty công nghệ có vốn hóa lớn nhất Việt Nam",
            "Hệ sinh thái sản phẩm đa dạng",
            "ZaloPay - Ví điện tử hàng đầu",
            "ZingPlay - Nền tảng game phổ biến"
        ]
    },
    {
        id: "tiki",
        companyName: "Tiki Corporation",
        foundedYear: 2010,
        employeeCount: "2,000+",
        headquarters: "TP.HCM, Việt Nam",
        industry: "Thương mại điện tử",
        website: "https://tiki.vn",
        intro: `Tiki Corporation là một trong những nền tảng thương mại điện tử hàng đầu Việt Nam, được thành lập năm 2010 bởi anh Trần Ngọc Thái Sơn. Tiki tự hào là "Amazon của Việt Nam" với mô hình kinh doanh B2C (Business to Consumer).

Tiki nổi tiếng với cam kết "100% hàng chính hãng" và dịch vụ giao hàng nhanh chóng, đáng tin cậy. Với khoảng 10 triệu sản phẩm đa dạng từ sách, điện tử, thời trang đến đồ gia dụng, Tiki đã trở thành điểm đến tin cậy của hàng triệu người tiêu dùng Việt Nam.

Tiki không chỉ là nền tảng mua sắm trực tuyến mà còn là hệ sinh thái công nghệ toàn diện, bao gồm TikiNOW (giao hàng 2 giờ), TikiPay (ví điện tử), và nhiều dịch vụ tiện ích khác.`,
        highlights: [
            "100% hàng chính hãng",
            "10 triệu+ sản phẩm đa dạng",
            "TikiNOW - Giao hàng 2 giờ",
            "TikiPay - Ví điện tử tích hợp"
        ]
    },
    {
        id: "shopee",
        companyName: "Shopee Vietnam",
        foundedYear: 2015,
        employeeCount: "1,500+",
        headquarters: "TP.HCM, Việt Nam",
        industry: "Thương mại điện tử",
        website: "https://shopee.vn",
        intro: `Shopee Vietnam là một phần của Sea Group - tập đoàn công nghệ hàng đầu Đông Nam Á. Shopee được thành lập năm 2015 và nhanh chóng trở thành nền tảng thương mại điện tử hàng đầu tại Việt Nam và khu vực.

Shopee nổi tiếng với mô hình C2C (Consumer to Consumer) và B2C (Business to Consumer), tạo ra một hệ sinh thái mua bán trực tuyến sôi động. Với hơn 2 triệu người bán và hàng chục triệu người mua, Shopee đã tạo ra một cộng đồng thương mại điện tử lớn nhất Việt Nam.

Shopee không ngừng đổi mới với các tính năng như Shopee Live, Shopee Mall, ShopeePay, và nhiều chương trình khuyến mãi hấp dẫn, mang lại trải nghiệm mua sắm tuyệt vời cho người dùng.`,
        highlights: [
            "2 triệu+ người bán",
            "Hàng chục triệu người mua",
            "Shopee Live - Mua sắm trực tuyến",
            "ShopeePay - Thanh toán số"
        ]
    },
    {
        id: "lazada",
        companyName: "Lazada Vietnam",
        foundedYear: 2012,
        employeeCount: "1,200+",
        headquarters: "TP.HCM, Việt Nam",
        industry: "Thương mại điện tử",
        website: "https://lazada.vn",
        intro: `Lazada Vietnam là một phần của Lazada Group - nền tảng thương mại điện tử hàng đầu Đông Nam Á, thuộc sở hữu của Alibaba Group. Lazada được thành lập năm 2012 và đã phát triển mạnh mẽ tại Việt Nam.

Lazada nổi tiếng với mô hình B2C (Business to Consumer) chất lượng cao, tập trung vào việc kết nối các thương hiệu chính hãng với người tiêu dùng. Với hơn 100,000 người bán và hàng triệu sản phẩm đa dạng, Lazada đã trở thành điểm đến tin cậy cho việc mua sắm trực tuyến.

Lazada không chỉ là nền tảng mua sắm mà còn là hệ sinh thái thương mại điện tử toàn diện, bao gồm LazMall (trung tâm thương mại trực tuyến), Lazada Express (dịch vụ giao hàng), và nhiều dịch vụ tiện ích khác.`,
        highlights: [
            "100,000+ người bán",
            "Hàng triệu sản phẩm đa dạng",
            "LazMall - Trung tâm thương mại trực tuyến",
            "Lazada Express - Giao hàng nhanh chóng"
        ]
    },
    {
        id: "microsoft",
        companyName: "Microsoft Vietnam",
        foundedYear: 1996,
        employeeCount: "500+",
        headquarters: "TP.HCM, Việt Nam",
        industry: "Công nghệ phần mềm",
        website: "https://microsoft.com/vi-vn",
        intro: `Microsoft Vietnam là chi nhánh của Microsoft Corporation tại Việt Nam, được thành lập năm 1996. Microsoft Vietnam đã đóng góp tích cực vào sự phát triển của ngành công nghệ thông tin Việt Nam trong hơn 25 năm qua.

Microsoft Vietnam tập trung vào việc cung cấp các giải pháp công nghệ tiên tiến cho doanh nghiệp, chính phủ và người dùng cá nhân. Từ hệ điều hành Windows, bộ ứng dụng Office, đến các dịch vụ đám mây Azure, Microsoft đã trở thành đối tác tin cậy của nhiều tổ chức tại Việt Nam.

Với cam kết "Empowering every person and every organization on the planet to achieve more", Microsoft Vietnam không ngừng đổi mới và phát triển các sản phẩm công nghệ tiên tiến, góp phần thúc đẩy chuyển đổi số tại Việt Nam.`,
        highlights: [
            "25+ năm hoạt động tại Việt Nam",
            "Giải pháp công nghệ toàn diện",
            "Microsoft Azure - Đám mây tiên tiến",
            "Đối tác chuyển đổi số hàng đầu"
        ]
    },
    {
        id: "google",
        companyName: "Google Vietnam",
        foundedYear: 2004,
        employeeCount: "300+",
        headquarters: "TP.HCM, Việt Nam",
        industry: "Công nghệ internet",
        website: "https://google.com",
        intro: `Google Vietnam là văn phòng đại diện của Google Inc. tại Việt Nam, được thành lập năm 2004. Google Vietnam đã đóng góp tích cực vào sự phát triển của hệ sinh thái internet và công nghệ số tại Việt Nam.

Google Vietnam cung cấp đầy đủ các sản phẩm và dịch vụ của Google cho người dùng Việt Nam, từ tìm kiếm, email, bản đồ, đến các dịch vụ quảng cáo và đám mây. Với hơn 60 triệu người dùng internet tại Việt Nam, Google đã trở thành một phần không thể thiếu trong cuộc sống số của người Việt.

Với sứ mệnh "Tổ chức thông tin của thế giới và làm cho thông tin đó trở nên hữu ích và dễ tiếp cận trên toàn cầu", Google Vietnam không ngừng đổi mới và phát triển các sản phẩm công nghệ tiên tiến.`,
        highlights: [
            "20+ năm hoạt động tại Việt Nam",
            "60+ triệu người dùng internet",
            "Google Cloud - Đám mây toàn cầu",
            "Google Ads - Quảng cáo số hiệu quả"
        ]
    },
    {
        id: "amazon",
        companyName: "Amazon Vietnam",
        foundedYear: 2019,
        employeeCount: "200+",
        headquarters: "TP.HCM, Việt Nam",
        industry: "Thương mại điện tử & Cloud",
        website: "https://aws.amazon.com/vi",
        intro: `Amazon Vietnam là chi nhánh của Amazon.com Inc. tại Việt Nam, được thành lập năm 2019. Amazon Vietnam tập trung vào việc cung cấp các dịch vụ đám mây AWS (Amazon Web Services) và hỗ trợ các doanh nghiệp Việt Nam trong quá trình chuyển đổi số.

AWS là nền tảng đám mây hàng đầu thế giới, cung cấp hơn 200 dịch vụ đám mây toàn diện từ tính toán, lưu trữ, cơ sở dữ liệu, đến trí tuệ nhân tạo và machine learning. Tại Việt Nam, AWS đã trở thành đối tác tin cậy của nhiều startup và doanh nghiệp lớn.

Với cam kết hỗ trợ sự phát triển của hệ sinh thái công nghệ Việt Nam, Amazon Vietnam không ngừng đầu tư vào cơ sở hạ tầng, đào tạo nhân tài và phát triển các giải pháp công nghệ tiên tiến.`,
        highlights: [
            "200+ dịch vụ đám mây toàn diện",
            "Đối tác của nhiều startup Việt Nam",
            "AWS Academy - Đào tạo công nghệ đám mây",
            "Hạ tầng đám mây toàn cầu"
        ]
    }
];

// Hàm helper để lấy dữ liệu theo id
export const getCompanyIntroById = (id: string): CompanyIntroData | null => {
    return companyIntroData.find(company => company.id === id) || null;
};

// Hàm helper để lấy dữ liệu theo index
export const getCompanyIntroByIndex = (index: number = 0): CompanyIntroData => {
    return companyIntroData[index] || companyIntroData[0];
};

// Hàm helper để lấy tất cả dữ liệu
export const getAllCompanyIntros = (): CompanyIntroData[] => {
    return companyIntroData;
};

// Hàm helper để lấy intro text theo index
export const getCompanyIntroText = (index: number = 0): string => {
    const data = getCompanyIntroByIndex(index);
    return data.intro || "";
};

// Hàm helper để lấy highlights theo index
export const getCompanyHighlights = (index: number = 0): string[] => {
    const data = getCompanyIntroByIndex(index);
    return data.highlights || [];
};

// Hàm helper để tìm kiếm công ty theo tên
export const searchCompanyIntro = (query: string): CompanyIntroData[] => {
    const lowercaseQuery = query.toLowerCase();
    return companyIntroData.filter(company =>
        company.companyName.toLowerCase().includes(lowercaseQuery) ||
        (company.industry?.toLowerCase().includes(lowercaseQuery) || false) ||
        company.intro.toLowerCase().includes(lowercaseQuery)
    );
};

// Hàm helper để lấy công ty theo industry
export const getCompaniesByIndustry = (industry: string): CompanyIntroData[] => {
    return companyIntroData.filter(company =>
        company.industry?.toLowerCase() === industry.toLowerCase()
    );
}; 
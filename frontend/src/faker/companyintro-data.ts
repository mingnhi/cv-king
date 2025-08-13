import { CompanyIntroData } from "@/components/ui/client/company/companyIntro";

// Hàm parseHtml để render HTML content
export const parseHtml = (html: string) => {
    return { __html: html };
};

export const companyIntroData: CompanyIntroData[] = [
    {
        id: "fpt",
        companyName: "FPT Corporation",
        foundedYear: 1988,
        employeeCount: "30,000+",
        headquarters: "Hà Nội, Việt Nam",
        industry: "Công nghệ thông tin",
        website: "https://fpt.com.vn",
        intro: `
            <h1>FPT Corporation - Tập đoàn công nghệ hàng đầu Việt Nam</h1>
            <p>FPT Corporation là tập đoàn công nghệ hàng đầu Việt Nam, được thành lập năm 1988 với sứ mệnh đưa công nghệ đến mọi người, mọi nhà, mọi tổ chức.</p>
            <p>Với hơn 30 năm phát triển, FPT đã trở thành một trong những công ty công nghệ lớn nhất Việt Nam, hoạt động trong 3 lĩnh vực chính: <strong>Công nghệ (Technology)</strong>, <strong>Viễn thông (Telecommunications)</strong> và <strong>Giáo dục (Education)</strong>.</p>
            <p>FPT tự hào là đối tác tin cậy của nhiều tập đoàn công nghệ hàng đầu thế giới như <em>Microsoft, SAP, Oracle, IBM</em>... và đã thực hiện thành công hàng nghìn dự án cho khách hàng tại hơn 40 quốc gia trên toàn cầu.</p>
        `,
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
        intro: `
            <h2>VNG Corporation - Công ty công nghệ có vốn hóa lớn nhất Việt Nam</h2>
            <p>VNG Corporation là công ty công nghệ hàng đầu Việt Nam, được thành lập năm 2004 với tên gọi ban đầu là VinaGame. VNG đã phát triển từ một công ty game nhỏ thành một tập đoàn công nghệ đa ngành.</p>
            <p>VNG hiện là công ty công nghệ có giá trị vốn hóa lớn nhất Việt Nam, hoạt động trong nhiều lĩnh vực: <strong>Game (ZingPlay, VNG Cloud)</strong>, <strong>Fintech (ZaloPay)</strong>, <strong>E-commerce (Tiki)</strong>, <strong>Digital Entertainment (Zing MP3, Zing TV)</strong>, và nhiều sản phẩm công nghệ khác.</p>
            <p>Với đội ngũ hơn 4,000 nhân viên tài năng và sáng tạo, VNG không ngừng đổi mới và phát triển các sản phẩm công nghệ tiên tiến, mang lại trải nghiệm tuyệt vời cho hàng triệu người dùng Việt Nam.</p>
        `,
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
        intro: `
            <h3>Tiki Corporation - "Amazon của Việt Nam"</h3>
            <p>Tiki Corporation là một trong những nền tảng thương mại điện tử hàng đầu Việt Nam, được thành lập năm 2010 bởi anh Trần Ngọc Thái Sơn. Tiki tự hào là "Amazon của Việt Nam" với mô hình kinh doanh <strong>B2C (Business to Consumer)</strong>.</p>
            <p>Tiki nổi tiếng với cam kết <em>"100% hàng chính hãng"</em> và dịch vụ giao hàng nhanh chóng, đáng tin cậy. Với khoảng 10 triệu sản phẩm đa dạng từ sách, điện tử, thời trang đến đồ gia dụng, Tiki đã trở thành điểm đến tin cậy của hàng triệu người tiêu dùng Việt Nam.</p>
            <p>Tiki không chỉ là nền tảng mua sắm trực tuyến mà còn là hệ sinh thái công nghệ toàn diện, bao gồm <strong>TikiNOW (giao hàng 2 giờ)</strong>, <strong>TikiPay (ví điện tử)</strong>, và nhiều dịch vụ tiện ích khác.</p>
        `,
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
        intro: `
            <h4>Shopee Vietnam - Nền tảng thương mại điện tử hàng đầu Đông Nam Á</h4>
            <p>Shopee Vietnam là một phần của Sea Group - tập đoàn công nghệ hàng đầu Đông Nam Á. Shopee được thành lập năm 2015 và nhanh chóng trở thành nền tảng thương mại điện tử hàng đầu tại Việt Nam và khu vực.</p>
            <p>Shopee nổi tiếng với mô hình <strong>C2C (Consumer to Consumer)</strong> và <strong>B2C (Business to Consumer)</strong>, tạo ra một hệ sinh thái mua bán trực tuyến sôi động. Với hơn 2 triệu người bán và hàng chục triệu người mua, Shopee đã tạo ra một cộng đồng thương mại điện tử lớn nhất Việt Nam.</p>
            <p>Shopee không ngừng đổi mới với các tính năng như <em>Shopee Live, Shopee Mall, ShopeePay</em>, và nhiều chương trình khuyến mãi hấp dẫn, mang lại trải nghiệm mua sắm tuyệt vời cho người dùng.</p>
        `,
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
        intro: `
            <h5>Lazada Vietnam - Nền tảng thương mại điện tử chất lượng cao</h5>
            <p>Lazada Vietnam là một phần của Lazada Group - nền tảng thương mại điện tử hàng đầu Đông Nam Á, thuộc sở hữu của Alibaba Group. Lazada được thành lập năm 2012 và đã phát triển mạnh mẽ tại Việt Nam.</p>
            <p>Lazada nổi tiếng với mô hình <strong>B2C (Business to Consumer)</strong> chất lượng cao, tập trung vào việc kết nối các thương hiệu chính hãng với người tiêu dùng. Với hơn 100,000 người bán và hàng triệu sản phẩm đa dạng, Lazada đã trở thành điểm đến tin cậy cho việc mua sắm trực tuyến.</p>
            <p>Lazada không chỉ là nền tảng mua sắm mà còn là hệ sinh thái thương mại điện tử toàn diện, bao gồm <strong>LazMall (trung tâm thương mại trực tuyến)</strong>, <strong>Lazada Express (dịch vụ giao hàng)</strong>, và nhiều dịch vụ tiện ích khác.</p>
        `,
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
        intro: `
            <h6>Microsoft Vietnam - Đối tác chuyển đổi số hàng đầu</h6>
            <p>Microsoft Vietnam là chi nhánh của Microsoft Corporation tại Việt Nam, được thành lập năm 1996. Microsoft Vietnam đã đóng góp tích cực vào sự phát triển của ngành công nghệ thông tin Việt Nam trong hơn 25 năm qua.</p>
            <p>Microsoft Vietnam tập trung vào việc cung cấp các giải pháp công nghệ tiên tiến cho doanh nghiệp, chính phủ và người dùng cá nhân. Từ hệ điều hành <strong>Windows</strong>, bộ ứng dụng <strong>Office</strong>, đến các dịch vụ đám mây <strong>Azure</strong>, Microsoft đã trở thành đối tác tin cậy của nhiều tổ chức tại Việt Nam.</p>
            <p>Với cam kết <em>"Empowering every person and every organization on the planet to achieve more"</em>, Microsoft Vietnam không ngừng đổi mới và phát triển các sản phẩm công nghệ tiên tiến, góp phần thúc đẩy chuyển đổi số tại Việt Nam.</p>
        `,
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
        intro: `
            <h1>Google Vietnam - Tổ chức thông tin thế giới</h1>
            <p>Google Vietnam là văn phòng đại diện của Google Inc. tại Việt Nam, được thành lập năm 2004. Google Vietnam đã đóng góp tích cực vào sự phát triển của hệ sinh thái internet và công nghệ số tại Việt Nam.</p>
            <p>Google Vietnam cung cấp đầy đủ các sản phẩm và dịch vụ của Google cho người dùng Việt Nam, từ tìm kiếm, email, bản đồ, đến các dịch vụ quảng cáo và đám mây. Với hơn 60 triệu người dùng internet tại Việt Nam, Google đã trở thành một phần không thể thiếu trong cuộc sống số của người Việt.</p>
            <p>Với sứ mệnh <em>"Tổ chức thông tin của thế giới và làm cho thông tin đó trở nên hữu ích và dễ tiếp cận trên toàn cầu"</em>, Google Vietnam không ngừng đổi mới và phát triển các sản phẩm công nghệ tiên tiến.</p>
        `,
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
        intro: `
            <h2>Amazon Vietnam - Nền tảng đám mây hàng đầu thế giới</h2>
            <p>Amazon Vietnam là chi nhánh của Amazon.com Inc. tại Việt Nam, được thành lập năm 2019. Amazon Vietnam tập trung vào việc cung cấp các dịch vụ đám mây <strong>AWS (Amazon Web Services)</strong> và hỗ trợ các doanh nghiệp Việt Nam trong quá trình chuyển đổi số.</p>
            <p>AWS là nền tảng đám mây hàng đầu thế giới, cung cấp hơn 200 dịch vụ đám mây toàn diện từ tính toán, lưu trữ, cơ sở dữ liệu, đến trí tuệ nhân tạo và machine learning. Tại Việt Nam, AWS đã trở thành đối tác tin cậy của nhiều startup và doanh nghiệp lớn.</p>
            <p>Với cam kết hỗ trợ sự phát triển của hệ sinh thái công nghệ Việt Nam, Amazon Vietnam không ngừng đầu tư vào cơ sở hạ tầng, đào tạo nhân tài và phát triển các giải pháp công nghệ tiên tiến.</p>
        `,
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
import React from "react";
import defaultImage from "@/assets/images/bannercompany1.jpg";
import info from "@/assets/images/company1.png";
import CompanyContact from "@/components/ui/client/company/companyContact";
import CompanyMap from "@/components/ui/client/company/companyMap";
import CompanyBanner from "@/components/ui/client/company/companyBanner";
import CompanyInfoCard from "@/components/ui/client/company/companyInfoCard";
import CompanyTags from "@/components/ui/client/company/companyTags";
import CompanyImages from "@/components/ui/client/company/companyImages";
import CompanyIntro from "@/components/ui/client/company/companyIntro";
import CompanyJobs from "@/components/ui/client/company/companyJobs";

const CompanyDetailPage = () => {
    return (
        <>
            <CompanyBanner
                image={defaultImage}
                alt="Banner công ty MSB"
            />
            <div className="max-w-6xl mx-auto px-2 md:px-6 mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="col-span-4 flex flex-col gap-6">
                    <CompanyInfoCard
                        logo={info}
                        name="Ngân hàng TMCP Hàng Hải Việt Nam (MSB)"
                        slogan="Đồng hành cùng sự phát triển của doanh nghiệp"
                        website="https://jobs.msb.com.vn/"
                        followers={590}
                        employees="5000+"
                        applyUrl="https://jobs.msb.com.vn/"
                    />
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                    <CompanyContact address="Tòa nhà MSB, 127 Lò Đúc, Hà Nội"
                        phone="+842437247247"
                        email="tuyendung@msb.com.vn"
                        website="www.msb.com.vn"
                        social={[
                            { type: "facebook", url: "https://facebook.com/msb" },
                            { type: "linkedin", url: "https://linkedin.com/company/msb" },
                            { type: "github", url: "https://github.com/msb" },
                        ]} />
                    <CompanyTags tags={["Ngân hàng", "Fintech", "Digital", "Top Employer", "Lương cao", "Đãi ngộ tốt"]} />
                    <CompanyMap address="Bản đồ ngân hàng MSB" />
                    <CompanyImages images={[]}/>
                </div>
                <div className="flex flex-col gap-4">
                    <CompanyIntro intro="Ngân hàng TMCP Hàng Hải Việt Nam (MSB) là một trong những ngân hàng thương mại cổ phần hàng đầu tại Việt Nam, được thành lập từ năm 1991. Với hơn 30 năm phát triển, MSB đã khẳng định vị thế là ngân hàng bán lẻ hiện đại, tiên phong trong chuyển đổi số.
                    "></CompanyIntro>
                    <CompanyJobs></CompanyJobs>
                </div>
            </div>

        </>
    );
};

export default CompanyDetailPage; 
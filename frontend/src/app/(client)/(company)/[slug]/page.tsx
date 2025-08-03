import React from "react";
import defaultImage from "@/assets/images/bannercompany1.jpg";
import info from "@/assets/images/company1.png";
import CompanyContact from "@/components/ui/client/company/companyContact";
import CompanyBanner from "@/components/ui/client/company/companyBanner";
import CompanyInfoCard from "@/components/ui/client/company/companyInfoCard";
import CompanyTags from "@/components/ui/client/company/companyTags";
import CompanyIntro from "@/components/ui/client/company/companyIntro";
import CompanyJobs from "@/components/ui/client/company/companyJobs";

const CompanyDetailPage = () => {
    return (
        <>
            <CompanyBanner
                image={defaultImage}
                alt="Banner công ty MSB"
            />
            <div className="max-w-6xl mx-auto px-2 md:px-6 mt-6 mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                    <CompanyContact companyIndex={0} />
                    <CompanyTags companyIndex={0} />
                    <CompanyIntro companyIndex={0} />
                </div>
                <div className="flex flex-col gap-4">
                    <CompanyJobs></CompanyJobs>
                </div>
            </div>

        </>
    );
};

export default CompanyDetailPage; 
import React from "react";
import HeroSection from "@/components/ui/client/home/HeroSection";
import SearchSection from "@/components/ui/client/home/SearchSection";
import JobsSection from "@/components/ui/client/home/JobsSection";
import CompaniesSection from "@/components/ui/client/home/CompaniesSection";
import TodayJobsStatSection from "@/components/ui/client/home/TodayJobsStatSection";


const HomePage = () => {
  return (
    <>
                <div className="w-[1520px] mx-auto">
      <SearchSection />
      <JobsSection />
      <HeroSection />
      <CompaniesSection />
      <TodayJobsStatSection />

</div>
    </>
  );
};

export default HomePage;

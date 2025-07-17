"use client";

import * as React from "react";
import { Box } from "@mui/material";
import { LineChart, RadarChart } from "@mui/x-charts";
import { ChartNoAxesCombined } from "lucide-react";

const jobData = [
  { date: "2025-06-22", jobs: 1320 },
  { date: "2025-06-23", jobs: 1250 },
  { date: "2025-06-24", jobs: 1880 },
  { date: "2025-06-25", jobs: 5300 },
  { date: "2025-06-26", jobs: 6870 },
  { date: "2025-06-27", jobs: 7990 },
  { date: "2025-06-28", jobs: 8500 },
];

const salaryData = [
  { range: "Dưới 3 triệu", jobs: 150 },
  { range: "Từ 3-10 triệu", jobs: 450 },
  { range: "Từ 10-20 triệu", jobs: 700 },
  { range: "Từ 20-30 triệu", jobs: 300 },
  { range: "Trên 30 triệu", jobs: 120 },
  { range: "Thỏa thuận", jobs: 250 },
];

const TodayJobsStatSection = React.forwardRef<HTMLDivElement>(() => {
  const today = new Date().toLocaleDateString("vi-VN");
  const valueFormatter = (
    value: number | null,
    context: { dataIndex?: number }
  ) => {
    if (context.dataIndex !== undefined) {
      const range = salaryData[context.dataIndex]?.range;
      return `${range}: ${value} việc làm`;
    }
    return `${value} việc làm`;
  };

  return (
    <section
      id="TodayJobsStatSection"
      className="max-w-6xl mx-auto py-5 px-6 lg:p-0"
    >
      <Box
        sx={{
          background: "linear-gradient(to right, #CC6600, #F3C246)",
          borderRadius: "24px",
          p: 4,
        }}
      >
        <Box className="flex items-center justify-between sm:justify-normal mb-4">
          <p className="text-xl font-bold text-white sm:mr-3">
            Thị trường việc làm hôm nay
          </p>
          <Box className="py-1 px-3 bg-white rounded-full">
            <p className="text-lg font-bold text-orange-400">{today}</p>
          </Box>
        </Box>

        <Box className="grid grid-cols-1 md:grid-cols-3 gap-3 text-white mb-6">
          <Box className="shadow-2xl p-4 rounded-lg bg-white text-black">
            <p className="text-2xl font-bold">1.200</p>
            <p className="text-md font-semibold">Việc làm mới nhất</p>
          </Box>
          <Box className="shadow-2xl p-4 rounded-lg bg-white text-black">
            <p className="text-2xl font-bold">8.500</p>
            <p className="text-md font-semibold">Tổng việc đang tuyển</p>
          </Box>
          <Box className="shadow-2xl p-4 rounded-lg bg-white text-black">
            <p className="text-2xl font-bold">620</p>
            <p className="text-md font-semibold">Công ty đang tuyển</p>
          </Box>
        </Box>

        <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Biểu đồ xu hướng việc làm */}
          <Box
            sx={{
              background: "transparent",
              p: 2,
            }}
            className="shadow-2xl"
          >
            <Box className="flex items-center">
              <Box className="items-center justify-center bg-white/20 p-2 rounded-full mr-2">
                <ChartNoAxesCombined size={20} className="text-white" />
              </Box>
              <p className="font-bold text-white">Xu hướng việc làm</p>
            </Box>
            <LineChart
              xAxis={[
                {
                  id: "date",
                  data: jobData.map((item) => new Date(item.date)),
                  scaleType: "band",
                  valueFormatter: (value) => value.toLocaleDateString("vi-VN"),
                },
              ]}
              series={[
                {
                  id: "jobs-series",
                  data: jobData.map((item) => item.jobs),
                  label: "Việc làm",
                  color: "#facc15",
                },
              ]}
              height={200}
              sx={{
                "& .MuiChartsAxis-label": {
                  fill: "white !important",
                  fontWeight: "bold",
                  fontSize: 14,
                },
                "& .MuiChartsAxis-tickLabel": {
                  fill: "#fff",
                  fontWeight: "bold",
                  fontSize: 12,
                },
                "& .MuiChartsAxis-line": {
                  stroke: "white",
                  strokeWidth: 2,
                },
                "& .MuiChartsGrid-line": {
                  stroke: "rgba(255, 255, 255, 0.2)",
                  strokeDasharray: "4 4",
                },
                "& .MuiChartsTooltip-root": {
                  color: "#333",
                  backgroundColor: "white !important",
                  borderRadius: 2,
                },
                "& .MuiLineElement-root": {
                  strokeWidth: 3,
                },
                "& .MuiMarkElement-root": {
                  stroke: "#facc15",
                  fill: "white",
                  r: 4,
                },
              }}
            />
          </Box>
          {/* Biểu đồ phân bổ lương */}
          <Box
            sx={{
              background: "transparent",
              p: 2,
            }}
            className="shadow-2xl"
          >
            <Box className="flex items-center">
              <Box className="items-center justify-center bg-white/20 p-2 rounded-full mr-2">
                <ChartNoAxesCombined size={20} className="text-white" />
              </Box>
              <p className="font-bold text-white">Phân bố mức lương</p>
            </Box>
            <RadarChart
              height={200}
              series={[
                {
                  label: "Số lượng việc làm",
                  data: salaryData.map((item) => item.jobs),
                  color: "#facc15",
                  valueFormatter,
                },
              ]}
              radar={{
                max: Math.max(...salaryData.map((item) => item.jobs)) * 1.2,
                metrics: salaryData.map((item) => {
                  if (item.range === "Dưới 3 triệu") return "Dưới 3tr";
                  if (item.range === "Từ 3-10 triệu") return "3-10tr";
                  if (item.range === "Từ 10-20 triệu") return "10-20tr";
                  if (item.range === "Từ 20-30 triệu") return "20-30tr";
                  if (item.range === "Trên 30 triệu") return "Trên 30tr";
                  return "Thỏa thuận";
                }),
              }}
              sx={{
                "& .MuiChartsAxis-label": {
                  fill: "white",
                  fontWeight: "bold",
                  fontSize: 14,
                },
                "& .MuiChartsAxis-tickLabel": {
                  fill: "#fff",
                  fontWeight: "bold",
                  fontSize: 12,
                },
                "& .MuiChartsAxis-line": {
                  stroke: "#fff",
                  strokeWidth: 2,
                },
                "& .MuiChartsGrid-line": {
                  stroke: "rgba(255, 255, 255, 0.2)",
                  strokeDasharray: "4 4",
                },
                "& .MuiChartsTooltip-root": {
                  color: "#333",
                  backgroundColor: "#fff",
                  borderRadius: 2,
                },
                "& .MuiChartsLegend-root": {
                  fill: "#fff",
                  fontWeight: "bold",
                  fontSize: 12,
                },
                "& .MuiRadarElement-root": {
                  strokeWidth: 3,
                  fillOpacity: 0.2,
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </section>
  );
});

TodayJobsStatSection.displayName = "TodayJobsStatSection";

export default TodayJobsStatSection;

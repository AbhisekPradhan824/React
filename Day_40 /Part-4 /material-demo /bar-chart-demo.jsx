import { BarChart } from "@mui/x-charts/BarChart";

export function BarChartDemo() {
  return (
    <div>
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: ["bar A", "bar B", "bar C"],
            height: 28,
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: [2, 5, 3],
          },
        ]}
        height={300}
      />
    </div>
  );
}

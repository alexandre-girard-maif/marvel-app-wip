import DonutChartSample from "@/components/donut-chart-sample";

export default function D3Test() {
  return (
    <div>
      <h1>D3 Test</h1>

      <DonutChartSample outerRadius={100} innerRadius={50} />
    </div>
  );
}
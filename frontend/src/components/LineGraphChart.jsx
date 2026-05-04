import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
function LineGraphChart() {
  const rawData = [
    { message: "ありがとう", love: 50 },
    { message: "OK", love: 30 },
    { message: "さよなら", love: 10 },
    { message: "ごめんね", love: 80 },
  ];
  const data = rawData.map((item, index) => ({
    index: index + 1,
    ...item,
  }));

  return (
    <div className="line-chart-div" style={{ width: "100%", height: 300 }}>
      <h2 style={{ color: "#f28482" }}>時間軸でみる親密度♥</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 30, bottom: 70 }}
        >
          <Tooltip
            formatter={(value) => `${value}%`}
            labelFormatter={(label, payload) => {
              if (payload && payload.length > 0) {
                return ` ${payload[0].payload.message}`;
              }
              return label;
            }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="index"
            label={{
              value: "トーク回数",
              position: "insideBottom",
              offset: -5,
            }}
          />
          <YAxis
            domain={[0, 100]} //
            label={{ value: "親密度(%)", angle: -90, position: "insideLeft" }}
          />
          <Line
            type="monotone"
            dataKey="love"
            stroke="#f28482"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default LineGraphChart;

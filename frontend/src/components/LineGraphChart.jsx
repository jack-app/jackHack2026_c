import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
function LineGraphChart(){
    const data = [
        { time: '1', love: 400 },
        { time: '2', love: 300 },
        { time: '3', love: 600 },
        { time: '4', love: 800 },
    ];
    return (
    <div className="line-chart-div" style={{ width: '100%', height: 300 }}>
      <p>折れ線グラフの表示</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Line type="monotone" dataKey="love" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default LineGraphChart;
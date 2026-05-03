import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
function LineGraphChart(){
    const data = [
        { time: '1月', pv: 400 },
        { time: '2月', pv: 300 },
        { time: '3月', pv: 600 },
        { time: '4月', pv: 800 },
    ];
    return (
    <div className="line-chart-div" style={{ width: '100%', height: 300 }}>
      <p>折れ線グラフの表示</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          {/* 2. dataKeyにデータのプロパティ名(今回は'pv')を指定する */}
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default LineGraphChart;
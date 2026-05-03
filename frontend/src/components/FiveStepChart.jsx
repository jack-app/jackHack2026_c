import { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

function FiveStepChart({ data }) {
  const chartData = [
    {
      subject: "友好度",
      A: data?.friendship_level || 0,
      fullMark: 5,
    },
    {
      subject: "優しさ",
      A: data?.kindness || 0,
      fullMark: 5,
    },
    {
      subject: "返信速度",
      A: data?.reply_speed || 0,
      fullMark: 5,
    },
    {
      subject: "メッセージの長さ",
      A: data?.message_length || 0,
      fullMark: 5,
    },
    {
      subject: "心の余裕",
      A: data?.peace_of_mind || 0,
      fullMark: 5,
    },
  ];

  return (
    <>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", flexWrap: "wrap" }}>
        {/* グラフの表示エリア */}
        <div style={{ maxWidth: "100%", overflow: "hidden" }}>
          <RadarChart
            cx={250}
            cy={200}
            outerRadius={120}
            width={500}
            height={400}
            data={chartData}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 5]} />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#feb1d6"
              fill="#feb1d6"
              fillOpacity={0.6}
            />
          </RadarChart>
        </div>
        {/* テキスト部分 */}
        <div style={{ width: "40%", marginLeft: "50px" }}>
          <h2>会話相手の傾向グラフ</h2>

          <div style={{ textAlign: "left" }}>
            <p>
              <h4>友好度…会話相手の好感度 </h4>
              <h4>返信速度…数値が大きいほど早い</h4>
              <h4>優しさ…返信内容からみた相手の優しさ度合い</h4>
              <h4>心の余裕…数値が大きいほど心の余裕がある</h4>
              <h4>メッセージの長さ…文字数が多いほど数値大きい</h4>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FiveStepChart;

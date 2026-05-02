import { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const data = [
  {
    subject: "友好度",
    A: 100,
    B: 100,
    fullMark: 100,
  },
  {
    subject: "優しさ",
    A: 80,
    B: 100,
    fullMark: 100,
  },
  {
    subject: "返信速度",
    A: 86,
    B: 100,
    fullMark: 100,
  },
  {
    subject: "メッセージの長さ",
    A: 60,
    B: 100,
    fullMark: 100,
  },
  {
    subject: "心の余裕",
    A: 85,
    B: 90,
    fullMark: 100,
  },
];

function FiveStepChart() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {/* グラフの表示エリア */}
        <div>
          <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={500}
            height={500}
            data={data}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
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

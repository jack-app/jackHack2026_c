import { useState } from "react";
import "../App.css";
import dummyData from "../mock/dummyData.json";

function ReplyTime() {
  const replytime = dummyData.reply_time;

  return (
    <>
      <h2 style={{ color: "#f28482" }}>おすすめ返信時間</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div style={{ fontSize: "25px", fontWeight: "bold", gap: "15px" }}>
          {replytime}
        </div>
        <div
          style={{
            position: "relative",
            marginTop: "12px",
            display: "inline-block",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              padding: "10px 14px",
              borderRadius: "12px",
              fontSize: "17px",
              maxWidth: "500px",
            }}
          >
            相手の返信傾向から最も反応が良い時間帯です！
          </div>
          <div
            style={{
              position: "absolute",
              top: "14px",
              left: "-6px",
              width: "12px",
              height: "12px",
              background: "#ffffff",
              transform: "rotate(45deg)",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default ReplyTime;

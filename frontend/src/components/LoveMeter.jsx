import { Heart } from "lucide-react";
import "../App.css";

function LoveMeter({ data }) {
  const percentage = data || 0;

  // Determine color based on percentage
  const getHeartColor = () => {
    if (percentage > 80) return "#f28482"; // Deep pink/red
    if (percentage > 50) return "#f28482"; // Pink
    return "#ffb3c1"; // Light pink
  };

  return (
    <div
      className="love-meter-container"
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "16px",
        margin: "20px 0",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "15px",
        }}
      >
        <Heart
          size={28}
          fill={getHeartColor()}
          stroke={getHeartColor()}
          className={percentage > 70 ? "animate-pulse" : ""}
        />
        <span
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#4a4a4a",
          }}
        >
          脈あり度
        </span>
      </div>

      <div
        style={{
          position: "relative",
          height: "24px",
          background: "#f0f0f0",
          borderRadius: "12px",
          overflow: "hidden",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            background: `linear-gradient(90deg, #ffb3c1 0%, ${getHeartColor()} 100%)`,
            borderRadius: "12px",
            transition: "width 1s ease-out",
          }}
        />
      </div>

      <div
        style={{
          fontSize: "2rem",
          fontWeight: "900",
          color: getHeartColor(),
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {percentage}
        <span style={{ fontSize: "1rem", marginLeft: "2px" }}>%</span>
      </div>

      <p
        style={{
          fontSize: "0.85rem",
          color: "#888",
          marginTop: "5px",
        }}
      >
        {percentage > 80
          ? "かなり期待できそう！"
          : percentage > 50
            ? "いい感じです、もう少し！"
            : "焦らず距離を縮めましょう"}
      </p>
    </div>
  );
}

export default LoveMeter;

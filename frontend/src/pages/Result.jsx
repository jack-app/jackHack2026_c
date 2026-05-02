import { Sparkles, RefreshCw } from "lucide-react";
import CheerMessage from "../components/CheerMessage";
import RadarChart from "../components/RadarChart";
import WordHightlight from "../components/WordHighlight";
import ReplyTime from "../components/ReplyTime";

function Result({ data, onBack }) {
  if (!data) return null;

  return (
    <div className="result">
      <h2
        style={{
          color: "#f28482",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <Sparkles size={24} /> 分析結果
      </h2>

      <RadarChart data={data} />
      {/* した二つ横並び */}
      <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
        <WordHightlight />
        <CheerMessage />
      </div>
      <ReplyTime />
      <button
        onClick={onBack}
        className="submit-btn"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          width: "100%",
        }}
      >
        <RefreshCw size={20} /> もういちど解析する
      </button>
    </div>
  );
}

export default Result;

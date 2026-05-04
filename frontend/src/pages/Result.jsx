import { Sparkles, RefreshCw } from "lucide-react";
import CheerMessage from "../components/CheerMessage";
import FiveStepChart from "../components/FiveStepChart";
import WordHighlight from "../components/WordHighlight";
import ReplyTime from "../components/ReplyTime";
import LineGraphChart from "../components/LineGraphChart";

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

      <FiveStepChart data={data.five_step_chart} />
      <LineGraphChart data={data.message_time} />
      <WordHighlight data={data.impressive_words} />
      <CheerMessage message={data.advice_text} />
      <ReplyTime time={data.reply_time} />
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

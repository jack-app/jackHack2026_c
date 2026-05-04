import { useState } from "react";
import { Heart } from "lucide-react";
import Home from "./pages/Home";
import Result from "./pages/Result";
import { analyzeText } from "./api/client";
import "./App.css";

function App() {
  const [view, setView] = useState("home");

  const [resultData, setResultData] = useState(null); //本番環境ではdummyData->null
  const [error, setError] = useState(null);

  const handleAnalyze = async (text) => {
    setView("loading");
    setError(null);

    /*// --- 【UI確認用】APIを呼ばずにダミーデータ ---
     setTimeout(() => {
       const dummyData = {
         chartData: [
           { subject: "ときめき", score: 85 },
           { subject: "信頼度", score: 70 },
           { subject: "親密度", score: 95 },
           { subject: "緊張感", score: 40 },
           { subject: "脈あり度", score: 88 },
         ],
         message:
           "二人のやり取りからは、とても温かい空気感が伝わってきます！✨\n特に「親密度」が非常に高く、お互いに自然体で話せている証拠。次はあなたから少しだけ「未来の予定」を提案してみると、脈あり度がさらにスイッチするかも...！",
       };
       setResultData(dummyData);
       setView("result");
     }, 1000); // 1秒だけローディングを見せる
     ---------------------------------------------*/

    //本番用ロジック（今はコメントアウト）
    try {
      const data = await analyzeText(text);
      setResultData(data);
      setView("result");
    } catch (err) {
      console.error(err);
      setError("サーバーがおやすみ中かも...？ 起動を確認してみてね！");
      setView("home");
    }
  };

  const handleBack = () => {
    setView("home");
    setResultData(null);
  };

  return (
    <div className="app-container">
      <div className="top-bar">
        <Heart className="heart-icon" fill="currentColor" size={24} />
      </div>

      <header className="header">
        <h1>LOVE SWITCH</h1>
      </header>

      <main>
        {view === "home" && (
          <>
            <Home onAnalyze={handleAnalyze} />
            {error && (
              <p
                style={{
                  color: "#ff7091",
                  marginTop: "1rem",
                  fontWeight: "bold",
                }}
              >
                {error}
              </p>
            )}
          </>
        )}

        {view === "loading" && (
          <div className="loading">
            <div className="spinner"></div>
            <p style={{ fontWeight: "bold", color: "#f28482" }}>
              解析中です... 少々お待ちください
            </p>
          </div>
        )}

        {view === "result" && <Result data={resultData} onBack={handleBack} />}
      </main>
    </div>
  );
}

export default App;

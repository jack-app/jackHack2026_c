import { useState, useRef } from "react";
import { FileText, Pencil, UploadCloud } from "lucide-react";

function Home({ onAnalyze }) {
  const [method, setMethod] = useState("upload"); // 'upload' | 'text'
  const [text, setText] = useState("");
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        setText(event.target.result);
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAnalyze(text);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="card home">
      <div className="home-text">
        <h2>
          君は何を考えているんだ <br />
          なんと言えば君は笑顔になるのだ
        </h2>
        <p>
          相手が何考えているか気になりますよね？このサービスは、気持ちが気になる相手とのやりとりを分析して、相手の気持ちを予測します。
          <br />
          <br />
          相手の気持ちが SWITCHするタイミングと
          <br />
          あなたの行動がSWITCHする機会の提供
          <br />
          <br />
          そんなサービスを目指しています。ぜひ、気になる相手とのやりとりを入力してみてくださいね！
        </p>
        <p style={{ fontSize: "0.8rem", opacity: 0.7, marginTop: "1.5rem" }}>
          ※AIを使用しているため個人情報は入力しないでください！分析結果はあくまで予測であり、実際の気持ちとは異なる可能性があります。
        </p>
      </div>

      <div className="home-form">
        <div className="input-tabs">
          <button
            type="button"
            className={`tab-button ${method === "upload" ? "active" : ""}`}
            onClick={() => setMethod("upload")}
          >
            <FileText size={18} style={{ marginRight: "6px" }} /> ファイル
          </button>
          <button
            type="button"
            className={`tab-button ${method === "text" ? "active" : ""}`}
            onClick={() => setMethod("text")}
          >
            <Pencil size={18} style={{ marginRight: "6px" }} /> テキスト
          </button>
        </div>

        <form onSubmit={handleSubmit} className="input-content">
          {method === "upload" ? (
            <div className="file-upload-area" onClick={triggerFileInput}>
              <UploadCloud size={48} color="#84a59d" strokeWidth={1.5} />
              <p>ファイルをアップロード</p>
              <span style={{ fontSize: "0.8rem", opacity: 0.6 }}>
                クリックしてファイルを選択
              </span>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
                accept=".txt,.md,.json,.csv"
              />
              {fileName && <div className="file-name">📎 {fileName}</div>}
            </div>
          ) : (
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="ここにメッセージを入力してね..."
            />
          )}

          <button
            type="submit"
            className="submit-btn"
            // disabled={!text.trim()}
          >
            分析を始める
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;

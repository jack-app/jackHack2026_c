# Love Switch

LINEやSNSのトーク履歴を分析し、相手の感情やコミュニケーションの傾向を可視化するWebアプリケーション。
片想い中の人や、もっと仲良くなりたい相手がいる若者をターゲットにしています。

## 🚀 主な機能

## 🛠 技術スタック

- **Frontend**: React (Vite)
- **Backend**: FastAPI (Python)
- **AI**: Gemini API (Google Generative AI)

## 📁 ディレクトリ構成

- `frontend/`: Reactによるフロントエンドアプリケーション。
- `backend/`: FastAPIによるバックエンドAPI。Gemini APIとの連携やデータ処理を担当。

## 🏁 起動方法

### バックエンド (Backend)

1. `backend` ディレクトリに移動します。
   ```bash
   cd backend
   ```
2. 環境変数ファイルを準備します（`.env` を作成し、`GEMINI_API_KEY` を設定してください）。
3. 依存関係をインストールし、サーバーを起動します。
   ```bash
   # uvを使用する場合
   uv run uvicorn app.main:app --reload
   ```

### フロントエンド (Frontend)

1. `frontend` ディレクトリに移動します。
   ```bash
   cd frontend
   ```
2. 依存関係をインストールします。
   ```bash
   yarn install
   ```
3. 開発サーバーを起動します。
   ```bash
   yarn dev
   ```

---

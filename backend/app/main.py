from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from google.genai import types
from dotenv import load_dotenv
from pydantic import BaseModel
from google import genai
app = FastAPI()
data_store = []

load_dotenv()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class analyzeText(BaseModel):
    text:str



@app.get("/")
def read_root():
    return {"message": "Love Switch 起動しました"}

@app.post("/analyze")
def analyze(text: analyzeText):
    print(text)
    chat_log = text
    # data_store.append(text)
    # The client gets the API key from the environment variable `GEMINI_API_KEY`.
    client = genai.Client()

    prompt = f"""
    以下のLINEのトーク履歴を解析し、指定のJSON形式で出力してください。

    # 制約事項:
    - メッセージ内容、日時を抽出すること。
    - スタンプや画像送信、通話履歴は省略せず、その旨を記載すること。
    - 日付が変わった場合は、それ以降のメッセージに適切な日付を適用すること。

    # 出力形式 (JSON):
    {{
    "impressive_words": [
        {{
        "word":"心に響くワード"
        "reason":"そのワードを使うとどのような影響があるか"
        "score":"１０段階評価"
        }}
    ]
    "reply_time":"次いつ返信するべきかの時間をテキストで、例11:33"
    "five_step_chart": [
        {{
        "Frendship_level":"友好度の５段階評価"
        "Reply_speed":"返信速度の５段階評価"
        "Kindness":"やさしさの５段階評価"
        "Peace_of_mind":"心の余裕度の５段階評価"
        "Message_length":"メッセージの長さの５段階評価"
        }}
    ]
    }}

    # トーク履歴:
    {chat_log}
    """

    response = client.models.generate_content(
        model="gemini-3-flash-preview", contents=prompt,config=types.GenerateContentConfig(
            response_mime_type="application/json"
        )
    )
    print(response.text)
    return response.text
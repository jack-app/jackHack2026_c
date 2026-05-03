from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from google.genai import types
from dotenv import load_dotenv
from pydantic import BaseModel
from google import genai
import json

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
    chat_log = text.text
    # data_store.append(text)
    # The client gets the API key from the environment variable `GEMINI_API_KEY`.
    client = genai.Client()

    prompt = f"""
    以下のLINEのトーク履歴を解析し、指定のJSON形式で出力してください。

    # 制約事項:
    - メッセージ内容、日時を抽出すること。
    - スタンプや画像送信、通話履歴は省略せず、その旨を記載すること。
    - 日付が変わった場合は、それ以降のメッセージに適切な日付を適用すること。
    - "impressive_words"配列には2から4程度の候補を作成すること。
    - "impressive_words"の10段階評価と"five_step_chart"の5段階評価は文字列でなく数値を出力すること。

    # 出力形式 (JSON):
    {{
        "impressive_words": [
            {{
                "word":"相手の心に響くと推測されるキーワード,短文などを提案しここに書く",
                "reason":"そのワードを使うと相手にどのような影響があるかの説明",
                "score": 10
            }}
        ],
        "reply_time":"次いつ返信するべきかの時間をテキストで、例11:33",
        "five_step_chart":{{
            "friendship_level": 5,
            "reply_speed": 5,
            "kindness": 5,
            "peace_of_mind": 5,
            "message_length": 5
        }},
        "advice_text": "利用者への応援メッセージを3文程度"
    }}

    # 出力サンプル
    {{
        "impressive_words": [
            {{
                "word": "また今度ゆっくり話そう！",
                "reason": "相手の心の余裕が少ないため、一度引くことで好感度を維持できます。",
                "score": 9
            }},
            {{
                "word": "お疲れ様！",
                "reason": "短く労うことで返信のハードルを下げられます。",
                "score": 7
            }}
        ],
        "reply_time": "19:30",
        "five_step_chart": {{
            "friendship_level": 4,
            "reply_speed": 2,
            "kindness": 5,
            "peace_of_mind": 3,
            "message_length": 3
        }},
        "advice_text": "相手は少し忙しそうですが、丁寧な返信をくれています。今は焦らず、相手のペースに合わせるのが吉です。応援しています！"
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
    return json.loads(response.text)

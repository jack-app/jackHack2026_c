
import { useState } from "react";
import "../App.css"
import dummyData from "../mock/dummyData.json"

function WordHighlight() {
  const [count, setCount] = useState(0)
  const words = dummyData.impressive_words;
  words.sort((wordA, wordB)=>wordB.score - wordA.score);
  return (
    <div className='impressive-words'>
      <div className='impressive-words-title'>
        <h2 className='text-bold'>{"どんな言葉を送れば相手に響くか"}</h2>
      </div>
      <div className='words-flex'>
        {
          words.map((item, index)=>{
            return <div className='impressive-word'>
              <div className='word-score'>
                <p>おすすめ度:{item.score}</p>
                <p className='text-bold'>{item.word}</p>
              </div>
              <div className='reason'>
                <p>{item.reason}</p>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default WordHighlight

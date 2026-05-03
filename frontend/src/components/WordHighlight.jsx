
import { useState } from "react";
import "../App.css"
function WordHighlight({ data }) {
  const words = data || [];
  const sortedWords = [...words].sort((wordA, wordB) => wordB.score - wordA.score);
  return (
    <div className='impressive-words'>
      <div className='impressive-words-title'>
        <h2 className='text-bold'>{"どんな言葉を送れば相手に響くか"}</h2>
      </div>
      <div className='words-flex'>
        {
          sortedWords.map((item, index)=>{
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

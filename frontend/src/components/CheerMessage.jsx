import { useState } from "react";
import dummyData from "../mock/dummyData.json";

function CheerMessage() {
  return (
  <div className='all'>
    <div className="advice">AIからのアドバイス</div>
    <div className="message">
      <span className="text">{dummyData.advice_text}</span>
    </div>
  </div>
)}

export default CheerMessage;

function CheerMessage({ message }) {
  return (
    <div className='all'>
      <div className="advice">AIからのアドバイス</div>
      <div className="message">
        <span className="text">{message}</span>
      </div>
    </div>
  );
}

export default CheerMessage;

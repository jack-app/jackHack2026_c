import "../App.css";

function LoveMeter({data}) {
    const love_meter = data
    console.log(data)
    return (
        <>
            好感度{love_meter}%
        </>
    );
}

export default LoveMeter;

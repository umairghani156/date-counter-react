export default function Main({count,count2, setCount2}){
function decrease(){
    setCount2(count2 - count)
}
    function increase(){
        setCount2(count2 + count)
    }
   return(
    <div className="btns2">
        <button onClick={decrease} style={{width:"40px", height:"40px"}}><b>-</b></button>
        <p style={{fontWeight:"500", fontSize:"23px"}}>Count: {count2}</p>
        <button onClick={increase} style={{width:"40px", height:"40px"}}><b>+</b></button>
        </div>
   )
}
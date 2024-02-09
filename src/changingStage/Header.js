export default function Header({count, setCount}){
function decreament(){
    setCount(count-1)
}
    function increament(){
        setCount(count+ 1)
    }
    return(
        <div className="btns">
        <button onClick={decreament} style={{width:"40px", height:"40px"}}><b>-</b></button>
        <p style={{fontWeight:"500", fontSize:"23px", marginBottom:"0"}}>Step: {count}</p>
        <button onClick={increament} style={{width:"40px", height:"40px"}}><b>+</b></button>
        </div>
    )
}
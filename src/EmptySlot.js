import { useEffect } from "react";

function EmptySlot(props) {

    useEffect(()=>{
        let randomSeconds = Math.ceil(Math.random() * 6000);
        let timer = setTimeout(()=>{
            props.setDisplayMole(true)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })
    return (
        <div>
            <img src="../images/molehill.png" alt="Mole Hill"/>
        </div>
    )
}

export default EmptySlot
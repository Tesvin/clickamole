import { useState } from "react";
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props){

    let [displayMole, setDisplayMole] = useState(false);

    const moleClicked = () => {
        props.setScore(props.score +1)
        setDisplayMole(false)
    }


    return (
        <div style={{"display": "inline-block"}}>
            {displayMole ? <Mole setDisplayMole={setDisplayMole} 
            moleClicked={moleClicked}/> : <EmptySlot setDisplayMole={setDisplayMole}/>}
        </div>
    )
}

export default MoleContainer   
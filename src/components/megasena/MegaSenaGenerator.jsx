import React, {useState} from 'react'
import './MegaSenaGenerator.css'


export default props => {
    const [balls, setBall] = useState(props.numberOfBalls || 6);
    const max = props.max || 60
    const min = props.min || 1
    const ballsList = getBalls(balls, min, max, false).map((ball, i) => {
        return (
            <div className="ball" key={i}>
                {ball}
            </div>
        )
    })
    
    const onChangeBalls = (e) => {
        setBall(e.target.value) 
    }

    return (
        <div>
            <input value={balls} type="number" onChange={onChangeBalls}/>
            <div className="balls">
                {ballsList}
            </div>
        </div>
    )
}

 

const getNumeroRandomico = (min, max) => {
    return parseInt(Math.random() * (max - min) + min, 10);
};

const getBalls = (numberOfBalls, min, max, reapeat) => {
    if(numberOfBalls >= max && !reapeat){
        return []
    }
    let balls = [];
    for (let index = 0; index < numberOfBalls; index++) {
        const randomNumber = getNumeroRandomico(min, max);
        if(!reapeat){
            balls.indexOf(randomNumber) === -1 ? balls.push(randomNumber) : --index;
        }else{
            balls.push(randomNumber)
        }
    }
    return balls;
}
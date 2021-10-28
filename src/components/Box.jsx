import React, { useState } from 'react';

const Box = (props) => {
    const [color, setColor] = useState("")
const onSubmitColor = (e)=> {
e.preventDefault();
const newColor = color;
console.log(newColor, " this is new color")
props.setBoxArr([...props.boxArr,{color: newColor, width: '100px', height:'100px'}])
setColor("")

}
    return (
        <div>
             <form onSubmit={onSubmitColor}>
                 <span>color: </span>
                 <input type="text" onChange={(e) => setColor(e.target.value)} value={color}/>
                 <input type="submit" value="Add" />
             </form>
        </div>
    );
};

export default Box;
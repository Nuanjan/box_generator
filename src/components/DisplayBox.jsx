import React from 'react';
const boxContainerStyle = {
    display:"flex",
    flexWrap: 'wrap'
}
const DisplayBox = (props) => {
    return (
        <div style={boxContainerStyle}>
            {props.boxArr.map((box, i) => <div key={i} style={{backgroundColor: `${box.color}`, width:`${box.width}`, height: `${box.height}`, margin: '20px'}}></div>)}
        </div>
    );
};

export default DisplayBox;
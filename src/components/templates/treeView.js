import React from 'react';

export default ({
    treeStyle,
    leafStyle
}) => {
    return (
        <div className="box">
            <div className="center-circle" style={treeStyle}>
                <div className="center-circle-copy" style={treeStyle}></div>
                <div className="leaf-one" style={leafStyle}></div>
                <div className="leaf-two" style={leafStyle}></div>
                <div className="leaf-three" style={leafStyle}></div>
                <div className="leaf-four" style={leafStyle}></div>
                <div className="leaf-five" style={leafStyle}></div>
                <div className="leaf-six" style={leafStyle}></div>
                <div className="leaf-seven" style={leafStyle}></div>
                <div className="leaf-height" style={leafStyle}></div>
                <div className="leaf-nine" style={leafStyle}></div>
                <div className="leaf-ten" style={leafStyle}></div>
                <div className="trunk"></div>
            </div>   
        </div> 
    );
};
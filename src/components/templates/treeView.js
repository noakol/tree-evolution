import React from 'react';

export default ({
    treeProps,
    treeStyle,
    leafStyle,
    trunkStyle,
    frutieStyle,
    handleTreeSelect = () => {},
    containerClassName
}) => {
    return (
        <div 
            className={containerClassName ? `box ${containerClassName}` : "box"}
            onClick={() => handleTreeSelect(treeProps)} >
            <div className="center-circle" style={treeStyle}>
                <div className="fruties-container">
                    <div className="tree-frutie" style={frutieStyle} />
                    <div className="tree-frutie" style={frutieStyle} />
                    <div className="tree-frutie" style={frutieStyle} />
                </div> 
                <div className="center-circle-copy" style={treeStyle} />
                <div className="leaf-one" style={leafStyle} />
                <div className="leaf-two" style={leafStyle} />
                <div className="leaf-three" style={leafStyle} />
                <div className="leaf-four" style={leafStyle} />
                <div className="leaf-five" style={leafStyle} />
                <div className="leaf-six" style={leafStyle} />
                <div className="leaf-seven" style={leafStyle} />
                <div className="leaf-height" style={leafStyle} />
                <div className="leaf-nine" style={leafStyle} />
                <div className="leaf-ten" style={leafStyle} />
                <div className="trunk" style={trunkStyle} />
            </div>   
        </div> 
    );
};
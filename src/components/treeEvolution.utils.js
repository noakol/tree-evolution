import config from './treeEvolution.config';

export const generateChildProps = (parentProps) => {
    const mutationProp = config.propsArray[getRandomInt(0, config.propsArray.length)];
    const childProps = {...parentProps};

    childProps[mutationProp] = getMutationValue(mutationProp);

    return childProps;

}

export const generateRandomeColor = () => {
    return "#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);
};

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export const getRandomBorderStyle = () => {
    return config.borderStyles[getRandomInt(0, config.borderStyles.length)];
}

export const getMutationValue = (prop) => {
    let value;
    switch (prop) {
        case 'mainColor':
            value = generateRandomeColor();
            break;
        case 'trunkWidth': 
            value = getRandomInt(5, 51);
            break;
        case 'trunkColor': 
            value = generateRandomeColor();
            break;
        case 'treeTopBorder': 
            value = getTopTreeBorder();
            break;
        case 'frutieColor': 
            value = generateRandomeColor();
            break;
        case 'frutieExist': 
            value = getRandomInt(0, 2);;
            break;
        default:
            break;
    }
    return value;         
}

export const getTopTreeBorder = () => {
    const style =  {
        borderColor: generateRandomeColor(),
        borderWidth: getRandomInt(0, 10),
        borderStyle: getRandomBorderStyle()
    }
    console.log(style);
    return style;
}

const generateBorderStyle = (borderProps) => {
    if (borderProps) {
        return (
            `${borderProps.borderStyle} ${borderProps.borderWidth}px ${borderProps.borderColor}`);
    }
    return '';
}

export const createStyleFromProps = (props) => {
    if (!props) {
        return {};
    }
    
    return {
        treeStyle: {
            'backgroundColor': props.mainColor 
        },
        leafStyle: {
            'backgroundColor': props.mainColor,
            'border': generateBorderStyle(props.treeTopBorder) 
        },
        trunkStyle: {
            width: `${props.trunkWidth}%`,
            backgroundColor: props.trunkColor
        },
        frutieStyle: {
            display: !props.frutieExist && 'none',
            backgroundColor: props.frutieColor
        }
    };
}

export default {
    getRandomInt,
    generateChildProps,
    getMutationValue
}
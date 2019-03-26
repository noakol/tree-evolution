import config from './treeEvolution.config';

export const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

export const generateChildProps = (parentProps) => {
    const mutationProp = config.propsArray[getRandomInt(config.propsArray.length - 1)];
    const childProps = {...parentProps};

    childProps[mutationProp] = getMutationValue(mutationProp);

    return childProps;

}

export const generateRandomeColor = () => {
    return "#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);
};

export const generateRandomWidth = (min, max) => {
    return Math.random();
};


export const getMutationValue = (prop) => {
    let value;
    switch (prop) {
        case 'mainColor':
            value = generateRandomeColor();
            break;
        case 'trunkWidth': 
            value = generateRandomWidth(200, 250);
        default:
            break;
    }
    return value;         
}

export default {
    getRandomInt,
    generateChildProps,
    getMutationValue
}
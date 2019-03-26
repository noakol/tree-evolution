const parentInitProps = {
    mainColor: getRandomColor(),
    trunkColor: getRandomColor(),
    trunkWidth: getTunkWidth()
};


const getRandomColor = () => {
    return "#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);
};

const getTunkWidth = () => {
    return Math.random();
};


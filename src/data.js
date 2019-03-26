const parentProps = {
    treeColor: getRandomColor()
};

const getRandomColor = () => {
    return '#' + (Math.random().toString(16) + "000000").substring(2,8);
};
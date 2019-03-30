import {getRandomInt, getTopTreeBorder, generateRandomeColor} from '../components/treeEvolution.utils';
import config from '../components/treeEvolution.config';

export default {
    viewMode: config.viewMode.select,
    selectedTree: {
        mainColor: generateRandomeColor(),
        trunkWidth: getRandomInt(5, 51),
        treeTopBorder: getTopTreeBorder(),
        frutieColor: generateRandomeColor(),
        frutieExist: getRandomInt(0, 2)
    }
};

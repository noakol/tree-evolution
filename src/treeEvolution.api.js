export default class treeEvolutionApi {
    constructor(store) {
        this.store = store;
    };

    getParentProps = () => {
        return this.store.getState().selectedTree;
    }
};
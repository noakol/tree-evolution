import actionCreator from './actionCreator';
import actionTypes from './treeEvolution.actionTypes';
import initialState from './initState';

export default class treeEvolutionApi {
    constructor(store) {
        this.store = store;
    };

    setInitialState = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const propsFromUrl = urlParams.get('props');
        const modeFromUrl = urlParams.get('mode');

        if (propsFromUrl && modeFromUrl) {
            try {
                this.updateSelectedTreeFromUrl();
            } catch (error) {
                this.clearStateAction();
                alert('the props set from the url are invalid' + error);
            }
        } else {
            this.updateSelectedTree(initialState);
        }
    }

    getParentProps = () => {
        return this.store.getState().selectedTree;
    }

    updateSelectedTree = (props) => {
        this.updateSelectedTreeAction(props);
        this.updateUrl(props);
    }

    updateUrl = (props) => {
        const jsonProps = this.getEncodedQuery(JSON.stringify(props));

        window.history.pushState(null, null, '?props=' + jsonProps);
    }

    updateSelectedTreeFromUrl = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const props = this.parseQuery(urlParams.get('props'));
        const mode = urlParams.get('mode');

        props && this.updateSelectedTreeAction(props);
        mode && this.updateViewModeAction(mode);
    }


    getViewMode = () => {
       return this.store.getState().mode;
    }

    parseQuery = (urlValue) => {
        if (urlValue) {
            const decodedVal = decodeURI(urlValue);
            return JSON.parse(decodedVal);
        }
        return null;
    }

    getEncodedQuery = (query) => {
        const colonRegEx = new RegExp('%3A', 'g');
        const commRegEx = new RegExp('%2C', 'g');

        let newQuery = encodeURIComponent(query);
        newQuery = newQuery.replace(colonRegEx, ":");
        newQuery = newQuery.replace(commRegEx, ",");
        return newQuery;
    }

    updateSelectedTreeAction = (payload) => {
        this.store.dispatch(
            actionCreator(actionTypes.SET_SELECT_TREE, payload));
    }

    updateViewModeAction = (payload) => {
        this.store.dispatch(
            actionCreator(actionTypes.SET_VIEW_MODE, payload));
    }

    clearStateAction = () => {
        this.store.dispatch(
             actionCreator(actionTypes.CLEAR_STATE)
        );
    }

};
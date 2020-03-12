import {createStore } from 'redux';

const INITIAL_STATE = {
    items: [
        {
          description: 'Description',
          codigo: '321321',
          quantidade: '1'
        },
        {
            description: 'Description',
            codigo: '9879887987987987987987',
            quantidade: '3'
        }
    ],
};

function barcodes(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_BARCODE':
            return { ...state, items:[...state.items, action.item] };
        case 'INCREASE_QUANTITY':
            return { ...state, items:[action.item]}
        default:
            return state;
    }
}

const store = createStore(barcodes);

export default store;
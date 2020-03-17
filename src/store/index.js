import { createStore } from 'redux';

const INITIAL_STATE = {
  items: [
    {
      description: 'Description',
      code: '321321',
      qty: 1,
    },
    {
      description: 'Description',
      code: '32132154',
      qty: 3,
    },
  ],
};

function barcodes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_BARCODE':
      if (state.items.find(x => x.code == action.item.code)) {
        state.items.find(x => x.code == action.item.code).qty++;
        return { ...state, items: [...state.items] };
      }
      return { ...state, items: [...state.items, action.item] };

    case 'INCREASE_QUANTITY':
      state.items.find(x => x.code == action.item).qty++;
      return { ...state, items: [...state.items] };

    case 'DECREASE_QUANTITY':
      state.items.find(x => x.code == action.item).qty--;
      return { ...state, items: [...state.items] };

    case 'REMOVE_ITEM':
      var index = state.items.findIndex(x => x.code == action.item);
      state.items.splice(index);
      return { ...state, items: [...state.items] };

    case 'SET_QUANTITY':
      state.items.find(x => x.code == action.item[0]).qty = parseInt(
        action.item[1]
      );
      return { ...state, items: [...state.items] };

    case 'SET_DESCRIPTION':
      state.items.find(x => x.code == action.item[0]).description =
        action.item[1];
      return { ...state, items: [...state.items] };

    default:
      return state;
  }
}

const store = createStore(barcodes);

export default store;

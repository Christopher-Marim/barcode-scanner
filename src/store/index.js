import { createStore } from 'redux';

const INITIAL_STATE = {
  isPopUpOpened: [false],
  inventories: [
    {
      collectName: 'Coleta 1',
      collectDate: '10/04/2020',
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
    }, 
    {
      collectName: 'Coleta 2',
      collectDate: '03/03/2020',
      items: [
        {
          description: 'Description Col 2',
          code: '321321',
          qty: 1,
        },
        {
          description: 'Description 1 Col 2',
          code: '32132154',
          qty: 3,
        },
      ],
    }
  ]
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
      state.items.splice(index, 1);
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
    case 'SHOWPOPUP':
      console.log('onPress:', action.value);
      
      return {...state, isPopUpOpened: [action.value]};
    case 'SET_COLLECTNAME':
      console.log('collect set');
      
    default:
      return state;
  }
}

const store = createStore(barcodes);

export default store;

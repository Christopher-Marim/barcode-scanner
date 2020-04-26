import { createStore } from 'redux';



const INITIAL_STATE = {
  inventories:[
    {
      id: 1,
      collectName: 'teste',
      collectDate: '25/06/2010',
      collectedItems: [
        {
          description: '',
          code: '',
          qty: 0,
          collectedQty: '',
        }
      ],
    },
    {
      id: 2,
      collectName: 'teste 2',
      collectDate: '25/06/2010',
      collectedItems: [
        {
          description: '',
          code: '',
          qty: 0,
          collectedQty: '',
        }
      ],
    }
  ],
  storedItems: [
    {
      description: 'Celular',
      code: '123',
      qty: 20,
    },
    {
      description: 'Notebook',
      code: '124',
      qty: 3,
    },
    {
      description: 'Teclado',
      code: '125',
      qty: 3,
    },
    {
      description: 'Mouse',
      code: '126',
      qty: 3,
    },
  ],
};

function barcodes(state = INITIAL_STATE, action) {
  var storedItems = state.storedItems;

  switch (action.type) {
    case 'ADD_INVENTORY':
      
    case 'ADD_BARCODE':
      let x = storedItems.find(x => x.code == action.item)
      console.log('search return:', x);
      console.log('action item:', action.item);
      if (x != undefined){
        console.log('not undefined');
        let auxItem = x;
        auxItem = {...auxItem, 'collectedQty':1}
        return {...state, items:[...state.items, auxItem]}
      }else{
        let auxItem = {
          description: "",
          code: action.item,
          collectedQty: 1,
          qty: 0
        }
        return {...state, items:[...state.items, auxItem]}
      }

    case 'INCREASE_QUANTITY':
      stateitems.find(x => x.code == action.item).collectedQty++;
      return { ...state, items: [...state.items] };

    case 'DECREASE_QUANTITY':
      state.items.find(x => x.code == action.item).collectedQty--;
      return { ...state, items: [...state.items] };

    case 'REMOVE_ITEM':
      var index = state.items.findIndex(x => x.code == action.item);
      state.items.splice(index, 1);
      return { ...state, items: [...state.items] };

    case 'SET_QUANTITY':
      state.items.find(x => x.code == action.item[0]).collectedQty = parseInt(
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

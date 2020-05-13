import { createStore } from 'redux';



const INITIAL_STATE = {
  collectTitle:'',
  currentInventory: 0,
  isPopUpOpened: [false],
  server: 'https://ptsv2.com/t/5rmp1-1584408896/post',
  inventories:[
    {
      id: 1,
      collectName: 'teste',
      collectDate: '25/06/2010',
      collectedItems: [
        {
          description: 'item collect 1',
          code: '1111',
          qty: 0,
          collectedQty: '1',
        },
        {
          description: 'item collect 2',
          code: '43434',
          qty: 0,
          collectedQty: '1',
        },
        {
          description: 'item collect 3',
          code: '3232',
          qty: 0,
          collectedQty: '1',
        },
        {
          description: 'item collect 4',
          code: '2323',
          qty: 0,
          collectedQty: '1',
        }
      ],
    },
    {
      id: 2,
      collectName: 'teste 2',
      collectDate: '25/06/2010',
      collectedItems: [
        {
          description: 'item collect 2',
          code: '2222',
          qty: 0,
          collectedQty: '2',
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
      if (x != undefined){
        let auxItem = x;
        console.log('x2: ', auxItem);
        auxItem = {...auxItem, 'collectedQty':1}
        
        let auxInventories = [...state.inventories];
        auxInventories[state.currentInventory].collectedItems.push(auxItem);
  
        return {...state, inventories:[...auxInventories]}
      }else{
        let auxItem = {
          description: "",
          code: action.item,
          collectedQty: 1,
          qty: 0

        }
        let auxInventories = [...state.inventories];
        auxInventories[state.currentInventory].collectedItems.push(auxItem);
  
        return {...state, inventories:[...auxInventories]}
      }

    case 'INCREASE_QUANTITY':
      state.inventories[state.currentInventory].collectedItems.find(x => x.code == action.item).collectedQty++;
      return { ...state, inventories: [...state.inventories] };

    case 'DECREASE_QUANTITY':
      if(state.inventories[state.currentInventory].collectedItems.find(x => x.code == action.item).collectedQty > 0){
        state.inventories[state.currentInventory].collectedItems.find(x => x.code == action.item).collectedQty--;
        return { ...state, inventories: [...state.inventories] };
      }else{
        console.log('decrease: ',...state.inventories[state.currentInventory].collectedItems);
        return{...state};
      }

    case 'REMOVE_COLLECT':
      let indexCollectToRemove = state.inventories.findIndex(x => x.id == action.inventories[0]);
      
      state.inventories.splice(indexCollectToRemove, 1);
      return { ...state, inventories: [...state.inventories] };

    case 'REMOVE_ITEM':
     let auxInventories = [...state.inventories];
     let indexItemToRemove = state.inventories[state.currentInventory].collectedItems.findIndex(x => x.code == action.item);
     auxInventories[state.currentInventory].collectedItems.splice(indexItemToRemove, 1);     
     return { ...state, inventories: [...auxInventories]};

    case 'SET_QUANTITY':
      state.inventories[state.currentInventory].collectedItems.find(x => x.code == action.item[0]).collectedQty = parseInt(
        action.item[1]
      );      
      return { ...state, items: [...state.inventories] };

    case 'SET_DESCRIPTION':
      let renameIndex = state.inventories.indexOf(state.inventories.find(collect => collect.id == action.inventories[0]));
      let collect = state.inventories.find(collect => collect.id == action.inventories[0])
           
      if (collect != undefined) {
        collect = {...collect, 'collectName': action.inventories[1]}
        let auxInventories = [...state.inventories];
        auxInventories[renameIndex] = collect;

        return{...state, inventories:[...auxInventories]};
      }else{
        return{...state}
      }

      state.items.find(x => x.code == action.inventories[1]).description =
        action.item[1];
      return { ...state, items: [...state.items] };
    
    case 'NEW_COLLECT':
      const inventory = {
        id: 3,
        collectName: action.inventory[0],
        collectDate: action.inventory[1],
        collectedItems: [],
      }
      return {...state, inventories: [...state.inventories, inventory ]}
    case 'SHOWPOPUP':
      console.log('onPress:', action.value);
      
      return {...state, isPopUpOpened: [action.value]};
    case 'SET_COLLECTNAME':

    case 'SET_CURRENT_INVENTORY':
      let collectIndex = state.inventories.findIndex(x => x.id == action.idToShow);
      console.log(`current inventory id: ${action.idToShow} | current index: ${collectIndex}`);

      return {...state, collectTitle: state.inventories[collectIndex].collectName, currentInventory: collectIndex};

    default:
      return state;
  }
}

const store = createStore(barcodes);

export default store;

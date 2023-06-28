const cartReducer = (state,action) => {
  let existingItem;
  switch(action.type) {
    case "add_to_cart":
      console.log(state,action)
      existingItem = state.find((item) => {
        console.log(item);
        if (item.product_id === action.product_id) {
          return item;
        }
      });
      console.log(existingItem, 'existingitem');
      if (existingItem) {
        return state.map(
          (item) => {
            if (item.product_id === action.product_id) {
              console.log(item, 'mappeditem');
              item.quantity += 1;
              return item;
            } else {
              return item;
            }
          }
          // item.product_id === existingItem.product.product_id
          //   ? { ...existingItem, quantity: existingItem.quantity + 1 }
          //   : item
        );
      } else {
        // return [...state, { ...action.product, quantity: 1 }]
        console.log([...state, action.product], 'addedarray');
        return [...state, action.product];
      }
    case "remove_from_cart":
      console.log(state, action);
      console.log(action.product);
      existingItem = state.find(
        (item) => item.product.product_id === action.product.product.product_id
      );
      console.log(existingItem);
      console.log(existingItem.product.quantity);
      if (existingItem.quantity === 1) {
        return state.filter(
          (item) => item.product.product_id !== existingItem.product.product_id
        );
      } else if (existingItem) {
        return state.map((item) => {
          if (item.product.product_id === existingItem.product.product_id) {
            item.quantity -= 1;
            return item;
          } else {
            return item;
          }
        });
      }
      // if (existingItem.quantity === 1){
      //     return state.filter(item => item.product_id !== action.product.product_id)
      // } else {
      //     return state.map(item => item.product_id === existingItem.product_id? {...existingItem, quantity: existingItem.quantity -1} : item)
      // }
      break;
    case "set_cart":
      console.log(action.newCart)
      return action.newCart
    default:
      break;

  }
}

export default cartReducer;

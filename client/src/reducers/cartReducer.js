const cartReducer = (state,action) => {
  let existingItem;
  switch(action.type) {
    case "add_to_cart":
      console.log(state,action)
      existingItem = state.find((item) => item.product_id === action.product.product_id)
      if (existingItem) {
          return state.map((item) => item.product_id === existingItem.product_id
              ? { ...existingItem, quantity: existingItem.quantity + 1 }
              : item
          )
      } else {
        return [...state, { ...action.product, quantity: 1 }];
      }
      break;
    case "remove_from_cart":
      existingItem = state.find(item => item.product_id === action.product.product_id)
      if (existingItem.quantity === 1){
          return state.filter(item => item.product_id !== action.product.product_id)
      } else {
          return state.map(item => item.product_id === existingItem.product_id? {...existingItem, quantity: existingItem.quantity -1} : item)
      }
      break
    default:
      break;

  }
}

export default cartReducer;

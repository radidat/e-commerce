import { createSelector } from "reselect";

  
 export const selectCardItemCount = createSelector(
    state => state. productsData.cardItems, 
    (cardItems)=>
    cardItems.reduce((quantity, cardItem)=>{
        return  quantity + cardItem.quantity
    }, 0)
)
export const selectCardTotal = createSelector(
    state => state. productsData.cardItems,
    cardItems =>
      cardItems.reduce(
        (quantity, cardItem) =>
          quantity + cardItem.quantity * cardItem.price,
      0)
  );
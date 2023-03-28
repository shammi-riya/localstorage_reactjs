const addToDb =(id)=>{
    let shoppingCart;

    const storeCart = localStorage.getItem("shopping-cart")
    if(storeCart){
        shoppingCart = JSON.parse(storeCart)
    }else{
      shoppingCart = {}
    }


// add quintity

const quintity = shoppingCart[id];
console.log(quintity);
if(quintity){
    const newQuintity = quintity+1
    shoppingCart[id] = newQuintity;
}else{
    shoppingCart[id] = 1
}
localStorage.setItem("shopping-cart",JSON.stringify(shoppingCart))




}


const removeId = (id)=>{
  const storeCart = localStorage.getItem("shopping-cart")
  if(storeCart){
    const shoppingCart = JSON.parse(storeCart)
    console.log(shoppingCart);
    if(id in shoppingCart){
      delete shoppingCart[id]
      localStorage.setItem("shopping-cart",JSON.stringify(shoppingCart))
    }
  }
}


const removeAll = ()=>{
  localStorage.removeItem("shopping-cart")
}
export {
    addToDb,
    removeId,
    removeAll
}
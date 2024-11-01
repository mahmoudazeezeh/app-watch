/*import React ,{createContext, useState, useEffect} from "react";


export const ShopContext = createContext();

import { productsData } from "../../data";

const ShopContextProvider =({children}) =>{
  const [products, setProducts] = useState(productsData);
  const [filteredProducts , setFilteredProducts] =useState(productsData);

  const searchProducts =(query) =>{
    if(query === ''){
      setFilteredProducts(products);
    }else{
      const filtered = products.filter((product)=>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
    }
  };
  //hero visiblity.........
   const [heroVisible,setHeroVisible]=useState(true)

//cart state
const [cart, setCart]=useState([])

const [itemAmount,setItemAmount] =useState(0)

const [total,setTotal]=useState(0)

  //adding in carts
  const addToCart =(product,id) =>{
    const newItem = {...product,amount:1}

    const cartItem = cart.find ((item) =>{
      return item.id ===id;
    });
    if(cartItem){
      const newCart = [...cart].map((item) =>{
        if(item.id===id){
          return {...item,amount: cartItem.amount+1};
        }else
        {
          return item;
        }
      });
      setCart(newCart)
    }else{
      setCart([...cart,newItem])
    }

  }

  const removeFromCart =(id) =>{
    const newCart = cart.filter((item) =>{
      return item.id !==id;
    });
    setCart(newCart)
  }
const clearCart =() =>{
  setCart([]);
}

useEffect(
  () =>{
    const total = cart.reduce((accumulator,currentItem) =>{
      const priceAsNumber = parseFloat(currentItem.price);
      if(isNaN(priceAsNumber)){
        return accumulator
      }
      return accumulator + priceAsNumber * currentItem.amount;
    },0)
    setTotal(total);
  },[cart]
);

useEffect(
  () =>{
    if(cart){
      const amount =cart.reduce((accumulator,currentItem) =>{
        return accumulator + currentItem.amount;
      },0);
      setItemAmount(amount);
    }

  },[cart]
);
  

 const increaseAmount =(id) =>{
  const cartItem = cart.find((item) => item.id===id);
  addToCart(cartItem,id)
 }


 const decreaseAmount =(id) =>{
  const cartItem = cart.find((item)=>{
    return item.id ===id;
  })
  if(cartItem){
    const newCart = cart.map((item) =>{
      if(item.id ===id){
        return {...item,amount : cartItem.amount-1};
      }else{
        return item ;
      }
    });
    setCart(newItem);
  }else{
    if(cartItem.amount<1){
      removeFromCart(id);
    }
  }
 }

  return <ShopContext.Provider value={{cart,addToCart,removeFromCart,clearCart,increaseAmount,decreaseAmount,itemAmount,total, heroVisible,setHeroVisible, products,filteredProducts ,searchProducts}}>
    {children}
  </ShopContext.Provider>

}

export default ShopContextProvider */
/*import React ,{createContext, useState, useEffect} from "react";


export const ShopContext = createContext();

import { productsData } from "../../data";

const ShopContextProvider =({children}) =>{
  const [products, setProducts] = useState(productsData);
  const [filteredProducts , setFilteredProducts] =useState(productsData);

  const searchProducts =(query) =>{
    if(query === ''){
      setFilteredProducts(products);
    }else{
      const filtered = products.filter((product)=>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
    }
  };
  //hero visiblity.........
   const [heroVisible,setHeroVisible]=useState(true)

//cart state
const [cart, setCart]=useState([])

const [itemAmount,setItemAmount] =useState(0)

const [total,setTotal]=useState(0)

  //adding in carts
  const addToCart =(product,id) =>{
    const newItem = {...product,amount:1}

    const cartItem = cart.find ((item) =>{
      return item.id ===id;
    });
    if(cartItem){
      const newCart = [...cart].map((item) =>{
        if(item.id===id){
          return {...item,amount: cartItem.amount+1};
        }else
        {
          return item;
        }
      });
      setCart(newCart)
    }else{
      setCart([...cart,newItem])
    }

  }

  const removeFromCart =(id) =>{
    const newCart = cart.filter((item) =>{
      return item.id !==id;
    });
    setCart(newCart)
  }
const clearCart =() =>{
  setCart([]);
}

useEffect(
  () =>{
    const total = cart.reduce((accumulator,currentItem) =>{
      const priceAsNumber = parseFloat(currentItem.price);
      if(isNaN(priceAsNumber)){
        return accumulator
      }
      return accumulator + priceAsNumber * currentItem.amount;
    },0)
    setTotal(total);
  },[cart]
);

useEffect(
  () =>{
    if(cart){
      const amount =cart.reduce((accumulator,currentItem) =>{
        return accumulator + currentItem.amount;
      },0);
      setItemAmount(amount);
    }

  },[cart]
);
  

 const increaseAmount =(id) =>{
  const cartItem = cart.find((item) => item.id===id);
  addToCart(cartItem,id)
 }


 const decreaseAmount =(id) =>{
  const cartItem = cart.find((item)=>{
    return item.id ===id;
  })
  if(cartItem){
    const newCart = cart.map((item) =>{
      if(item.id ===id){
        return {...item,amount : cartItem.amount-1};
      }else{
        return item ;
      }
    });
    setCart(newItem);
  }else{
    if(cartItem.amount<1){
      removeFromCart(id);
    }
  }
 }

  return <ShopContext.Provider value={{cart,addToCart,removeFromCart,clearCart,increaseAmount,decreaseAmount,itemAmount,total, heroVisible,setHeroVisible, products,filteredProducts ,searchProducts}}>
    {children}
  </ShopContext.Provider>

}

export default ShopContextProvider */
import React, { createContext, useState, useEffect } from "react";
import { productsData } from "../../data";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  
  // البحث عن المنتجات
  const searchProducts = (query) => {
    if (query === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  // حالة ظهور Hero
  const [heroVisible, setHeroVisible] = useState(true);

  // حالة السلة
  const [cart, setCart] = useState([]);

  // عدد العناصر في السلة
  const [itemAmount, setItemAmount] = useState(0);

  // المجموع الكلي
  const [total, setTotal] = useState(0);

  // إضافة منتج إلى السلة
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // إزالة منتج من السلة
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // إفراغ السلة
  const clearCart = () => {
    setCart([]);
  };

  // حساب المجموع الكلي
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      const priceAsNumber = parseFloat(currentItem.price);
      if (isNaN(priceAsNumber)) {
        return accumulator;
      }
      return accumulator + priceAsNumber * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  // حساب عدد العناصر في السلة
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // زيادة الكمية
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // تقليل الكمية
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem && cartItem.amount > 1) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      removeFromCart(id);
    }
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
        heroVisible,
        setHeroVisible,
        products,
        filteredProducts,
        searchProducts,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;



import React, { useState } from "react";

const App = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product1", quantity: 1 },
      { id: 2, title: "Product2", quantity: 1 },
      
  ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.quantity === 1 ? { ...item, quantity: 2 } : item
      ),
    });
  };

  return <div>
    <button onClick={handleClick}>click</button>
    {cart.items.map(item => <p key={item.id}>{item.quantity}</p>)}
  </div>;
};

export default App;

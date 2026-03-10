import { useSelector } from "react-redux";

function Cart() {

  const items = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      <h2>Cart Items</h2>

      {items.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
}

export default Cart;
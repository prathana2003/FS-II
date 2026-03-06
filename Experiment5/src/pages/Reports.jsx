import { useSelector } from "react-redux";
import { useMemo } from "react";

function Reports() {

  const items = useSelector((state) => state.cart.cartItems);

  const totalItems = useMemo(() => {
    return items.length;
  }, [items]);

  return (
    <div>
      <h1>Reports Page</h1>
      <p>Total Cart Items: {totalItems}</p>
    </div>
  );
}

export default Reports;
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

function CardComponent({ product }) {

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="card">
      <h3>{product.name}</h3>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}

export default CardComponent;
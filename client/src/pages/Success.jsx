import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useLocation, Link  } from "react-router-dom";
import { addOrder } from "../redux/apiCalls";
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(location);
  const data = location.state.data;
  const cart = location.state.products;
  const userId =  currentUser._id;
  const amount = data.amount;
  const address = data.billing_details.address;
  const products = cart.products.map((item) => ({
    productId: item.title,
    size: item.size,
    color: item.color,
    quantity: item.quantity,
}))

  const [orderId] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const handleClick = (e) => {
      e.preventDefault();
      addOrder(dispatch, { userId, products, amount, address});
      navigate("/");
    };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontsize: "50px"
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
        <Link to="/">
        <button href="/" onClick={handleClick} style={{ padding: 10, marginTop: 20}}>Go to Homepage</button>
        </Link>
    </div>
  );
};

export default Success;

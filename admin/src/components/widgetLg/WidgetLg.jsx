import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import "./widgetLg.css";
import {format} from "timeago.js"

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
        console.log(res.data);
      } catch {}
    };
    getOrders();
  }, []);
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Product</th>
          <th className="widgetLgTh">Alamat</th>
          <th className="widgetLgTh">waktu pembelian</th>
          <th className="widgetLgTh">Harga Total</th>
        </tr>
        {orders.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            <td className="widgetLgUser">
              <span className="widgetLgName">{order.userId}</span>
            </td>
            

            <td className="widgetLgAddress">
              {order.products.map((product, index) => (
                <div>{`${index+1}. ${product.productId}, color: ${product.color}, size: ${product.size}, quantity: ${product.quantity}`}</div>
              ))}
            </td>

            <td className="widgetLgAddress">{`${order.address.line1}, ${order.address.city}`}</td>
            <td className="widgetLgDate">{format(order.createdAt)}</td>
            <td className="widgetLgAmount">Rp.{order.amount/100},00-</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

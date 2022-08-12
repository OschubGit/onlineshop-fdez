import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { getOrdersFromFirebase } from "../utils/getDataFirestore";
import NoProducts from "./NoProducts";

const Orders = () => {
  const [orders, setOrders] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getOrdersFromFirebase()
      .then((result) => {
        setOrders(result.map((m) => m.items));
        setLoading(false)
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    loading ? (
        <Loading/>
    ) : (
        orders.length > 0 ? (
        <div>
          <div className="c-container grid orders">
            <div className="col-12 col-xxs-4 col-xs-6 col-sm-8 col-md-10 col-xl-12">
                <h3>Mis pedidos</h3>
            </div>
            <div className="col-12 col-xxs-4 col-xs-6 col-sm-8 col-md-10 col-xl-12">
              {orders.map((o, index) => (
                  <div key={index} className="c-ordersTable">
                      <div  className="grid">
                    {o.map((m, qIndex) => (
                        <div key={qIndex} className="c-ordersTable_item col-12 col-xxs-4 col-xs-6 col-sm-8 col-md-10 col-xl-12">
                            <strong>ID: {m.id}</strong>
                            <hr />
                            <strong>Producto:</strong> {m.title} | <strong>Cantidad:</strong> {m.qty} | <strong>PrecioTotal:</strong> {m.total}€
                        </div>
                    ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        ) : (
            <NoProducts
            alert={"Todavía no hay productos adquiridos"}
            title={"Puedes comprar en las siguientes categorías"}
            />
        )
    )
  );
};

export default Orders;

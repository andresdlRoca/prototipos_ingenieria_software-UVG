import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import "./new-compras-style.css";
import CardCompra from "./CardCompra";
import BookExample from "../../media/book_example.jpg";

function NewCompra() {
  const [isTopVentas, setIsTopVentas] = useState(false);
  const [productosInfo, setProductosInfo] = useState([
    {
      user: {
        id: 10,
        name: "Mauricio Gomez",
        rate: 5,
      },
      product: {
        title: "Libro 1",
        status: "En camino",
        price: 200,
        state: "Usado",
      },
    },
    {
      user: {
        id: 11,
        name: "Mario Gonzalez",
        rate: 5,
      },
      product: {
        title: "Libro 2",
        status: "En camino",
        price: 150,
        state: "Nuevo",
      },
    },
    {
      user: {
        id: 10,
        name: "Luis Alejo",
        rate: 5,
      },
      product: {
        title: "Libro 3",
        description:
          "Este es el mejor libro de todos, por favor comprarlo pq esta mamadisimo si que si",
        status: "En camino",
        price: 500,
        state: "Usado",
      },
    },
  ]);
  return (
    <div id="main-container-new-ventas">
      <div className="title-and-filters-wrapper" />

      <div id="productos-main-container-wrapper">
        <div id="productos-main-container">
          {productosInfo.map((venta) => {
            if (venta.user && venta.product) {
              const src = venta.user.id === 10 ? BookExample : null;
              return (
                <CardCompra
                  product={venta.product}
                  user={venta.user}
                  productImage={src}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default NewCompra;

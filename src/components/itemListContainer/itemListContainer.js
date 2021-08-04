import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./itemListContainer.css";
import { productsMocks } from "../../mocks/productsMocks";

const items = productsMocks;

const ItemListContainer = ({ greeting }) => {
  const [list, setList] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    const task = new Promise((resuelto, rechazado) => {
      let status = 200;
      if (status === 200) {
        setTimeout(() => {
          resuelto(items);
        }, 2000);
      } else {
        rechazado("rechazado");
      }
    });
    const getPromiseTask = () => {
      return task;
    };

    if (categoryId === undefined) {
      getPromiseTask().then((resp) => setList(resp));
    } else {
      getPromiseTask().then((resp) =>
        setList(resp.filter((item) => item.categoria === categoryId))
      );
    }
  }, [categoryId]);
  console.log(categoryId);

  return (
    <div className="banner">
      <h1 className="greeting">{greeting}</h1>
      <ItemList list={list} />
    </div>
  );
};
export default ItemListContainer;

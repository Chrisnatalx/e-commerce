import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./itemListContainer.css";
import { getFirestore } from "../../database/firebaseService";

const ItemListContainer = ({ greeting }) => {
  const [list, setList] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    const dbQuery = getFirestore();
    dbQuery
      .collection("items")
      .get()
      .then((resp) => {
        const products = resp.docs.map((p) => p.data());
        if (categoryId === undefined) {
          setList(products);
        } else {
          setList(products.filter((item) => item.categoria === categoryId));
        }
      });
  }, [categoryId]);

  return (
    <div className="banner">
      <ItemList list={list} />
    </div>
  );
};
export default ItemListContainer;

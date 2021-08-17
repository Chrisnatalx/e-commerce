import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../Item/ItemDetail";
import { getFirestore } from "../../database/firebaseService";

function ItemDetailCountainer() {
  const [item, setItem] = useState([]);
  const { itemId } = useParams();
  useEffect(() => {
    const dbQuery = getFirestore();
    dbQuery
      .collection("items")
      .get()
      .then((resp) => {
        const products = resp.docs.map((p) => p.data());
        return setItem(
          products.find((item) => parseInt(item.id) === parseInt(itemId))
        );
      });
  }, [itemId]);
  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailCountainer;

import { useEffect, useState } from "react";
import axios from "axios";
import "./Towers.css";

const Towers = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/items");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <div className="items-header">Open Deals</div>
      <div className="items-container">
        {items.map((item) => (
          <div className="item-card" key={item.id}>
            <img src={item.imageURL} alt={item.name} className="item-image" />
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>Price: ${Number(item.price).toFixed(2)}</p>
              <p>Ticket: {item.ticket}</p>
              <p>Yield: {Number(item.yield).toFixed(2)}%</p>
              <p>Days Left: {item.daysLeft}</p>
              <p>Sold: {Number(item.soldPercentage).toFixed(2)}%</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Towers;

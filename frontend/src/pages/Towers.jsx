import { useEffect, useState } from "react";
import axios from "axios";
import "./Towers.css";

const Towers = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/items", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <h2 className="items-header">Open Deals</h2>
      <div className="items-container">
        {items.map((item) => (
          <div className="item-card" key={item.id}>
            <img src={item.imageURL} alt={item.name} className="item-image" />
            <div className="item-info">
              <h3>{item.name}</h3>
              <div className="item-info-column">
                <p>{Number(item.price).toFixed(2)} Dhs</p>
              </div>
              <div className="item-info-column">
                <p>Yield {Number(item.yield).toFixed(2)}%</p>
              </div>
              <div className="item-info-column">
                <p>Sold {Number(item.soldPercentage).toFixed(2)}%</p>
              </div>
              <div className="item-info-column">
                <p>Ticket - {item.ticket} Dhs</p>
              </div>
              <div className="item-info-column">
                <p>Days left {item.daysLeft}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Towers;

import { useEffect, useState } from "react";
import axios from "axios";
import "./Towers.css";
import { backendBaseURL } from "../config";

const Towers = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${backendBaseURL}api/items`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setItems(response.data);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          setError("You are not authorized to access this page. Please login.");
        } else {
          setError("Error fetching items. Please try again later.");
        }
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <h2 className="items-header">Open Deals</h2>
      <div className="items-container">
        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          items.map((item) => (
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
          ))
        )}
      </div>
    </>
  );
};

export default Towers;

import React, { useEffect, useState } from "react";

 export default function ChicVibe() {
    const [chic, setChic] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/restaurants/chic")
        .then((response) => response.json())
        .then((data) => setChic(data))
        .catch(alert);
    }, []);
    return (
      <div>
        {!chic ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            <ul>
              {chic.map((restaurant) => {
                return (
                  <>
                    <h2 key={restaurant.id}>{restaurant.name}</h2>
                  </>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
  
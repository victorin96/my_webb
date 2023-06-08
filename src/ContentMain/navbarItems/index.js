import React, { useEffect, useState } from "react";

const TypedNavbarItemsComponent = () => {
  const [typedItems, setTypedItems] = useState([]);
  const items = ["INICIO", "SOBRE MI", "PORTAFOLIO", "CONTACTO"];
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let allLettersTyped = true;

      const updatedItems = items.map((item) => {
        if (currentLetterIndex < item.length) {
          allLettersTyped = false;
          return item.substring(0, currentLetterIndex + 1);
        }
        return item;
      });

      if (!allLettersTyped) {
        setCurrentLetterIndex(currentLetterIndex + 1);
      } else {
        clearTimeout(timeout);
      }

      setTypedItems(updatedItems);
    }, 280); // Delay entre cada letra (ajusta según tus preferencias)

    return () => clearTimeout(timeout);
  }, [currentLetterIndex, items]);

  return (
    <div>
      {typedItems.map((item, index) => (
        <div key={index} className="navbar">
          {item}
        </div>
      ))}
    </div>
  );
};

export default TypedNavbarItemsComponent;

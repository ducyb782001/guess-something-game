import { useEffect, useState } from "react";

export const useReviewCollection = () => {
  const [listPlayedItems, setListPlayedItems] = useState([]);

  const getListPlayed = () => {
    const listItemPlayed = localStorage.getItem("listItemPlayed");
    if (listItemPlayed) {
      setListPlayedItems(JSON.parse(listItemPlayed));
    }
  };
  const clearListPlayed = () => {
    localStorage.setItem("listItemPlayed", JSON.stringify([]));
    window.dispatchEvent(new Event("changeListItemed"));
  };

  useEffect(() => {
    getListPlayed();
  }, []);

  useEffect(() => {
    window.addEventListener("changeListItemed", getListPlayed);
    return () => window.removeEventListener("changeListItemed", getListPlayed);
  }, []);

  const addToListPlayed = (newList) => {
    localStorage.setItem("listItemPlayed", JSON.stringify(newList));
    window.dispatchEvent(new Event("changeListItemed"));
  };

  return {
    listPlayedItems,
    addToListPlayed,
    clearListPlayed,
  };
};

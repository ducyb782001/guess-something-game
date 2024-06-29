import React, { useState } from "react";
import FirstCollectionReview from "./FirstCollectionReview";
import { useParams } from "react-router-dom";
import SecondCollectionStep from "./SecondCollectionStep";
import LIST_ALL_COLLECTION from "../../constants/LIST_ALL_COLLECTIONS.json";
import ThirdSumUp from "./ThirdSumUp";

function CollectionDetail() {
  const { id } = useParams();
  const [collectionStep, setCollectionStep] = useState(1);
  const [count, setCount] = useState(0);
  const selectedCollection = LIST_ALL_COLLECTION.find((item) => item.id === id);
  const [currentList, setCurrentList] = useState([]);

  return (
    <div>
      {collectionStep === 1 && (
        <FirstCollectionReview
          collectionStep={collectionStep}
          setCollectionStep={setCollectionStep}
          setCount={setCount}
          selectedCollection={selectedCollection}
        />
      )}
      {collectionStep === 2 && (
        <SecondCollectionStep
          collectionStep={collectionStep}
          setCollectionStep={setCollectionStep}
          setCount={setCount}
          count={count}
          selectedCollection={selectedCollection}
          currentList={currentList}
          setCurrentList={setCurrentList}
        />
      )}
      {collectionStep === 3 && (
        <ThirdSumUp
          collectionStep={collectionStep}
          setCollectionStep={setCollectionStep}
          selectedCollection={selectedCollection}
          currentList={currentList}
          setCurrentList={setCurrentList}
        />
      )}
    </div>
  );
}

export default CollectionDetail;

import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { getRandomBaseOnCurrentItem, getRandomItem } from "../../lib/random";
import { useReviewCollection } from "../../hooks/useReviewCollection";
import { playApproveSound, playSkipSound } from "../../utils/playSound";
import { COUNT_DOUNT_PER_GAME } from "../../constants/constant";

function SecondCollectionStep(props) {
  const {
    setCollectionStep,
    count,
    setCount,
    selectedCollection,
    currentList,
    setCurrentList,
  } = props;
  const [gameCountDown, setGameCountDown] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const { listPlayedItems, addToListPlayed, clearListPlayed } =
    useReviewCollection();

  useEffect(() => {
    if (selectedCollection?.items) {
      setCurrentCard(getRandomItem(selectedCollection.items));
    }
  }, [selectedCollection]);

  useEffect(() => {
    let timer;
    if (count > 0) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    } else if (count === 0 && gameCountDown === null) {
      setGameCountDown(COUNT_DOUNT_PER_GAME);
    }
    return () => clearInterval(timer);
  }, [count]);

  useEffect(() => {
    let gameTimer;
    if (gameCountDown > 0) {
      gameTimer = setInterval(() => {
        setGameCountDown((prevCount) => prevCount - 1);
      }, 1000);
    } else if (gameCountDown === 0) {
      setCollectionStep(3);
    }
    return () => clearInterval(gameTimer);
  }, [gameCountDown]);

  useEffect(() => {
    console.log("CURRENT LIST after: ", currentList);
    if (currentList?.length > 0) {
      const randomItem = getRandomBaseOnCurrentItem(selectedCollection?.items);

      if (randomItem) {
        setCurrentCard(randomItem);
      }
    }
  }, [currentList]);

  const handleClickApprove = () => {
    playApproveSound();
    const savedCard = {
      ...currentCard,
      answer: 1,
    };
    setCurrentList((prevList) => {
      const updatedList = [...prevList, savedCard];
      return updatedList;
    });
  };

  const handleClickDeny = () => {
    playSkipSound();
    const savedCard = {
      ...currentCard,
      answer: 0,
    };
    setCurrentList((prevList) => {
      const updatedList = [...prevList, savedCard];
      return updatedList;
    });
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-between w-full overflow-hidden bg-[#0386ff]">
      <div className="flex items-center justify-between px-4 pt-7">
        <div
          className="w-[32px] h-[32px] rounded-full cursor-pointer flex justify-center items-center"
          onClick={() => {
            setCollectionStep(1);
          }}
        >
          <FontAwesomeIcon icon={faCircleXmark} size="2x" color="#ffffff" />
        </div>
        {gameCountDown ? (
          <div className="text-3xl font-bold text-[#f9b805]">
            {gameCountDown}
          </div>
        ) : (
          <div />
        )}
        <div />
      </div>
      {count ? (
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-extrabold text-center text-white text-9xl">
            {count}
          </h1>
        </div>
      ) : (
        <CardItem
          currentCard={currentCard}
          handleClickApprove={handleClickApprove}
          handleClickDeny={handleClickDeny}
        />
      )}
    </div>
  );
}

export default SecondCollectionStep;

function CardItem({ currentCard, handleClickApprove, handleClickDeny }) {
  return (
    <>
      <div className="flex items-center w-full h-full gap-3 mt-5">
        <div
          onClick={handleClickApprove}
          className="w-full h-full bg-[#3DBB6550] flex justify-center items-center flex-col"
        >
          <FontAwesomeIcon icon={faCircleCheck} size="4x" color="#ffffff40" />
        </div>
        <div
          onClick={handleClickDeny}
          className="w-full h-full bg-[#DC354550] flex justify-center items-center flex-col"
        >
          <FontAwesomeIcon icon={faCircleXmark} size="4x" color="#ffffff40" />
        </div>
      </div>
      <div className="w-full px-5 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-3 pointer-events-none">
        {currentCard?.image && (
          <img src={currentCard?.image} alt="" className="w-28 h-28" />
        )}
        <div className="text-5xl font-extrabold text-center text-white">
          {currentCard?.title}
        </div>
      </div>
    </>
  );
}

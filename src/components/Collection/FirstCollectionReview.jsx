import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { playCountDownSound } from "../../utils/playSound";
import { COUNT_DOUNT_START_GAME } from "../../constants/constant";

function FirstCollectionReview(props) {
  const { setCollectionStep, setCount, selectedCollection } = props;
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-between w-full overflow-hidden bg-[#0386ff]">
      <div className="flex items-center justify-between px-4 pt-7">
        <div
          className="bg-[#00000060] w-[32px] h-[32px] rounded-full cursor-pointer flex justify-center items-center"
          onClick={() => {
            navigate(-1);
          }}
        >
          <FontAwesomeIcon icon={faAngleLeft} size="xl" color="#ffffff" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full gap-2 px-7">
        <img
          src={selectedCollection?.image || "/images/cartoon.png"}
          alt=""
          className="w-28 h-28"
        />
        <div className="text-xl font-bold text-white">
          {selectedCollection?.title}
        </div>
        <div className="text-sm font-bold text-white">
          {selectedCollection?.description || "Cùng chơi thật vui nào"}
        </div>
      </div>
      <div
        onClick={() => {
          playCountDownSound();
          setCollectionStep(2);
          setCount(COUNT_DOUNT_START_GAME);
        }}
        className="flex items-center justify-center py-3 m-4 bg-white cursor-pointer rounded-2xl text-[#FE3A7F] text-lg font-bold shadow-[rgba(0,0,15,0.5)_2px_3px_4px_0px]"
      >
        Chơi
      </div>
    </div>
  );
}

export default FirstCollectionReview;

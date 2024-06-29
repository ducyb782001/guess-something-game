import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { playClickSound } from "../../utils/playSound";
import { useNavigate } from "react-router-dom";
import AudioBackground from "../common/AudioBackground";

function ThirdSumUp(props) {
  const { setCollectionStep, selectedCollection, currentList, setCurrentList } =
    props;

  const navigate = useNavigate();
  const points = currentList?.filter((item) => item.answer === 1)?.length;
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col gap-4 w-full overflow-hidden bg-[#0386ff]">
      <div className="flex items-center justify-between px-4 pt-7">
        <div
          className="w-[32px] h-[32px] rounded-full cursor-pointer flex justify-center items-center"
          onClick={() => {
            setCollectionStep(1);
            setCurrentList([]);
            playClickSound();
          }}
        >
          <FontAwesomeIcon icon={faCircleXmark} size="2x" color="#ffffff" />
        </div>
        <div className="text-xl font-bold text-white">Bạn đã ghi điểm</div>
        <div />
      </div>
      <div className="relative px-4">
        <div className="flex justify-items-center items-center w-[70px] h-[70px] rounded-full border-[3px] border-yellow-600 text-4xl font-bold absolute top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-primaryBlue via-[#4a19ff] to-[#6f0dbb]">
          <div className="w-full text-center text-white">{points || "-"}</div>
        </div>
        <div
          className="border-[3px] border-yellow-600 mt-10 rounded-xl bg-[#1f1c8a] pt-10 text-center flex flex-col gap-2 overflow-auto px-3"
          style={{ height: `calc(100vh - 220px)` }}
        >
          <div className="text-sm font-semibold text-yellow-600">Đoán từ</div>
          {currentList?.map((item) => (
            <WordSummarize key={item?.id} item={item} />
          ))}
        </div>
        <div
          onClick={() => {
            navigate("/");
          }}
          className="flex items-center justify-center py-3 m-4 bg-white cursor-pointer rounded-2xl text-[#FE3A7F] text-lg font-bold shadow-[rgba(0,0,15,0.5)_2px_3px_4px_0px]"
        >
          Về trang chủ
        </div>
      </div>
      <AudioBackground />
    </div>
  );
}

export default ThirdSumUp;

function WordSummarize({ item }) {
  return (
    <div
      className={`${
        item?.answer === 1 ? "text-white" : "text-gray-500"
      } font-semibold text-center text-lg`}
    >
      {item?.title}
    </div>
  );
}

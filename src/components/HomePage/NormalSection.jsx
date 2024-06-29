import React from "react";
import Title from "../common/Title";
import PreviewCard from "../Card/PreviewCard";
import LIST_SPECIAL_DATA from "../../constants/LIST_SPECIAL_COLLECTIONS.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function NormalSection() {
  return (
    <div className="px-3 py-5 bg-[#eff0ff]">
      <Title className="!text-black">Danh mục chơi</Title>
      <div className="grid items-center grid-cols-3 gap-2 mt-5">
        {LIST_SPECIAL_DATA?.map((item) => (
          <PreviewCard data={item} key={item?.id} />
        ))}
      </div>
      {false && (
        <div className="mt-5">
          <Title className="!text-black">Bộ sưu tập riêng</Title>
          <div className="grid items-center grid-cols-3 gap-2 mt-5">
            {LIST_SPECIAL_DATA?.map((item) => (
              <PreviewCard data={item} key={item?.id} />
            ))}
          </div>
        </div>
      )}
      <div className="p-4 mt-5 flex items-center gap-5 border-[3px] border-[#f9b805] rounded-2xl bg-gradient-to-b from-primaryBlue via-[#4a19ff] to-[#6f0dbb]">
        <FontAwesomeIcon icon={faPlus} color="#ffffff" size="xl" />
        <Title className="!text-white !text-base">Tạo bộ sưu tập riêng</Title>
      </div>
    </div>
  );
}

export default NormalSection;

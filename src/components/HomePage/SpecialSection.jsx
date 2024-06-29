import React from "react";
import Title from "../common/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import BigTitle from "../common/BigTitle";
import SmallDescription from "../common/SmallDescription";
import PreviewCard from "../Card/PreviewCard";
import LIST_SPECIAL_DATA from "../../constants/LIST_SPECIAL_COLLECTIONS.json";

function SpecialSection() {
  return (
    <div className="px-3 py-5 text-white bg-primaryBlue">
      <div className="flex items-center justify-center gap-5">
        <FontAwesomeIcon icon={faStar} color="#ffffff" size="sm" />
        <Title>Gói đặc biệt</Title>
        <FontAwesomeIcon icon={faStar} color="#ffffff" size="sm" />
      </div>
      <div className="mt-5 border-2 border-[#c6ba54] rounded-xl p-3 bg-gradient-to-b from-primaryBlue to-[#BC22D3]">
        <BigTitle>Niềm vui bất tận</BigTitle>
        <SmallDescription className="mt-3">Hãy tận hưởng nhé</SmallDescription>
        <div className="grid items-center grid-cols-3 gap-2 mt-5">
          {LIST_SPECIAL_DATA?.map((item) => (
            <PreviewCard data={item} key={item?.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpecialSection;

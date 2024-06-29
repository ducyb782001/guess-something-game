import React from "react";
import SmallDescription from "../common/SmallDescription";
import { Link } from "react-router-dom";
import { playClickSound } from "../../utils/playSound";

function PreviewCard({ data }) {
  return (
    <Link
      to={`/bo-suu-tap/${data?.id}`}
      className={`border border-[#7c90ff] w-full rounded-[10px] aspect-square p-2 flex flex-col items-center h-full`}
      style={{
        backgroundColor: data?.bgColor,
      }}
      onClick={playClickSound}
    >
      <img src={data?.image} alt="" className="aspect-square w-[70%]" />
      <SmallDescription className="mt-1 !font-light !text-sm text-center">
        {data?.title}
      </SmallDescription>
    </Link>
  );
}

export default PreviewCard;

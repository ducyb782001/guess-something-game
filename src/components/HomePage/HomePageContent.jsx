import React from "react";
import SpecialSection from "./SpecialSection";
import NormalSection from "./NormalSection";
import AudioBackground from "../common/AudioBackground";

function HomePageContent() {
  return (
    <div>
      <AudioBackground />
      <SpecialSection />
      <NormalSection />
    </div>
  );
}

export default HomePageContent;

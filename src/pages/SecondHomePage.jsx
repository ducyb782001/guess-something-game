import { CloseCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SecondHomePage() {
  const navigation = useNavigate();
  const location = useLocation();
  const handleClosePopup = () => {
    const isMobile = window.innerWidth <= 768;
    const searchParams = new URLSearchParams(location.search);
    const redirectLink = searchParams.get("redirectLink");

    if (isMobile) {
      const newUrl = `${redirectLink}?txHash=123`;
      window.location.href = newUrl;
      console.log("🚀 ~ handleClosePopup ~ newUrl:", newUrl);
    } else {
      window.close();
    }
  };

  return (
    <div className="flex flex-col gap-3 p-5">
      <h1>This is page 2</h1>
      <Button
        onClick={handleClosePopup}
        type="primary"
        size={"large"}
        className="bg-blue-500"
        icon={<CloseCircleOutlined />}
      >
        Done popup
      </Button>
    </div>
  );
}

export default SecondHomePage;

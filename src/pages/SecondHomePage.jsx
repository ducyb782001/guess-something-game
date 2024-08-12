import { CloseCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

function SecondHomePage() {
  const handleClosePopup = () => {
    window.close();
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

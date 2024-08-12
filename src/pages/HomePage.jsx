import { ExportOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

function HomePage() {
  const handleOpenPopup = () => {
    const url = "/test-second";
    const width = 600;
    const height = 400;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    window.open(
      url,
      "_blank",
      `toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=${width},height=${height},top=${top},left=${left}`
    );
  };

  return (
    <div className="flex flex-col gap-3 p-5">
      <h1>This is page 1</h1>
      <Button
        onClick={handleOpenPopup}
        type="primary"
        icon={<ExportOutlined />}
        size={"large"}
        className="bg-blue-500"
      >
        Open popup
      </Button>
    </div>
  );
}

export default HomePage;

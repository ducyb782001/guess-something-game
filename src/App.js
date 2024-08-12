import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { routes } from "./routes";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;

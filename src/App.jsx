import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Chat from "./components/Chat";
import History from "./components/History";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </div>
  );
}

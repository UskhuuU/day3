import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Chats } from "./components/Chats";

export default function App() {
  return <Chats />;
}

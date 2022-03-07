import { Route, Routes } from "react-router-dom";
import "./App.css";
import Comments from "./component/pages/Comments";
import Posts from "./component/pages/Posts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/:comments" element={<Comments />} />
    </Routes>
  );
}

export default App;

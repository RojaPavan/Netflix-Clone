import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import UserLiked from "./pages/UserLiked";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="player" element={<Player />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<TvShows />} />
        <Route path="/mylist" element={<UserLiked />} />
        <Route path="/" element={<Netflix />} />
      </Routes>
    </Router>
  );
}

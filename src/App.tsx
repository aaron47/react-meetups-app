import { Route, Routes } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetups from "./pages/NewMeetups";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/new-meetup" element={<NewMeetups />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </Layout>
  );
}

export default App;

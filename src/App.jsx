import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout/Layout";
import HomePage from "./pages/Homepage/HomePage";
import LeadershipPage from "./pages/LeadershipPage/LeadershipPage";
import TracksPage from "./pages/TracksPage/TracksPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/tracks" element={<TracksPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

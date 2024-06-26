import Home from "./pages/Home";
import "./App.css";

import BookingConfirmation from "./pages/BookingConfirmation";
import ReservationPage from "./pages/ReservationPage";
import PersonalDetail from "./pages/PersonalDetail";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route
          path="/reservation/personalDetail"
          element={<PersonalDetail />}
        />
        <Route
          path="/reservation/confirmation"
          element={<BookingConfirmation />}
        />
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
      </Routes>
    </div>
  );
}

export default App;

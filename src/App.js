import { AppRoot } from "@vkontakte/vkui";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Events from "./pages/Events/";
import Profile from "./pages/Profile/";
import Calendar from "./pages/Calendar/";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <AppRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Events/>} />
            <Route path="profile" element={<Profile />} />
            <Route path="calendar" element={<Calendar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppRoot>
  );
};

export default App;

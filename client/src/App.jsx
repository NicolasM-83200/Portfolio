import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AuthProvider from "./provider/authProvider";
import SignIn from "./pages/SignIn";
import AddProject from "./pages/AddProject";
import Modal from "./components/Modal";
import { APP_ROUTES } from "./utils/constants";
import UpdateProject from "./pages/UpdateProject";
import NoMatch from "./pages/NoMatch";

const App = () => {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  return (
    <AuthProvider>
      <Routes location={previousLocation || location}>
        <Route index element={<Home />} />
        <Route path={APP_ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={APP_ROUTES.ADD_PROJECT} element={<AddProject />} />
        <Route path={APP_ROUTES.UPDATE_PROJECT} element={<UpdateProject />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>

      {previousLocation && (
        <Routes>
          <Route path="/modal/:id" element={<Modal />} />
        </Routes>
      )}
    </AuthProvider>
  );
};

export default App;

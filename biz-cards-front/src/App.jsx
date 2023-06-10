import "react-toastify/dist/ReactToastify.css";
import "./css/App.css";
import "./css/lightDark.css";
import "./css/googleMaps.css";
import "./css/cards.css";

import { Footer } from "./components/footer/footer";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Route, Routes } from "react-router-dom";
import { SignUp } from "./components/signUpInOut/signup";
import { SignIn } from "./components/signUpInOut/signin";
import { SignOut } from "./components/signUpInOut/signout";

import { MyCards } from "./components/cards/cards";
import { ProtectedRoute } from "./components/common/protectedRoute";
import { ToastContainer, Zoom } from "react-toastify";

import { CardCreate } from "./components/cards/cardCreate";
import { CardDelete } from "./components/cards/cardDelete";
import { CardEdit } from "./components/cards/cardEdit";
import { CardFullView } from "./components/cards/cardFullView";
import { Header } from "./components/header/header";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Zoom}
      />

      <Header />

      <div id="main" className="flex-fill d-flex flex-column mt-5">
        <div id="mainOverlap" className="p-2 flex-fill flex-column d-flex">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route
              path="my-cards"
              element={
                <ProtectedRoute onlyBiz>
                  <MyCards />
                </ProtectedRoute>
              }
            />

            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn redirect="/" />} />
            <Route path="sign-out" element={<SignOut redirect="/" />} />
            <Route
              path="create-card"
              element={
                <ProtectedRoute onlyBiz>
                  <CardCreate redirect="/my-cards" />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-cards/delete/:id"
              element={
                <ProtectedRoute onlyBiz>
                  <CardDelete />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-cards/edit/:id"
              element={
                <ProtectedRoute onlyBiz>
                  <CardEdit redirect="/my-cards" />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-cards/view/:id"
              element={
                <ProtectedRoute onlyBiz>
                  <CardFullView />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

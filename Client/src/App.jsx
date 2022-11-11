import React, { useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

// Components
import Login from "./Components/Register/Login/Login";
import SignUp from "./Components/Register/SignUp/Signup";
import Account from "./Components/Register/SignUp/Component/Accounts/Account";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/SuperAdmin/Dash_Render";

// APIs :
import { toast, ToastContainer } from "react-toastify";
import { getUserDataAPI } from "./API/register";
import { useDispatch } from "react-redux";
import { addUser } from "./GlobalStore/actions/userAction"

// CSS :
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const App = () => {
  let dispatch = useDispatch()

  let user = localStorage.getItem("token");

  const gettingProfileData = async () => {
    let res = await getUserDataAPI()
    if (res.error) {
      // toast.error(res.error, {
      //   position: "top-right",
      //   autoClose: 4000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    } else {
      dispatch(addUser(res.data.data))
    }
  }
  useEffect(() => {
    gettingProfileData()
  }, [])

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute user={user}>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route
          path="dashboard/*"
          element={
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;

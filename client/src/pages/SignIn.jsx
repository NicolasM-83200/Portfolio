import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../provider/authProvider";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState({
    error: false,
    message: "",
  });

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3200/api/auth/login",
        data: {
          email,
          password,
        },
      });
      console.log(response.data);
      if (!response?.data?.token) {
        setNotification({ error: true, message: "Une erreur est survenue" });
        console.log("Something went wrong during sign in", response);
      } else {
        setToken(response.data.token);
        localStorage.setItem("userId", response.data.userId);
        navigate("/#projects");
      }
    } catch (error) {
      console.log(error);
      setNotification({ error: true, message: error.response.data.error });
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3200/api/auth/signup",
        data: {
          email,
          password,
        },
      });
      if (!response?.data) {
        console.log("Something went wrong during sign up", response);
        return;
      }
      setNotification({
        error: false,
        message: "Votre compte a bien été créé, vous pouvez vous connecter",
      });
    } catch (error) {
      setNotification({
        error: true,
        message: error.response.data.error,
      });
      console.log(error);
    }
  };
  const errorClass = notification.error
    ? "text-red-500 bg-red-200 border-2 border-red-500 rounded-md"
    : "text-orange-500 bg-orange-200 border-2 border-orange-500 rounded-md";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-5 text-4xl">Connexion</h1>
      <div className=" w-2/5 rounded-2xl bg-quaternary p-6">
        <form className=" flex h-full flex-col justify-around">
          <div className="mb-5 text-center">
            {notification.message.length > 0 && (
              <p className={`${errorClass} mb-0 px-1`}>
                {notification.message}
              </p>
            )}
          </div>
          <div className="mb-5 flex flex-col">
            <label htmlFor="email" className="hidden"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              className="peer rounded-md border border-gray px-2 py-1 text-black invalid:border-red-500 invalid:text-red-500 focus:border-terciary focus:outline-none focus:ring-1 focus:ring-terciary focus:invalid:border-red-500 focus:invalid:ring-red-500"
              pattern="^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$"
            />
            <span className="hidden text-sm text-red-500 peer-invalid:block">
              Vous devez entrer un email valid !
            </span>
          </div>
          <div className="mb-5 flex flex-col">
            <label htmlFor="password" className="hidden"></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Votre mot de passe"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              className="peer rounded-md border border-gray px-2 py-1 text-black invalid:border-red-500 invalid:text-red-500 focus:border-terciary focus:outline-none focus:ring-1 focus:ring-terciary focus:invalid:border-red-500 focus:invalid:ring-red-500"
              pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            />
            <span className="hidden text-sm text-red-500 peer-invalid:block">
              Le mot de passe doit contenir au moins 8 caractères, une
              majuscule, un chiffre et un symbole.
            </span>
          </div>
          <div className="flex justify-around">
            <button
              type="submit"
              onClick={handleSignIn}
              className="hover:text-slate-950 mx-auto w-2/5 rounded bg-primary px-3 py-1 text-xl text-white transition-all duration-300 hover:bg-primary/70"
            >
              Se connecter
            </button>
            <button
              type="submit"
              onClick={handleSignUp}
              className="hover:text-slate-950 mx-auto hidden w-2/5 rounded bg-primary px-3 py-1 text-xl text-white transition-all duration-300 hover:bg-primary/70"
            >
              S'inscrire
            </button>
          </div>
        </form>
      </div>
      <Link to="/" className="mt-5">
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default SignIn;

import React, { useState } from "react";

const FormContact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form className="flex h-full w-full flex-col justify-around rounded-xl bg-quaternary p-6 sm:w-3/5">
      <div className="mb-5 flex flex-col">
        <label htmlFor="email">
          <input
            type="email"
            id="emailContact"
            name="email"
            placeholder="Votre email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            className="peer w-full rounded-md border border-gray px-2 py-1 text-black invalid:border-red-500 invalid:text-red-500 focus:border-terciary focus:outline-none focus:ring-1 focus:ring-terciary focus:invalid:border-red-500 focus:invalid:ring-red-500"
            pattern="^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$"
          />
          <span className="hidden text-sm text-red-500 peer-invalid:block">
            Vous devez entrer un email valid !
          </span>
        </label>
      </div>
      <div className="mb-5 flex flex-col">
        <label htmlFor="message">
          <textarea
            id="message"
            name="message"
            placeholder="Votre message"
            autoComplete="off"
            onChange={(e) => setMessage(e.target.value)}
            className="peer w-full rounded-md border border-gray px-2 py-1 text-black invalid:border-red-500 invalid:text-red-500 focus:border-terciary focus:outline-none focus:ring-1 focus:ring-terciary focus:invalid:border-red-500 focus:invalid:ring-red-500"
          />
        </label>
      </div>
      <div className="flex w-full justify-around">
        <button
          type="submit"
          className="hover:text-slate-950 mx-auto w-2/5 rounded bg-primary px-3 py-1 text-xl text-white transition-all duration-300 hover:bg-primary/70"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default FormContact;

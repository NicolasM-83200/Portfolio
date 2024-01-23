import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const FormContact = () => {
  const form = useRef(null);
  const [notif, setNotif] = useState({ error: false, message: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p61h8vk",
        "template_98qdy2m",
        form.current,
        "UAExXDmOT69yE6Yy5",
      )
      .then(
        (result) => {
          console.log(result.text);
          setNotif({
            error: false,
            message: "Merci! Votre message a bien été envoyé.",
          });
          form.current.reset();
          setTimeout(() => {
            setNotif({ error: false, message: "" });
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setNotif({
            error: true,
            message:
              "Désolé, une erreur s'est produite, veuillez réessayer plus tard.",
          });
          setTimeout(() => {
            setNotif({ error: false, message: "" });
          }, 3000);
        },
      );
  };

  const errorClass = notif.error
    ? "text-red-500 bg-red-200 border-2 border-red-500 rounded-md"
    : "text-orange-500 bg-orange-200 border-2 border-orange-500 rounded-md";

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex h-full w-full flex-col justify-around rounded-xl bg-quaternary p-6"
    >
      <div className="mb-5 text-center">
        {notif.message.length > 0 && (
          <p className={`${errorClass} mb-0 px-1`}>{notif.message}</p>
        )}
      </div>
      <div className="mb-5 flex flex-col">
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Votre nom"
            autoComplete="off"
            required
            className="peer w-full rounded-md border border-gray px-2 py-1 text-black focus:border-terciary focus:outline-none focus:ring-1 focus:ring-terciary "
          />
        </label>
      </div>
      <div className="mb-5 flex flex-col">
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Votre email"
            autoComplete="off"
            required
            className="w-full rounded-md border border-gray px-2 py-1 text-black focus:border-terciary focus:outline-none focus:ring-1 focus:ring-terciary"
            // className="peer w-full rounded-md border border-gray px-2 py-1 text-black invalid:border-red-500 invalid:text-red-500 focus:border-terciary focus:outline-none focus:ring-1 focus:ring-terciary focus:invalid:border-red-500 focus:invalid:ring-red-500"
            // pattern="^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$"
          />
          {/* <span className="hidden text-sm text-red-500 peer-invalid:block">
            Vous devez entrer un email valide !
          </span> */}
        </label>
      </div>
      <div className="mb-5 flex flex-col">
        <label htmlFor="message">
          <textarea
            name="message"
            placeholder="Votre message"
            autoComplete="off"
            rows={5}
            required
            className="peer w-full rounded-md border border-gray px-2 py-1 text-black  focus:border-terciary focus:outline-none focus:ring-1 focus:ring-terciary "
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

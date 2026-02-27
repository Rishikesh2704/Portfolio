"use client";
import { useState } from "react";

export default function page() {
  const [name, SetName] = useState<string>("");
  const [email, SetEmail] = useState<string>("");
  const [Message, SetMessage] = useState<string>("");
  const handleSubmit = (e) => {
    console.log();
  };
  return (
    <section className="text-white h-[90vh] w-screen flex items-center justify-center">
      <form
        onSubmit={(e) => handleSubmit}
        className="h-[80%] w-[40%] flex flex-col justify-around items-center  bg-[rgba(0, 0, 0, 0.1)] backdrop-blur-2xl rounded-lg border-1 border-gray-300"
      >
        <div className="w-[90%] h-fit flex flex-col items-start">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            onChange={(e) => SetName(e.target.value)}
            className="w-full border-1 border-gray-400 rounded-md p-[0.3rem_0.4rem]"
          />
        </div>

        <div className="w-[90%] h-fit flex flex-col items-start">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            onChange={(e) => SetEmail(e.target.value)}
            className="w-full border-1 border-gray-400 rounded-md p-[0.3rem_0.4rem]"
          />
        </div>

        <textarea
          onChange={(e) => SetMessage(e.target.value)}
          placeholder="Your Message"
          className="h-[50%] w-[90%]  border-1 border-gray-400 rounded-md p-[0.3rem_0.4rem]"
        ></textarea>
        <button
          type="submit"
          className="SendMsgBtn w-[80%] h-[10%] rounded-md "
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

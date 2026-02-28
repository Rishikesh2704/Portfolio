"use client";
import { useState } from "react";

export default function page() {
  const [name, SetName] = useState<string>("");
  const [email, SetEmail] = useState<string>("");
  const [Message, SetMessage] = useState<string>("");
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    console.log();
  };
  return (
    <section className="text-white h-[90vh] w-screen flex items-center justify-center">
      <form
        onSubmit={(e) => handleSubmit}
        className="h-[80%] w-[40%] ContactCont flex flex-col justify-around items-center  bg-[rgba(0, 0, 0, 0.1)] backdrop-blur-2xl rounded-lg border-1 border-gray-300"
      >
        <div className="w-[90%] h-fit  flex flex-col items-start">
          <label htmlFor="Name" className="text-md font-semibold text-gray-100">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            onChange={(e) => SetName(e.target.value)}
            className="ContactCont w-full rounded-md p-[0.3rem_0.4rem]"
          />
        </div>

        <div className="w-[90%] h-fit flex flex-col items-start">
          <label
            htmlFor="email"
            className="text-md font-semibold text-gray-100"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            onChange={(e) => SetEmail(e.target.value)}
            className="ContactCont w-full rounded-md p-[0.3rem_0.4rem]"
          />
        </div>

        <textarea
          onChange={(e) => SetMessage(e.target.value)}
          placeholder="Your Message"
          className="ContactCont h-[50%] w-[90%] rounded-md p-[0.3rem_0.4rem]"
        ></textarea>
        <button type="submit" className="Btns w-[80%] h-[10%] rounded-md ">
          Send Message
        </button>
      </form>
    </section>
  );
}

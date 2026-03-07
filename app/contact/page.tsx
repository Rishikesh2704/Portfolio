"use client";
import { useRef, useState } from "react";

export default function page() {
  const [contactState, setContactState] = useState("Send Message");
  const submitRef = useRef<HTMLButtonElement>(null);

  const onSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "6b609abf-f041-4f73-97e3-42256957a038");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      submitRef.current?.style.setProperty(
        "--MessageBtnBG",
        "rgb(37, 242, 81)",
      );
      setContactState("Message Sent");
      setTimeout(() => {
        submitRef.current?.style.setProperty(
          "--MessageBtnBG",
          "linear-gradient(145deg, #ae29f1, #610290 90%)",
        );
        setContactState("Send Message");
      }, 1500);
    }
  };

  return (
    <section className="text-white h-[90vh] w-screen flex items-center justify-center">
      <form
        onSubmit={(e) => onSubmit(e)}
        className="ContactCont animate-[BottomAnimation_0.3s_ease-in] h-[80%] w-[40%] max-lg:h-[50vmax] max-lg:w-[40vmax]   flex flex-col justify-around items-center  bg-[rgba(0, 0, 0, 0.1)] backdrop-blur-2xl rounded-lg border-1 border-gray-300"
      >
        <div className="w-[90%] h-fit  flex flex-col items-start">
          <label htmlFor="Name" className="text-md font-semibold text-gray-100">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="Name"
            placeholder="Your name"
            required
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
            name="Email"
            placeholder="Your email"
            required
            className="ContactCont w-full rounded-md p-[0.3rem_0.4rem]"
          />
        </div>

        <textarea
          placeholder="Your Message"
          name="Message"
          required
          className="ContactCont h-[50%] w-[90%] rounded-md p-[0.3rem_0.4rem]"
        ></textarea>

        <button
          ref={submitRef}
          type="submit"
          className="Btns w-[80%] h-[10%] rounded-md cursor-pointer"
        >
          {contactState}
        </button>
      </form>
    </section>
  );
}

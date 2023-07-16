"use client";
import React, { useState } from "react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_FORM_ACCESS_KEY,
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 2000);
      setIsError(false);
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 2000);
    }
  };

  return (
    <section id="contact">
      <div className="w-full h-[75vh] p-4 py-16">
        <div className="w-full h-full max-w-3xl m-auto p-4">
          <h2 className="pb-4">Contact</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="p-2 mb-2 rounded-md shadow-sm dark:bg-[#7d757e] bg-[#cfcab5e1] dark:placeholder-[#e6e0c89c] placeholder-[#94948E] outline-[#BC8848] dark:outline-[#E6E0C8]"
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="email@example.com"
              className="p-2 mb-2  rounded-md shadow-sm dark:bg-[#7d757e] bg-[#cfcab5e1] dark:placeholder-[#e6e0c89c] placeholder-[#94948E] outline-[#BC8848] dark:outline-[#E6E0C8]"
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter Message"
              className="p-2 mb-4 rounded-md shadow-sm dark:bg-[#7d757e] bg-[#cfcab5e1] dark:placeholder-[#e6e0c89c] placeholder-[#94948E] outline-[#BC8848] dark:outline-[#E6E0C8]"
            ></textarea>

            <button
              type="submit"
              className={`rounded-md p-2 shadow-md ${
                isSubmitted
                  ? "bg-green-900 text-[#E6E0C8]"
                  : isError
                  ? "bg-red-900 text-[#E6E0C8]"
                  : "dark:bg-[#645D65] bg-[#dba96b]"
              }`}
            >
              {isSubmitted
                ? "Message Sent!"
                : isError
                ? "Couldn't Send Message"
                : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

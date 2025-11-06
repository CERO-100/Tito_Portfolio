"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Page() {
  const [state, handleSubmit] = useForm("xqagrlqa");

  if (state.succeeded) {
    return (
      <section className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="text-3xl font-bold text-center text-green-400">
          ✅ Message Sent Successfully!
        </h2>
        <p className="text-center text-zinc-300 mt-4">
          Thank you for reaching out. I will get back to you soon.
        </p>
      </section>
    );
  }

  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-zinc-200">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email" // IMPORTANT
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
              focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@example.com"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject" // IMPORTANT
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300
              focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
              dark:placeholder-gray-400 dark:text-white"
              placeholder="Let me know how I can help you"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message" // IMPORTANT
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm
              border border-gray-300 focus:ring-primary-500 focus:border-primary-500
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Leave a message..."
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg
            bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none
            focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Page;

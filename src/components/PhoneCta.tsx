"use client";
import React, { useState } from "react";
import { Container } from "@/components/Container";

export const PhoneCta = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <Container>
      <section id="phone-cta" className="mx-auto w-full">
        <div className="bg-indigo-600 dark:bg-trueGray-900 md:flex p-8 py-10 rounded-lg">
          <div className="min-w-0 flex-1 md:mb-0 mb-4">
            <label htmlFor="hero-phone" className="sr-only">
              Whatsapp Number
            </label>
            <input
              id="hero-phone"
              type="tel"
              className="block w-full rounded-md border border-gray-300 px-5 py-4 text-base text-gray-900 dark:text-white placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 md:rounded-r-none"
              placeholder="Enter Your Mobile Number"
              value={phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="button"
            className="hover:bg-gray-200 bg-white text-black hover:text-indigo-600 dark:hover:text-indigo-600 font-bold px-3 py-4 rounded-lg md:rounded-l-none border border-gray-300"
          >
            Send Offers
          </button>
        </div>
      </section>
    </Container>
  );
};

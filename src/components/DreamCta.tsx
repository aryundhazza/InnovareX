import React from "react";
import { Container } from "./Container";

export const DreamCTA = () => {
  return (
    <Container>
      <section
        id="dream-cta"
        className="mx-auto max-w-md sm:max-w-3xl lg:max-w-7xl px-4 py-10 sm:px-6 mb-12 mt-12"
      >
        <div className="lg:grid grid-cols-4 items-center">
          {/* Text Content */}
          <div className="col-span-3 mb-8">
            <h2 className="text-2xl font-bold mb-6">
              Do you want to create your own dream website
              <br />
              or company and mobile apps?
            </h2>
            <p className="text-gray-800 dark:text-white mb-8">
              Contact us to share your startup idea/concept and we&apos;ll make
              it a reality.
            </p>
            <a
              href="https://wa.me/+6282248289273"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-2 sm:px-10 hover:text-white"
            >
              Contact Us
            </a>
          </div>

          {/* Image Content */}
          <div>
            <img
              src="/img/sample.webp"
              alt="Gambar"
              className="rounded-lg shadow-sm"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

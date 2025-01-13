import React from "react";

const ProfileSection = () => {
  return (
    <main>
      <section
        id="profile"
        className="mx-auto max-w-md sm:max-w-3xl lg:max-w-7xl px-4 sm:px-6 py-12 mb-12"
      >
        <div className="text-center mb-8">
          <h2 className="font-bold text-3xl lg:text-4xl mb-2 text-gray-800 dark:text-white">
            Who Are We?
          </h2>
          <p className="leading-9">Get to know more about Innovarex</p>
        </div>
        <div className="mx-auto max-w-3xl text-center text-lg sm:text-xl text-gray-500 dark:text-gray-300 mt-6 p-5">
          <p>
            PT Innovarex Solusi Digital has a goal to provide innovative and
            effective digital solutions for companies. We have a team of people
            with experience in application development, mobile application
            development, software development, and UI/UX design. We believe that
            technology can be a powerful tool to help companies achieve their
            business goals.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ProfileSection;

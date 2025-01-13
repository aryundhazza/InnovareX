import React from "react";

const GoalSection = () => {
  return (
    <main>
      <section id="goal" className="bg-gray-100 dark:bg-trueGray-900 mb-12">
        <div className="mx-auto max-w-md sm:max-w-3xl lg:max-w-7xl px-4 sm:px-6 py-12">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl lg:text-4xl mb-2 text-gray-800 dark:text-white">
              Vision and Mission
            </h2>
            <p className="leading-9">Our goal is always committed</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-10 mx-auto mt-12">
            <div className="shadow-lg dark:shadow-indigo-600 border-indigo-600 rounded-lg py-6 px-8 text-center text-xl text-gray-500 dark:text-gray-300">
              <b>Vision</b>
              <p className="pt-8 text-lg sm:text-xl">
                To become a leading and trusted provider of digital solutions in
                Indonesia by focusing on quality, innovation and customer
                satisfaction.
              </p>
            </div>
            <div className="shadow-lg dark:shadow-indigo-600 border-indigo-600 rounded-lg py-6 px-8 text-center text-xl text-gray-500 dark:text-gray-300">
              <b>Mission</b>
              <p className="pt-8 text-lg sm:text-xl">
                Providing innovative, effective and efficient digital solutions
                to meet customers&apos; business needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GoalSection;

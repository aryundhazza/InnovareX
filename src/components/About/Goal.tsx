import React from "react";

const GoalSection = () => {
  return (
    <main>
      <section id="goal" className="bg-gray-100 dark:bg-trueGray-900 mb-12">
        <div className="mx-auto max-w-md sm:max-w-3xl lg:max-w-7xl px-4 sm:px-6 py-12">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl lg:text-4xl mb-2 text-gray-800 dark:text-white">
              Visi dan Misi
            </h2>
            {/* <p className="leading-9">Our goal is always committed</p> */}
          </div>
          <div className="grid sm:grid-cols-2 gap-10 mx-auto mt-12">
            <div className="shadow-lg dark:shadow-indigo-600 border-indigo-600 rounded-lg py-6 px-8 text-center text-xl text-gray-500 dark:text-gray-300">
              <b>Visi</b>
              <p className="pt-8 text-lg sm:text-xl text-justify">
                Menjadi penyedia solusi digital terdepan dan terpercaya di Indonesia yang membantu bisnis pelanggan dalam mencapai tujuan mereka melalui solusi digital dengan berfokus pada kualitas serta pelayanan yang memuaskan pelanggan
              </p>
            </div>
            <div className="shadow-lg dark:shadow-indigo-600 border-indigo-600 rounded-lg py-6 px-8 text-center text-xl text-gray-500 dark:text-gray-300">
              <b>Misi</b>
              <ol className="pt-8 text-lg sm:text-xl list-decimal pl-5 text-justify">
                <li>
                  Mengembangkan solusi digital yang efektif dan efisien dalam membantu bisnis pelanggan dengan meningkatkan kualitas yang diinginkan untuk tercapainya tujuan bisnis mereka.
                </li>
                <li>
                  Membantu pelanggan dalam memahami dan memanfaatkan teknologi digital terbaru untuk meningkatkan kinerja dan efisiensi bisnis pelanggan.
                </li>
                <li>
                  Meningkatkan kualitas dan kreativitas konten digital untuk membantu bisnis dalam memaksimalkan pencapaian tujuan mereka.
                </li>
                <li>
                  Membangun kerjasama yang erat dengan klien untuk memahami kebutuhan dan tujuan mereka dengan memberikan solusi yang tepat.
                </li>
              </ol>
              {/* <p className="pt-8 text-lg sm:text-xl">
                Providing innovative, effective and efficient digital solutions
                to meet customers&apos; business needs.
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GoalSection;

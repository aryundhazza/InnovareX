import React from "react";

export const WebServicesSection = () => {
  return (
    <main>
      <section id="hero" className="pb-8 sm:pb-12 lg:pb-12">
        <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div>
              <div className="relative">
                <div className="mt-6 sm:max-w-xl">
                  {/* <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Wujudkan <br />
                    impian? Kami bisa buat
                  </h1> */}
                  <h1 className="text-3xl font-bold tracking-tight text-yellow-500 sm:text-4xl">
                    Wujudkan <br /> Website Impianmu Jadi <br /> Kenyataan!
                  </h1>
                  <p className="mt-6 text-xl text-white">
                    Kami membantu Anda membangun website dan aplikasi <br />
                    yang tidak hanya elegan, tapi juga meningkatkan <br />
                    engagement dan konversi. Gabung dengan puluhan bisnis yang
                    telah berkembang bersama kami!
                  </p>
                </div>
                <div className="mt-6 sm:mt-8 flex gap-4 flex-col lg:flex-row">
                  <div className="relative">
                    <label className="text-gray-500">
                      Nama <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 p-4 focus:ring-opacity-50"
                      placeholder="Masukkan Nama"
                    />
                  </div>
                  <div className="relative">
                    <label className="text-gray-500">
                      No Whatsapp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 p-4 focus:ring-opacity-50"
                      placeholder="Masukkan No."
                    />
                  </div>
                  <div className="relative">
                    <label className="text-gray-500">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 p-4 focus:ring-opacity-50"
                      placeholder="Masukkan Email"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 transition duration-300 text-gray-900 hover:text-white font-semibold py-1 rounded-md p-4 mt-7 h-[4em] lg:h-14 md:w-96 lg:w-full cursor-not-allowed"
                  >
                    Dapatkan Penawaran
                  </button>
                </div>
              </div>
            </div>
            <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
              <div className="py-20 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="hidden sm:block">
                  {/* <div className="absolute inset-y-0 left-1/2 w-screen rounded-xl-3xl bg-gray-200 bg-opacity-50 lg:left-60 lg:right-0 lg:w-full"></div> */}
                  <svg
                    className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
                    width="404"
                    height="392"
                    fill="none"
                    viewBox="0 0 404 392"
                  >
                    <defs>
                      <pattern
                        id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="4"
                          height="4"
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                  </svg>
                </div>
                <div className="relative pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:left-50 lg:max-w-none lg:pl-12 lg:text-center">
                  <img
                    src="/projects/issa.png"
                    className="md:w-full lg:h-full lg:w-auto lg:max-w-none mx-auto rounded-xl"
                    alt="Hero Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

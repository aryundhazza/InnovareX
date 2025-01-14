import Image from "next/image";

const Testimoni = () => {
  return (
    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl mb-10">
      <div className="text-center mb-0">
        <h2 className="mb-10 text-center text-3xl sm:text-4xl font-bold leading-6 tracking-tight text-blue-500">
          Testimoni Client Kami
        </h2>
        <div className="grid lg:grid-cols-4 gap-1/2 lg:px-8 mb-6 lg:mt-[100px] lg:ml-[-10px]">
          <div className="p-4 mt-2 border shadow-sm hover:scale-105 duration-100 flex lg:ml-[300px] lg:w-10/12 lg:mt-[-10px]">
            <div className="grid grid-rows-1 content-between">
              <p className="text-xs text-gray-600 text-left">
                Very helpful and professional. 👍👍 Highly recommended for
                creating a business website
              </p>
              <div className="flex items-start mt-5">
                <Image
                  alt="Nivea A Rizani"
                  loading="lazy"
                  width={30}
                  height={30}
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogolove.65a1fd4e.jpeg&amp;w=64&amp;q=75"
                  className="rounded-full"
                  style={{ color: "transparent" }}
                />
                <p className="text-xs font-bold text-red-500 mt-2 pl-2">
                  Nivea A Rizani
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 mt-2 border shadow-sm hover:scale-105 duration-100 flex lg:ml-[300px] lg:w-10/12 lg:mt-[-10px]">
            <div className="grid grid-rows-1 content-between">
              <p className="text-xs text-gray-600 text-left">
                Ramah dan cpt bgt pelayanannya. Orang-orangnya kompeten dan
                profesional parahhh. Sukaaaa bgt sama Hecolab, beda dr yg lain.
                AKU REKOMENDASIIN KALIAN DISINI AJA GAISSSS !!!! Ini agak lebay,
                tp kalian akan nyesel kalo g pake jasa dr Hecolab. Udh segitu
                dulu review dari aku ya gais. Sekian terimakasih
              </p>
              <div className="flex items-start mt-5">
                <Image
                  alt="Nurul Janah"
                  loading="lazy"
                  width={30}
                  height={30}
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnuruljanah.ceedeeb8.jpeg&amp;w=64&amp;q=75"
                  className="rounded-full"
                  style={{ color: "transparent" }}
                />
                <p className="text-xs font-bold text-red-500 mt-2 pl-2">
                  Nurul Janah
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 mt-2 border shadow-sm hover:scale-105 duration-100 flex lg:ml-[300px] lg:w-10/12 lg:mt-[-10px]">
            <div className="grid grid-rows-1 content-between">
              <p className="text-xs text-gray-600 text-left">
                Thanks hecolab for helping me create and publish my website, I
                finally have a good website For My Core Business. Very
                Recommend.
              </p>
              <div className="flex items-start mt-5">
                <Image
                  alt="Kelas Drafter Indonesia"
                  loading="lazy"
                  width={30}
                  height={30}
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkelasdafter.249c3f7f.jpeg&amp;w=64&amp;q=75"
                  className="rounded-full"
                  style={{ color: "transparent" }}
                />
                <p className="text-xs font-bold text-red-500 mt-2 pl-2">
                  Kelas Drafter Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:items-start items-center space-x-1 lg:mt-[-200px] lg:mb-[200px]">
          <h2 className="text-xl sm:text-2xl font-bold leading-6 tracking-tight lg:ml-[50px] text-blue-700 mb-2">
            Excellent
          </h2>
          <div className="flex items-center justify-center space-x-1">
            {[1, 2, 3, 4, 5].map((rating) => (
              <div key={rating} className="flex items-center space-x-1">
                <input
                  type="hidden"
                  name="rating"
                  value={rating}
                  style={{ display: "none" }}
                />
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  className="star"
                  color="#ffc107"
                  height="30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "rgb(255, 193, 7)" }}
                >
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                </svg>
              </div>
            ))}
          </div>
          <div className="flex items-center mb-4">
            <p className="lg:ml-[30px] ml-4 text-xs">
              <span className="lg:mb-[-10px] lg:ml-[20px] text-xs font-bold">
                5/5 | 33 Reviews
              </span>
            </p>
          </div>
          <div>
            <img
              className="lg:w-1/4 lg:ml-[30px] ml-40 w-3/12 h-auto"
              src="/img/img1/icon/googlelogo.png"
              alt=""
            />
          </div>
        </div>
        <div className="lg:mt-[-100px] mt-10 mb-[100px] lg:ml-[-10px] flex flex-col items-center justify-center">
          <button
            type="button"
            className="mt-30 bg-yellow-400 hover:bg-yellow-500 text-blue-700 hover:text-white px-6 py-3 font-inter rounded-full font-semibold transition duration-300"
          >
            Dapatkan Penawaran
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;

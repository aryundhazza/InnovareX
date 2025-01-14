import Image from "next/image";

const ProblemAndSolution = () => {
  return (
    <main>
      <section id="problemandsolving">
        <div className="bg-gray-800 mx-auto text-white pb-10">
          <div className="mx-auto flex flex-col items-center md:flex-row">
            <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 lg:ml-40">
              <h2 className="text-3xl tracking-tight text-white sm:text-4xl mt-24 mb-10 text-center md:text-left">
                Apakah kamu takut bakal
                <span className="text-3xl tracking-tight text-yellow-400 sm:text-4xl block">
                  punya masalah-
                </span>
                <span className="text-3xl tracking-tight text-yellow-400 sm:text-4xl block">
                  masalah website
                </span>
                kaya gini?
              </h2>
              <ol className="grid justify-items-start list-decimal mt-3 mb-10 ml-10 sm:ml-4 lg:mb-5 pr-6 text-sm leading-normal text-white md:text-left">
                <li className="py-1">
                  <span className="font-bold">Website tidak menarik </span> dan
                  fungsi yang terbatas.
                </li>
                <li className="py-1">
                  <span className="font-bold">Kesulitan SEO: </span>website
                  sulit temukan pada hasil pencarian.
                </li>
                <li className="py-1">
                  <span className="font-bold">Desain web standar </span> yang
                  tidak mencerminkan keunikan bisnis.
                </li>
                <li className="py-1">
                  <span className="font-bold">
                    Website lambat dan tidak responsif,{" "}
                  </span>{" "}
                  khususnya di perangkat mobile.
                </li>
                <li className="py-1">
                  <span className="font-bold">
                    Keamanan website yang lemah,{" "}
                  </span>{" "}
                  rentan terhadap risiko kemanan data.
                </li>
                <li className="py-1">
                  <span className="font-bold">
                    Navigasi website yang kompleks{" "}
                  </span>{" "}
                  dan tidak user-friendly, menyulitkan pengunjung untuk
                  menemukan informasi yang mereka butuhkan.
                </li>
              </ol>
            </div>
            <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0 flex items-end self-center lg:self-end justify-end lg:mr-40">
              <Image
                className="w-[18em] lg:w-[24em] md:w-80 max-w-none rounded-md ring-white/10 z-20 self-end"
                src="/img/benefit-one.png"
                alt="Confused Man Illustration"
                width={1824}
                height={1080}
              />
            </div>
          </div>

          <div className="container mx-auto py-8 flex flex-col items-center md:flex-row mt-5 lg:mt-1">
            <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 flex items-center justify-center order-1">
              <Image
                className="w-[18em] lg:w-[24em] md:w-80 lg:ml-[150px] lg:mt-[100px] rounded-md ring-white/10 z-20"
                src="/img/benefit-two.png"
                alt="Confused Man Illustration"
                width={1824}
                height={1080}
              />
            </div>
            <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0 lg:order-2">
              <h2 className="text-3xl tracking-tight text-center lg:text-start text-white sm:text-4xl mb-10">
                Kami{" "}
                <span className="text-3xl tracking-tight text-yellow-400 sm:text-4xl">
                  Hecolab
                </span>
                <br />
                Indonesia{" "}
                <span className="text-3xl tracking-tight text-yellow-400 sm:text-4xl">
                  Solusinya!
                </span>
              </h2>
              <ol className="grid justify-items-start list-decimal mt-3 ml-6 sm:ml-0 text-sm leading-normal text-white pl-4 pr-6 md:text-left">
                <li className="py-1">
                  <span className="font-bold">Ciptakan Impresi Digital: </span>
                  Kami akan buat laman web Anda bukan hanya menarik, tapi
                  multifungsi.
                </li>
                <li className="py-1">
                  <span className="font-bold">Optimasi Cerdas: </span>Kami akan
                  buat SEO terintegrasi yang memastikan laman anda mudah
                  ditemukan, menonjol di antara pesaing.
                </li>
                <li className="py-1">
                  <span className="font-bold">Desain Personalisasi: </span>Kami
                  bisa kustomisasi website Anda, menyesuaikan dengan identitas
                  dan nilai bisnis Anda, memikat audiens Anda.
                </li>
                <li className="py-1">
                  <span className="font-bold">Responsifitas Maksimal: </span>
                  Kami akan buat web Anda cepat dan adaptif agar mudah diakses
                  pada setiap perangkat, memaksimalkan user engagement.
                </li>
                <li className="py-1">
                  <span className="font-bold">Keamanan Data Prioritas: </span>
                  Kami buatkan perlindungan data bisnis dan pelanggan Anda
                  dengan sistem keamanan web yang tangguh.
                </li>
                <li className="py-1">
                  <span className="font-bold">Navigasi Mudah: </span>Kami
                  buatkan navigasi website yang mudah dan user-friendly,
                  memudahkan pengguna mencari yang dibutuhkan.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProblemAndSolution;

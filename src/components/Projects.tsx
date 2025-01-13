import React from "react";
import { Container } from "./Container";
import Image from "next/image";

interface Project {
  imgSrc: string;
  alt: string;
  description: string;
}

const projects: Project[] = [
  {
    imgSrc: "https://admin.hecolab.id/uploads/Lokaloborasi_1_b1ab8a1cff.jpg",
    alt: "Kaiparadise - Travel Agency",
    description: "Kaiparadise - Travel Agency",
  },
  {
    imgSrc: "https://admin.hecolab.id/uploads/Pikpak_c39aa3b34f.jpg",
    alt: "Pikpak - Mobile Design",
    description: "Pikpak - Mobile Design",
  },
  {
    imgSrc: "https://admin.hecolab.id/uploads/Untitled_1_edb6a9442b.png",
    alt: "SetorTunai - Mobile App",
    description: "SetorTunai - Mobile App",
  },
  {
    imgSrc: "https://admin.hecolab.id/uploads/Hecolab_Portfolio_01a3cddb64.jpg",
    alt: "Lokolaborasi by Kumparan",
    description: "Lokolaborasi by Kumparan",
  },
  {
    imgSrc: "https://admin.hecolab.id/uploads/BNI_klaster_4f6ce0e2ab.jpg",
    alt: "BNI Klaster - Divisi UMKM",
    description: "BNI Klaster - Divisi UMKM",
  },
  {
    imgSrc:
      "https://admin.hecolab.id/uploads/393741876_640014218296036_6038510203592926109_n_f3e811619f.jpg",
    alt: "Dokter GPT - Chatbot System",
    description: "Dokter GPT - Chatbot System",
  },
  {
    imgSrc: "https://admin.hecolab.id/uploads/Screenshot_241_64819381ac.png",
    alt: "Sejawat IDN - E-Learning",
    description: "Sejawat IDN - E-Learning",
  },
  {
    imgSrc: "https://admin.hecolab.id/uploads/Pikpak_Web_1_5a546ad59a.jpg",
    alt: "Pikpak Web Commerce",
    description: "Pikpak Web Commerce",
  },
  {
    imgSrc:
      "https://admin.hecolab.id/uploads/Desain_tanpa_judul_2_0d5b9c6a7b.png",
    alt: "Kelas Drafter - E-Learning Web App",
    description: "Kelas Drafter - E-Learning Web App",
  },
  {
    imgSrc: "https://admin.hecolab.id/uploads/Group_31_60b50c4ee8.png",
    alt: "Landing Page Konversi - Lifecore Transformation",
    description: "Landing Page Konversi - Lifecore Transformation",
  },
  {
    imgSrc: "https://admin.hecolab.id/uploads/image_3_755dbd9944.png",
    alt: "Solusi Prima Informatika - Landing Page Knversi",
    description: "Solusi Prima Informatika - Landing Page Knversi",
  },
  {
    imgSrc:
      "https://admin.hecolab.id/uploads/Desain_tanpa_judul_3_8ad900a713.png",
    alt: "Naga Lintas Wahid - Landing Page Konversi",
    description: "Naga Lintas Wahid - Landing Page Konversi",
  },
  {
    imgSrc:
      "https://admin.hecolab.id/uploads/Desain_tanpa_judul_4_f7a3e46c5b.png",
    alt: "Visiotek Global Indonesia - Landing Page Konversi",
    description: "Visiotek Global Indonesia - Landing Page Konversi",
  },
  {
    imgSrc:
      "https://admin.hecolab.id/uploads/Desain_tanpa_judul_5_9919bd5e1b.png",
    alt: "Satria Sunatan Caca -  Landing Page Konversi",
    description: "Satria Sunatan Caca -  Landing Page Konversi",
  },
  {
    imgSrc:
      "https://admin.hecolab.id/uploads/Desain_tanpa_judul_6_15b19347af.png",
    alt: "PAMOSMESIN - Landing Page Konversi",
    description: "PAMOSMESIN - Landing Page Konversi",
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <Container>
      <section
        id="projects"
        className="bg-gray-100 dark:bg-trueGray-900 rounded-lg py-4"
      >
        <div className="mx-auto max-w-md sm:max-w-3xl lg:max-w-7xl px-4 sm:px-6 mb-12 mt-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-center pb-6">
            Hecolab Complete Projects
          </h2>
          <p className="text-center">
            Projek sukses yang telah diselesaikan Hecolab
          </p>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 mt-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative shadow-sm group cursor-pointer"
              >
                <img
                  className="rounded-lg md:h-64 md:object-cover w-auto h-auto"
                  src={project.imgSrc}
                  alt={project.alt}
                />
                <div className="group-hover:opacity-100 duration-300 opacity-0 absolute bottom-0 mb-3 p-4 w-full block left-0 right-0 bg-white dark:bg-trueGray-800 rounded-sm font-medium dark:text-white">
                  <p className="text-center">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

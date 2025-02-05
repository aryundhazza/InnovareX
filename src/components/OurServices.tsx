import React from "react";
import { Container } from "@/components/Container";
import Image from "next/image";

export const OurServices = () => {
  return (
    <Container>
      <section
        id="services"
        className="mx-auto max-w-md sm:max-w-3xl lg:max-w-7xl mb-6 mt-6"
      >
        <div className="text-center mb-8">
          <h2 className="font-bold text-3xl lg:text-4xl py-4">LAYANAN KAMI</h2>
          <p className="leading-9">
            Managing your business with our best service
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="p-8 border text-center border-gray-100 shadow-sm rounded-lg hover:scale-105 cursor-pointer duration-100">
            <div className="text-center p-5 bg-indigo-50 rounded-lg inline-block">
              <Image
                className=""
                src="/img/project/wd.png"
                alt="Web Development Icon"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-xl mt-3 font-medium mb-4">
              <a href="/en/web-service">Web Development</a>
            </h3>
            <p className="text-gray-500">
              Our web development services help you build a professional website
              that is both attractive and easy to use.
            </p>
          </div>
          <div className="p-8 border text-center border-gray-100 shadow-sm rounded-lg hover:scale-105 cursor-pointer duration-100">
            <div className="text-center p-5 bg-indigo-50 rounded-lg inline-block">
              <Image
                className=""
                src="/img/project/dm.png"
                alt="Digital Marketing Icon"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-xl mt-3 font-medium mb-4">
              <a href="/en/web-service">Digital Marketing</a>
            </h3>
            <p className="text-gray-500">
              We help increase customer engagement and promote your product or
              service through various social media platforms.
            </p>
          </div>
          <div className="p-8 border text-center border-gray-100 shadow-sm rounded-lg hover:scale-105 cursor-pointer duration-100">
            <div className="text-center p-5 bg-indigo-50 rounded-lg inline-block">
              <Image
                className=""
                src="/img/project/md.png"
                alt="Mobile Development Icon"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-xl mt-3 font-medium mb-4">
              <a href="/en/web-service">Mobile Development</a>
            </h3>
            <p className="text-gray-500">
              Our mobile application development services help you build
              innovative and attractive mobile applications for iOS and Android
              platforms.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

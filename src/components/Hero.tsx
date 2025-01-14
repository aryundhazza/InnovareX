import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/hero.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Streamline Your Business Processes with Our Innovative IT
              Solutions
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Innovarex is the best choice with excellent service, We Build More
              Than Your Expectation
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#services"
                rel="noopener"
                className="rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-2 sm:px-10 hover:text-white"
              >
                How it Works
              </a>
              <a
                href="#projects"
                className="rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10 hover:text-white"
              >
                Behind The Scene
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="666"
              height="617"
              className={"object-cover scale-x-[-1]"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

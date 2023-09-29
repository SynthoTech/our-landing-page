import React from "react";
import { SectionWrapper } from "../hoc";
import { team, socials } from "../constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { Fati } from "../assets";

const Team = () => {
  return (
    <section className="services section-bg">
      <div>
        <div className="section-title">
          <h2>Team</h2>
          <p className="pd-[24px] text-[16px] text-[#444444]">
            Meet the talented individuals who make our company thrive. Our
            diverse team brings a wealth of experience, creativity, and passion
            to every project we undertake. Together, we are committed to
            delivering exceptional results and exceeding your expectations.
          </p>
        </div>
      </div>

      <div className="  justify-center">
        <ul
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center"
        >
          {team.map((team, index) => (
            <li key={team.name} className="">
              <div className="flex items-center gap-x-6">
                <Tilt className="xs:w-[250px] w-full">
                  <div
                    options={{
                      max: 45,
                      scale: 1,
                      speed: 450,
                    }}
                    className="bg-white rounded-[20px] py-5 px-12 sm:min-h-[450px] flex justify-evenly items-center flex-col"
                  >
                    <img
                      className="h-[100%] w-[100%] rounded-full"
                      src={team.icon}
                      alt=""
                    />
                    <div>
                      <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                        {team.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {team.role}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      {socials.map((social, index) => (
                        <div
                          key={social.name}
                          className="border-none rounded-full bg-[#f3f5fa]"
                        >
                          <a href={social.url}>
                            <img src={social.icon} alt="" className="p-1" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </Tilt>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionWrapper(Team, "team");

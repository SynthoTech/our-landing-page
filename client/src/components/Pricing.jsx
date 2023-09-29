import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Pricing = () => (
  <div>
    <section className="services section-bg">
      <motion.div variants={textVariant()}>
        <div className="section-title">
          <h2>Pricing</h2>
        </div>
      </motion.div>
      <div className="mt-10 mx-auto container">
        <div className="flex flex-col lg:items-center justify-center w-full">
          <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">
            The Right Plan for your business
          </h1>
          <p className="pd-[24px] text-[16px] text-[#444444] pt-2">
            We have several plans to showcase your Business. Get everything you
            need
          </p>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="pt-14">
            <div className="container mx-auto">
              <div className="xl:w-4/5 w-11/12 mx-auto mb-28"></div>
              <div className="flex flex-wrap mb-12 justify-between sm:justify-center -mx-6">
                <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                  <div className="py-5 px-4 bg-white border border-gray-200shadow rounded-lg text-left">
                    <h4 className="text-2xl text-[#37517e] font-semibold pb-8">
                      Basic
                    </h4>
                    <ul className="flex flex-col mb-6">
                      <li className="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          className="mr-4"
                          alt="check-mark"
                        />
                        <p className="text-gray-800 text-base font-normal">
                          Access to core features and functionalities.
                        </p>
                      </li>
                      <li className="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          className="mr-4"
                          alt="check-mark"
                        />
                        <p className="text-gray-800 text-base font-normal">
                          Limited usage and storage.
                        </p>
                      </li>
                      <li className="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          className="mr-4"
                          alt="check-mark"
                        />
                        <p className="text-gray-800 text-base font-normal">
                          Email support during business hours.
                        </p>
                      </li>
                      <li className="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          className="mr-4"
                          alt="check-mark"
                        />
                        <p className="text-gray-800 text-base font-normal">
                          Monthly updates and bug fixes.
                        </p>
                      </li>
                    </ul>
                    <p className="text-base text-[#37517e] relative pl-3">
                      <span className="font-light text-lg">$</span>
                      <span className="text-2xl font-semibold">100</span>
                      <span className="text-gray-600 font-light text-lg">
                        /month
                      </span>
                    </p>
                    <button className="mt-5 w-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out rounded text-[#37517e] px-8 py-3 text-base font-semibold">
                      Choose
                    </button>
                  </div>
                </div>
                <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                  <div className="py-5 px-4 bg-[#37517e] border border-gray-200 shadow rounded-lg text-left">
                    <h4 className="text-2xl text-white font-semibold pb-8">
                      Pro
                    </h4>
                    <ul className="flex flex-col mb-6">
                      <li className="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          className="mr-4"
                          alt="check-mark"
                        />
                        <p className="text-white text-base font-normal">
                          All Basic Plan features included.
                        </p>
                      </li>
                      <li className="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          className="mr-4"
                          alt="check-mark"
                        />
                        <p className="text-white text-base font-normal">
                          Expanded usage and storage limits.
                        </p>
                      </li>
                      <li className="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          className="mr-4"
                          alt="check-mark"
                        />
                        <p className="text-white text-base font-normal">
                          Priority email support.
                        </p>
                      </li>
                      <li className="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          className="mr-4"
                          alt="check-mark"
                        />
                        <p className="text-white text-base font-normal">
                          Advanced analytics and reporting.
                        </p>
                      </li>
                      <li className="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                          className="mr-4"
                          alt="check-mark"
                        />
                        <p className="text-white text-base font-normal">
                          Regular software updates and new features.
                        </p>
                      </li>
                    </ul>
                    <p className="text-base text-white relative pl-3">
                      <span className="font-light text-lg">$</span>
                      <span className="text-2xl font-semibold">200</span>
                      <span className="font-light text-lg">/month</span>
                    </p>
                    <button className="mt-5 w-full text-[#37517e] focus:outline-none transition duration-150 ease-in-out rounded bg-white hover:bg-gray-100 px-8 text-base font-semibold py-3">
                      Try
                    </button>
                  </div>
                </div>
                <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                  <div className="py-5 px-4 bg-white border border-gray-200shadow rounded-lg text-left">
                    <h4 className="text-2xl text-[#37517e] font-semibold pb-8">
                      Enterprise
                    </h4>
                    <ul className="flex flex-col mb-6">
                      <li className="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          className="mr-4"
                          alt="check-mark"
                        />
                        <p className="text-gray-800 text-base font-normal">
                          All Pro Plan features included.
                        </p>
                      </li>
                      <li className="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          className="mr-4"
                          alt="check-mark"
                        />
                        <p className="text-gray-800 text-base font-normal">
                          Fully customizable solutions.
                        </p>
                      </li>
                      <li className="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          className="mr-4"
                          alt="check-mark"
                        />
                        <p className="text-gray-800 text-base font-normal">
                          Dedicated account manager.
                        </p>
                      </li>
                      <li className="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          className="mr-4"
                          alt="check-mark"
                        />
                        <p className="text-gray-800 text-base font-normal">
                          24/7 premium support.
                        </p>
                      </li>
                      <li className="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          className="mr-4"
                          alt="check-mark"
                        />
                        <p className="text-gray-800 text-base font-normal">
                          Scalability and integration options.
                        </p>
                      </li>
                      <li className="flex items-center mb-2.5">
                        <img
                          src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                          className="mr-4"
                          alt="check-mark"
                        />
                        <p className="text-gray-800 text-base font-normal">
                          Comprehensive training and onboarding.
                        </p>
                      </li>
                    </ul>
                    <p className="text-base text-[#37517e] relative pl-3">
                      <span className="font-light text-lg">$</span>
                      <span className="text-2xl font-semibold">300</span>
                      <span className="font-light text-lg">/month</span>
                    </p>
                    <button className="mt-5 w-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out rounded text-[#37517e] px-8 text-base font-semibold py-3">
                      Choose
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html: "",
              }}
            />
          </div>
        </div>
      </div>
    </section>

    <style>
      {` 
            .checkbox:checked {
                right: 0;
                background-color: #4338ca;
            }
            `}
    </style>
  </div>
);
export default SectionWrapper(Pricing, "pricing");

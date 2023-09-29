import React from "react";
import { SectionWrapper } from "../hoc";

const CTA = () => {
  return (
    <section id="cta" className="cta">
      <div className="flex lg:flex-row flex-col max-lg:flex-col  xs:flex-col lg:justify-between items-center px-2 ">
        <div className="sm:text-left text-center">
          <h3 className="text-white font-black text-[28px]">
            Experience Seamless Efficiency and Growth
          </h3>
          <p className="text-white font-light ml-10">
            Ready to take your business to the next level? Our cutting-edge
            products & services is designed to supercharge your operations,
            streamline processes, and boost productivity. Join thousands of
            satisfied users who are already reaping the benefits.
          </p>
        </div>
        <div className="text-center mt-5">
          <a
            href="#"
            className="text-center text-white font-[500px] sm:py-[16px] sm:px-[40px] py-[15px] px-[30px] hover:bg-[#47b2e4] hover:border-[#47b2e4] rounded-[50px] transition-[0.5s] m-[10px] border-[2px] border-solid border-white"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(CTA, "cto");

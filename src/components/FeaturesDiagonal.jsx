import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon.jsx";

export const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-bgDark1">
      <div className="shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2  fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1  fill-bgDark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-bgDark1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <span className="block-subtitle">Accelerate Your Success</span>
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl block-big-title">
              Build &amp; Launch without problems
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
              <strong>Build and launch your website without worries.</strong>You
              can be confident that your site will run smoothly, securely, and
              stay up-to-date. Automatic backups, advanced security features,
              and regular updates are just a few of the benefits that ensure
              peace of mind for you and your clients. Additionally, our
              experienced technical support team is always ready to assist you.
            </p>
            <ul className="text-primaryText">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Backup</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Regular updates</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Technical support</span>
              </li>
            </ul>
          </div>
          <div className="w-4/5 lg:w-1/2 lg:pl-16 flex flex-col  mx-auto pt-16 lg:pt-0">
            <img
              src={featuresdiagonal.src}
              alt="Feature image"
              className="rounded-xl  main-border-gray"
            />
            <button
              className="w-[210px] h-12 contained-button mr-10 mt-10"
              onClick={() => setIsModalOpen(true)}
              aria-label="Get started"
            >
              Get Started
            </button>
          </div>
        </div>
      </motion.div>
      <div className="shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2 fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1 fill-bgDark1"
          ></path>
        </svg>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};

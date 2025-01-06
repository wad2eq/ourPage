import { motion } from "framer-motion";
import  template from  '../assets/templates/template1.webp'
import  template2 from  '../assets/templates/template2.webp'

export const Brands = () => (
  <section className="py-12 sm:py-24 bg-bgDark1 w-full  lg:mt-16 mb-8 lg:mb-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5 sm:w-11/12">
        <div className="flex lg:flex-row flex-col items-center  justify-center lg:text-left text-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="mb-2  text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-primaryText">
                Chose your style
              </h2>
              <h2 className=" text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-secondaryColor">
                Select template you likes
              </h2>
            </div>
          </div>
          <div className="lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
            <div className="grid grid-cols-2">
              <div className="justify-center p-3">
                <a href="https://matias-react.vercel.app/?storefront=envato-elements" referrerPolicy="no-referrer"><img src={template2.src} /></a>
              </div>
              <div className=" justify-center p-3">
                <img src={template2.src}/>
              </div>
              <div className=" justify-center p-3">
                <img src={template.src} />
              </div>
              <div className="justify-center p-3">
                <img src={template2.src}/>
              </div>
              <div className="justify-center p-3">
                <img src={template2.src}/>
              </div>
              <div className="justify-center p-3">
                <img src={template2.src}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

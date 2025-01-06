
import {OurBrand} from "./elemets/SiteName.jsx";

export const Footer = () => {
  return (
    <footer aria-label="Site footer">
      <div className="pt-10  lg:pt-20 lg:pb-16 bg-bgDark1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap mb-16 lg:mb-0 justify-center">
            <div className="flex justify-center lg:justify-start items-center grow basis-0">
            <OurBrand/>
            </div>
            <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
              We design and develop modern, responsive, and SEO-friendly websites. Personalized approach and competitive
              pricing. Check out our offer!
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

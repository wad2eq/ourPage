import { motion } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon.jsx";
const pricingData = [
  "Seamless integration",
  "Real-time data visualization",
  "Advanced predictive analytics",
  "Collaborative environment",
  "Responsive customer support",
];

const seo_content = [
  {
    title: "Website SEO",
    description:
      "Stay ahead of the competition. Our SEO strategies will make your website more visible than your rivals' sites, giving you a competitive edge in the market.",
    subtitle: "Enhance your online presence",
    list: [
      "Keyword Analysis",
      "Content Optimization",
      "Link Building",
      "Mobile Optimization",
      "Online Reputation Management",
    ],
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description:
      "Boost your website's performance and maximize profits. Our conversion rate optimization (CRO) services will help you turn visitors into loyal customers.",
    subtitle: "Maximize results",
    list: [
      "User Behavior Analysis",
      "Form Optimization",
      "Improved UX/UI",
      "Content Personalization",
      "Call-to-Action (CTA) Optimization",
    ],
  },
  {
    title: "Website Maintenance",
    description:
      "This is a comprehensive service that ensures your website remains fully functional, up-to-date, and secure. Just like regular car servicing, it helps you avoid major issues and guarantees long-term, hassle-free operation.",
    subtitle: "Avoid costly downtime",
    list: [
      "Fast Task Completion",
      "Final Decisions Are Yours",
      "Flexibility and Customization",
      "A Team of Experts",
      "Understanding Your Business Needs",
    ],
  },
];

export const Marketing = () => {
  return (
    <section
      className="w-screen flex justify-center bg-bgDark2 relative"
      id="oferta"
    >
      <div className="absolute -top-16" id="Marketing" />
      <div className="pb-20 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="block-subtitle">Find Your Perfect Fit</span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
                Effective web design for client acquisition.
              </h2>
              <p className="mb-6 text-secondaryText">
                Comprehensive online services for micro and small engineering
                firms and professionals.
              </p>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-stretch mt-20">
              {seo_content.map((item, index) => (
                <div
                  className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0 flex flex-1"
                  key={index}
                >
                  <div className="p-8  bg-bgDark3 rounded-3xl flex flex-col">
                    <div className="flex justify-start items-end">
                      {item.price && (
                        <div className="text-xl font-bold text-secondaryColor  text-left mt-4 mr-2">
                          {item.price}
                        </div>
                      )}
                      <div className="text-gray-500 ">{item.subtitle}</div>
                    </div>
                    <h2 className="text-3xl font-bold text-primaryText text-left mt-4 mr-2">
                      {" "}
                      {item.title}
                    </h2>
                    <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left"></h3>
                    <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                      {item.description}
                    </p>
                    <ul className="mb-2 2xl:mb-6 text-primaryText mt-auto">
                      {item.list.map((text, index) => (
                        <li className="mb-4 flex" key={`${text}-${index}`}>
                          <CheckArrowIcon />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

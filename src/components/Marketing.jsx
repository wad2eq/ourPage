import { motion } from "framer-motion";
import {CheckArrowIcon} from "../assets/icons/CheckArrowIcon.jsx";
const pricingData = [
    "Seamless integration",
    "Real-time data visualization",
    "Advanced predictive analytics",
    "Collaborative environment",
    "Responsive customer support",
];

const seo_content = [
    {
        title:"Pozycjonowanie stron www",
        description: "Wyprzedź konkurencję. Nasze działania SEO sprawią, że Twoja strona będzie bardziej widoczna niż strony Twoich rywali, a Ty zyskasz przewagę na rynku.",
        price: "500 – 1.500",
        subtitle:"za stronę",
        list: [
            "Analiza słów kluczowych",
            "Optymalizacja treści",
            "Budowanie linków",
            "Optymalizacja mobilna",
            "Zarządzanie reputacją online",
        ]
    },
    {
        title: "Reklama w internecie",
        description: "Zwiększ swoją widoczność w sieci i pozyskaj nowych klientów. Nasze kampanie reklamowe na Google, Facebooku i LinkedInie pozwolą Ci dotrzeć do osób zainteresowanych Twoją ofertą.",
        price: "5% – 15%",
        subtitle: "budżetu reklamowego",
        list: [
            "Skuteczne kampanie Google Ads",
            "Targetowanie demograficzne",
            "Remarketing",
            "Kampanie oparte na celach",
            "Targetowanie demograficzne",
        ]
    },
    {
        title: "Obsługa w marketingowa",
        description: "To działa jak zegar. Ty przesyłasz nam zadanie, a my je wykonujemy. Szybko, sprawnie i profesjonalnie. Zapewniamy: grafików, wsparcie informatyczne oraz copywriterów – Tobie pozostawiamy ostatnie słowo.",
        price: "300 – 500 PLN",
        subtitle: "miesięcznie",
        list: [
            "Szybka realizacja zleceń",
            "Ostatnie słowo należy do Ciebie",
            "Elastyczność i dostosowanie",
            "Zespół specjalistów",
            "Zrozumienie Twojego biznesu",
        ]
    }
]

export const Marketing = () => {
    return (
        <section className="w-screen flex justify-center bg-bgDark2 relative">
            <div className="absolute -top-16" id="Marketing"/>
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
                                Web design, który przyciąga klientów.
                            </h2>
                            <p className="mb-6 text-secondaryText">
                                Usługi marketingowe dla mikro- i małych firm inżynieryjnych oraz profesjonalistów
                            </p>
                        </div>
                        <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-stretch mt-20">
                        {seo_content.map((item , index) => (
                            <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0 flex flex-1">
                                <div className="p-8  bg-bgDark3 rounded-3xl flex flex-col">
                                    <div className="flex justify-start items-end">
                                        <div
                                            className="text-xl font-bold text-secondaryColor  text-left mt-4 mr-2">
                                            {item.price}
                                        </div>
                                        <div className="text-gray-500 ">
                                            {item.subtitle}
                                        </div>
                                    </div>
                                    <h2  className="text-3xl font-bold text-primaryText text-left mt-4 mr-2"> {item.title}</h2>
                                    <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left"></h3>
                                    <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                                        {item.description}
                                    </p>
                                    <ul className="mb-2 2xl:mb-6 text-primaryText">
                                        {item.list.map((text, index) => (
                                            <li className="mb-4 flex" key={`${text}-${index}`}>
                                                <CheckArrowIcon/>
                                                <span>{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-grow"></div>
                                    <button
                                        className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16"
                                        onClick={() => setIsModalOpen(true)}
                                        aria-label="Get started"
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
import logo from '../../assets/logos/logo_monitor.png';


export const OurBrand =  () => (
    <a href="/#home" aria-label="Home">
        <div className="flex justify-start items-center grow basis-0">
            <div className="text-white mr-2 text-6xl p-1">
                <img src={logo.src} width={50} height={50} />
            </div>
            <div className="text-white font-['Inter'] font-bold text-xl">
                Webdevagency
            </div>
        </div>
    </a>
);
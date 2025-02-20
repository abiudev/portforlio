

const Hero = () => {
  

    return (
        <div className="">
            

            <section className="pt-20 pb-22 bg-white">

                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
                        <div className="self-center pt-10 lg:col-span-4">
                            <h1 className="text-3xl font-bold text-gray-950 sm:text-4xl xl:text-5xl">
                                Hey 👋 I am  <span className="text-red-900">Abiud Masinde</span>, FrontEnd Developer.
                            </h1>
                            <p className="mt-5 text-base font-normal leading-7 text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus.
                            </p>
                            <div className="relative inline-flex mt-9 group">
                                <div
                                    className="absolute transition-all duration-1000 opacity-70 inset-0  rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200">
                                </div>

                                <a href="#" title=""
                                    className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-red-900 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                                    role="button">
                                    Hire Me
                                </a>
                            </div>
                        </div>

                        <div className="self-end lg:-mb-26 lg:order-last lg:pb-20 lg:col-span-3">
                            <p className="text-xs font-bold tracking-widest text-red-900 uppercase">
                                ⚡️ Socials
                            </p>

                            <div className="mt-6 space-y-6 lg:space-y-8">
                                <div className="relative overflow-hidden">
                                    <div className="flex items-start lg:items-center">
                                        <img className="object-cover w-12 h-12 rounded-lg shrink-0" src="https://img.icons8.com/?size=100&id=8808&format=png&color=228BE6" alt="Thumbnail 1" />
                                        <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                                            <a href="https://linkedin.com/in/abiudev" title="">
                                               View LinkedIn Profile
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="relative overflow-hidden">
                                    <div className="flex items-start lg:items-center">
                                        <img className="object-cover w-12 h-12 rounded-lg shrink-0" src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=1A1A1A" alt="Thumbnail 2" />
                                        <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                                            <a href="#" title="">
                                                X (formally Twitter)
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="relative overflow-hidden">
                                    <div className="flex items-start lg:items-center">
                                        <img className="object-cover w-12 h-12 rounded-lg shrink-0" src="https://img.icons8.com/?size=100&id=12599&format=png&color=1A1A1A" alt="Thumbnail 3" />
                                        <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                                            <a href="#" title="">
                                                Check out Github Profile
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="self-end pt-10 lg:col-span-5">
                    <img className="w-full mx-auto" src="/abiud.jpg" alt="Abiud" />
                </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
import { Link } from "react-router-dom";

export function AboutHero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-primary-900 overflow-hidden md:mt-6">
            <div className="absolute inset-0">
                <img
                    src="/about-hero.png"
                    alt="Our Story"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/60 to-primary-600/50"></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                <div className="mb-8">
                    <span className="inline-block px-4 py-2 bg-secondary-500/20 rounded-full text-secondary-300 font-medium mb-4">
                        Since 2010
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                        Crafting <span className="text-secondary-300">Excellence</span>, <br />Building <span className="text-secondary-300">Trust</span>
                    </h1>
                    <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                        The journey of Tranquility began with a simple vision - to bring peace and serenity to everyday life through innovative solutions and unparalleled service.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {/* Call Now Button - triggers phone call */}
                    <a
                        href="tel:+1234567890" // Replace with your phone number
                        className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Call Now
                    </a>

                    {/* Explore Services Button - navigates to /services */}
                    <Link
                        to="/services"
                        className="px-8 py-3 bg-white hover:bg-gray-100 text-primary-900 font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        Explore Services
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <button className="animate-bounce p-2 rounded-full bg-white/20 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </button>
            </div>
        </section>
    );
}
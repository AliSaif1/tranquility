// Components/Home/HeroSection.jsx
export function HeroSection() {
    return (
        <section className="relative h-screen flex items-center justify-center bg-primary-900 overflow-hidden md:mt-6">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="/hero-background.png"
                    alt="Tranquility Home"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-primary-600 opacity-60"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                    Experience True <span className="text-secondary-300">Tranquility</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Discover peace and serenity in every moment with our premium services designed for your well-being.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/services"
                        className="bg-secondary-700 hover:bg-secondary-900 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 text-lg shadow-lg hover:shadow-xl"
                    >
                        Explore Services
                    </a>
                    <a
                        href="/contact"
                        className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 text-lg"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}

// Components/Home/FeatureCard.jsx
export function FeatureCard({ icon, title, description }) {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
            <div className="bg-primary-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <div className="text-primary-600 text-3xl">
                    {icon}
                </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}

// Components/Home/FeaturesSection.jsx
export function FeaturesSection() {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Premium Quality",
            description: "Our services are crafted with the highest standards to ensure your complete satisfaction."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Exceptional Value",
            description: "We offer competitive pricing without compromising on the quality of our services."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Trusted Expertise",
            description: "Years of experience and countless satisfied clients speak to our reliability."
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Why Choose <span className="text-primary-600">Tranquility</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Components/Home/CTASection.jsx
export function CTASection() {
    return (
        <section className="py-24 bg-secondary text-accent-700">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Experience Tranquility?
                    </h2>
                    <p className="text-xl text-primary-600 mb-10 leading-relaxed">
                        Contact us today to schedule a consultation and begin your journey to peace and serenity.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 text-lg shadow-md hover:shadow-lg"
                    >
                        Get Started Now
                    </a>
                </div>
            </div>
        </section>
    );
}

// Pages/Home.jsx
export default function Home() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <FeaturesSection />
            <CTASection />
        </div>
    );
}
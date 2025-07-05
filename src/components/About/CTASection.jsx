export function AboutCTASection() {
    return (
        <section className="py-20 bg-secondary text-accent-700">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Experience Tranquility?
                    </h2>
                    <p className="text-xl text-primary-600 mb-10 leading-relaxed">
                        Contact me today to discuss how I can support you or your loved ones with compassionate care.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 text-lg shadow-md hover:shadow-lg"
                        >
                            Get in Touch
                        </a>
                        <a
                            href="/services"
                            className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors duration-200 text-lg"
                        >
                            Explore Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
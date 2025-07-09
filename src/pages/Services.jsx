function Services() {
    const services = [
        {
            title: "PSW Services",
            description:
                "Personal non-medical support for seniors, including bathing, dressing, toileting, meal preparation, help with mobility, and medication reminders.",
            price: "$30.00 per hour",
            originalPrice: "$35.00 per hour", // Added original price
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            title: "Companionship / Respite Care",
            description:
                "Supervision and emotional support for seniors when loved ones are away, including meaningful interaction and light housekeeping.",
            price: "$35.00 per hour",
            originalPrice: "$40.00 per hour", // Added original price
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 bg-gray-50 md:mt-6">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20">
                    <span className="inline-block text-sm font-medium text-primary-600 mb-3 tracking-wider">
                        OUR SERVICES
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">
                        Compassionate <span className="text-primary-600">Care Services</span>
                    </h2>
                    <div className="flex justify-center">
                        <div className="w-16 h-1 bg-primary-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
                        Personalized support tailored to meet individual needs and enhance quality of life
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full group"
                        >
                            <div className="p-8 flex-grow">
                                <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-1">
                                    {service.description}
                                </p>
                            </div>
                            <div className="px-8 pb-6 pt-4 bg-primary-50/30 border-t border-primary-100">
                                <p className="text-primary-700 font-bold text-lg">
                                    <span className="text-gray-400 line-through mr-2 text-lg">{service.originalPrice.split(' ')[0]}</span>
                                    <span className="text-2xl">{service.price.split(' ')[0]}</span> {service.price.split(' ').slice(1).join(' ')}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="/contact" className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 inline-flex items-center">
                        Contact Us About Services
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Services;
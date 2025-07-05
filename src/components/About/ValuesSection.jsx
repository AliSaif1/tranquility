export function ValuesSection() {
    return (
        <section className="py-20 bg-primary-800 text-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        Our Core <span className="text-secondary-300">Values</span>
                    </h2>
                    <p className="text-primary-200 max-w-2xl mx-auto">
                        The principles that guide everything we do
                    </p>
                    <div className="w-20 h-1 bg-secondary-300 mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-primary-700 p-8 rounded-lg">
                        <div className="text-secondary-300 text-4xl mb-4">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Compassion</h3>
                        <p className="text-primary-200 leading-relaxed">
                            We approach every client with empathy and understanding, creating personalized care experiences.
                        </p>
                    </div>

                    <div className="bg-primary-700 p-8 rounded-lg">
                        <div className="text-secondary-300 text-4xl mb-4">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                        <p className="text-primary-200 leading-relaxed">
                            We maintain the highest ethical standards, ensuring transparency in all our dealings.
                        </p>
                    </div>

                    <div className="bg-primary-700 p-8 rounded-lg">
                        <div className="text-secondary-300 text-4xl mb-4">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Dedication</h3>
                        <p className="text-primary-200 leading-relaxed">
                            We're fully committed to providing consistent, reliable support to those who need it most.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
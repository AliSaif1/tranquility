export function TeamSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20">
                    <span className="inline-block text-sm font-medium text-primary-600 mb-3 tracking-wider">
                        OUR TEAM
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">
                        Meet <span className="text-primary-600">Michelle</span>
                    </h2>
                    <div className="flex justify-center">
                        <div className="w-16 h-1 bg-primary-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
                        The passionate individual behind Tranquility
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full transition-all duration-300 hover:shadow-xl">
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-2/5 relative">
                                <img 
                                    src="/michelle.png" 
                                    alt="Michelle Miller" 
                                    className="w-full h-full object-cover min-h-[350px]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
                            </div>
                            
                            <div className="lg:w-3/5 p-10">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Michelle Miller</h3>
                                    <p className="text-primary-600 font-medium">Founder & Personal Support Worker</p>
                                </div>
                                
                                <div className="prose prose-gray max-w-none">
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        My name is Michelle Miller, and I recently transitioned from a career in the financial sector to become a Personal Support Worker. My background in finance has equipped me with strong analytical and problem-solving skills, which I now apply to provide compassionate and tailored care to seniors and people with disabilities.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        I believe that every person deserves dignity and respect, and I am dedicated to enhancing their quality of life by offering support, companionship, and assistance with daily activities. I'm excited to bring my commitment to excellence and my passion for helping others into this caregiving career.
                                    </p>
                                </div>
                                
                                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-3">
                                    <span className="px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
                                        Compassionate Care
                                    </span>
                                    <span className="px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
                                        Professional Experience
                                    </span>
                                    <span className="px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
                                        Personalized Support
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
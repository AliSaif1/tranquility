export function MissionSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <img 
                            src="/mission-image.jpg" 
                            alt="Our Mission" 
                            className="rounded-xl shadow-lg w-full h-auto"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Our <span className="text-primary-600">Mission</span>
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            At Tranquility, we're dedicated to creating experiences that restore balance and harmony to your life. 
                            Founded in 2023, we bring fresh perspectives to wellness and relaxation.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            With years of experience in caregiving and personal support, we're committed to making a difference.
                        </p>
                        <div className="bg-primary-100 p-4 rounded-lg border-l-4 border-primary-600">
                            <p className="text-primary-800 italic">
                                "We believe true tranquility comes from thoughtful care, exceptional service, 
                                and a deep understanding of our clients' needs."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
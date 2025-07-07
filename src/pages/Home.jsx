import { useState } from 'react';

// Components/Home/HeroSection.jsx
export function HeroSection() {
    return (
        <section className="relative h-screen flex items-center justify-center bg-primary-900 overflow-hidden md:mt-6">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="/hero-background.jpg"
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
                        href="tel:+16472612119"
                        className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 text-lg"
                    >
                        Call Now
                    </a>
                </div>
            </div>
        </section>
    );
}

// Components/Home/FeatureCard.jsx
export function FeatureCard({ icon, title, description, price }) {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col group">
            <div className="bg-primary-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                <div className="text-primary-600 text-3xl group-hover:text-primary-700 transition-colors duration-300">
                    {icon}
                </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                {title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                {description}
            </p>
            <div className="mt-auto px-0 pb-0 pt-4 bg-primary-50/30 border-t border-primary-100">
                <p className="text-primary-700 font-bold text-lg text-center px-4 py-3">
                    <span className="text-2xl">{price.split(' ')[0]}</span> {price.split(' ').slice(1).join(' ')}
                </p>
            </div>
        </div>
    );
}

// Components/Home/FeaturesSection.jsx
export function FeaturesSection() {
    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            title: "Personal Care",
            description: "Assistance with daily living activities including bathing, dressing, grooming, and mobility support to maintain dignity and independence.",
            price: "$30.00 per hour"
        },
        {
            title: "Companionship",
            description: "Meaningful social interaction and emotional support to combat loneliness and improve overall wellbeing.",
            price: "$35.00 per hour",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            title: "Meal Preparation",
            description: "Nutritionally balanced meal planning and preparation tailored to dietary needs and personal preferences.",
            price: "$30.00 per hour",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            )
        },
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our <span className="text-primary-600">Services</span>
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
                            price={feature.price}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Components/Home/CTASection.jsx
export function CTASection() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', message: '', isError: false });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.service || 'Service Inquiry',
                    message: formData.message,
                    consent: true // Assuming consent is implied by form submission
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to send message');
            }

            // Show success modal
            setModalContent({
                title: 'Message Sent Successfully!',
                message: 'Thank you for contacting us. We will get back to you within 24 hours.',
                isError: false
            });
            setShowModal(true);

            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });
        } catch (error) {
            console.error('Error:', error);
            // Show error modal
            setModalContent({
                title: 'Error Sending Message',
                message: error.message || 'There was an error sending your message. Please try again later or contact us directly at contact@tranquilitycare.com.',
                isError: true
            });
            setShowModal(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <section className="py-24 bg-secondary text-accent-700 relative">
            {/* Modal Popup */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full ${modalContent.isError ? 'bg-red-100' : 'bg-green-100'}`}>
                            {modalContent.isError ? (
                                <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </div>

                        <div className="mt-3 text-center sm:mt-5">
                            <h3 className={`text-lg leading-6 font-medium ${modalContent.isError ? 'text-red-800' : 'text-green-800'}`}>
                                {modalContent.title}
                            </h3>
                            <div className="mt-2">
                                <p className="text-sm text-gray-600">
                                    {modalContent.message}
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 sm:mt-6">
                            <button
                                type="button"
                                onClick={closeModal}
                                className={`inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 ${modalContent.isError ? 'bg-red-600 hover:bg-red-700' : 'bg-primary-600 hover:bg-primary-700'} text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${modalContent.isError ? 'focus:ring-red-500' : 'focus:ring-primary-500'} sm:text-sm transition-colors duration-300`}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Experience Tranquility?
                        </h2>
                        <p className="text-xl text-primary-600 max-w-2xl mx-auto leading-relaxed">
                            Contact us today to schedule a consultation and begin your journey to peace and serenity.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Contact Us</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Row 1: First Name and Last Name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Row 2: Email and Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    />
                                </div>
                            </div>

                            {/* Row 3: Service/Subject (full width) */}
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service/Subject</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                >
                                    <option value="">Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="services">Care Services</option>
                                    <option value="billing">Billing Question</option>
                                    <option value="employment">Employment Opportunity</option>
                                    <option value="feedback">Feedback/Suggestion</option>
                                </select>
                            </div>

                            {/* Row 4: Message (full width) */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    required
                                ></textarea>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 text-lg shadow-md hover:shadow-lg flex-1 flex items-center justify-center ${isSubmitting ? 'opacity-75' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : 'Send Message'}
                                </button>
                                <a
                                    href="tel:+16472612119"
                                    className="bg-secondary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-secondary-700 transition-colors duration-200 text-lg shadow-md hover:shadow-lg flex-1 text-center"
                                >
                                    Call Now
                                </a>
                            </div>
                        </form>
                    </div>
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
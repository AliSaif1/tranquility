import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', message: '', isError: false });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
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
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to send message');
            }

            // Show success modal
            setModalContent({
                title: 'Message Sent Successfully!',
                message: 'Thank you for contacting us. We will get back to you within an hour.',
                isError: false
            });
            setShowModal(true);

            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                consent: false
            });
        } catch (error) {
            console.error('Error:', error);
            // Show error modal
            setModalContent({
                title: 'Error Sending Message',
                message: error.message || 'There was an error sending your message. Please try again later or contact us directly at contact@tranquilitycompassion.ca.',
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
        <div className="bg-white relative">
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

            {/* Hero Section */}
            <section className="relative bg-primary-900 py-24 md:py-32 min-h-[600px] flex items-center justify-center md:mt-6">
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src="/about-hero.jpg"
                        alt="Caregivers helping seniors"
                        className="w-full h-full object-cover object-center opacity-40"
                        loading="eager"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-6 w-full">
                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="inline-block text-sm font-medium text-secondary-300 mb-4 tracking-wider uppercase">
                            Get in Touch
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                            Contact <span className="text-secondary-300">Tranquility Care</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-3xl">
                            Our compassionate team is ready to answer your questions and discuss how we can support you or your loved ones.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Methods Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">How Would You Like to Reach Us?</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Choose the most convenient way to connect with our care specialists.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Phone Card */}
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                            <div className="bg-primary-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">By Phone</h3>
                            <p className="text-gray-600 mb-6">Speak directly with a care coordinator for immediate assistance.</p>
                            <div className="space-y-2">
                                <p className="text-lg font-medium text-gray-900">General Inquiries</p>
                                <p className="text-primary-600 text-xl">647-261-2119</p>
                                <p className="text-sm text-gray-500">Mon-Fri, 8am-6pm EST</p>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                            <div className="bg-primary-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">By Email</h3>
                            <p className="text-gray-600 mb-6">Send us your questions and we'll respond within an hour.</p>
                            <div className="space-y-2">
                                <p className="text-lg font-medium text-gray-900">General Inquiries</p>
                                <p className="text-primary-600 text-base break-all">contact@tranquilitycompassion.ca</p>
                            </div>
                        </div>

                        {/* Visit Card */}
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                            <div className="bg-primary-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">In Person</h3>
                            <p className="text-gray-600 mb-6">Schedule an appointment to visit our headquarters.</p>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-lg font-medium text-gray-900">Headquarters</p>
                                    <p className="text-gray-700">915-135 James St. South</p>
                                    <p className="text-gray-700">Hamilton, Ontario L8P-2Z6</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex gap-12 items-stretch">
                        {/* Left Content - Now matches form height */}
                        <div className="lg:w-1/2 mb-12 lg:mb-0 flex flex-col">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">Get in Touch With Our Team</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        Complete the form and our dedicated team will respond within an hour. For urgent matters, please call our 24/7 support line at <span className="font-semibold text-primary-600">647-261-2119</span>.
                                    </p>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg flex-grow">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Response within an hour during business days",
                                            "Personalized care consultation",
                                            "No obligation assessment",
                                            "Confidential and secure communication"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <div className="bg-primary-50 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                                                    <svg className="h-4 w-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700 text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="bg-white rounded-xl shadow-lg h-full">
                                <div className="p-8">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Send Us a Message</h3>
                                        <p className="text-gray-500 text-sm">Fields marked with * are required</p>
                                    </div>

                                    <form className="space-y-4" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="first-name" className="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wider">First Name *</label>
                                                <input
                                                    type="text"
                                                    id="first-name"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="last-name" className="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wider">Last Name *</label>
                                                <input
                                                    type="text"
                                                    id="last-name"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wider">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wider">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wider">Subject *</label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjdjEwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-no-repeat bg-[center_right_0.5rem]"
                                                required
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="general">General Inquiry</option>
                                                <option value="services">Care Services</option>
                                                <option value="billing">Billing Question</option>
                                                <option value="employment">Employment Opportunity</option>
                                                <option value="feedback">Feedback/Suggestion</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1 uppercase tracking-wider">Message *</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="flex items-start pt-2">
                                            <div className="flex items-center h-4">
                                                <input
                                                    id="consent"
                                                    name="consent"
                                                    type="checkbox"
                                                    checked={formData.consent}
                                                    onChange={handleChange}
                                                    className="focus:ring-primary-500 h-3 w-3 text-primary-600 border-gray-300 rounded"
                                                    required
                                                />
                                            </div>
                                            <div className="ml-2 text-xs">
                                                <label htmlFor="consent" className="text-gray-600">
                                                    I agree to Tranquility Care's <a href="#" className="text-primary-600 hover:text-primary-500 font-medium">Privacy Policy</a> and consent to having my data collected.
                                                </label>
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 text-sm ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Sending...
                                                    </>
                                                ) : 'Send Message'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Quick answers to common questions about our services and contact process.
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            {[
                                {
                                    question: "How quickly can you arrange care services?",
                                    answer: "We can typically arrange care services within an hour of your initial contact, depending on your specific needs and location."
                                },
                                {
                                    question: "Do you offer free consultations?",
                                    answer: "Yes, we provide complimentary consultations to assess your needs and discuss how we can help. There's no obligation to proceed with our services."
                                },
                                {
                                    question: "What areas do you serve?",
                                    answer: "We currently serve the Greater Toronto Area and surrounding regions. Contact us to confirm availability in your specific location."
                                },
                                {
                                    question: "How do you select and train your caregivers?",
                                    answer: "All our caregivers undergo rigorous background checks, extensive training, and continuous professional development to ensure the highest quality of care."
                                },
                                {
                                    question: "What payment methods do you accept?",
                                    answer: "We accept various payment methods including private pay, long-term care insurance, and certain government assistance programs. Our billing team can provide detailed information."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
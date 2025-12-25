import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactSection = ({
  title = "Get In Touch",
  subtitle = "Ready to discuss your project? Our experts are here to help.",
  contactInfo = {
    address: "56 cowpwer street , Sydney, NSW 2032, Australia",
    phone: "+86 159 2189 8978",
    email: "ibuildhouse7@gmail.com",
    businessHours: "Mon-Fri: 8:00 AM - 6:00 PM",
    socialMedia: [
      { name: "Facebook", icon: "📘", url: "#" },
      { name: "Instagram", icon: "📷", url: "#" },
      { name: "LinkedIn", icon: "💼", url: "#" }
    ]
  }
}) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productType: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const productTypes = [
    'Aluminum Windows',
    'Security Doors',
    'Hurricane Windows',
    'French Doors',
    'Custom Solutions',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.productType) newErrors.productType = 'Please select a product type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          productType: '',
          message: ''
        });
        // Scroll to form top if needed
        window.scrollTo({ top: document.getElementById('contact-form')?.offsetTop - 100, behavior: 'smooth' });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      alert(`Error: ${error.message}. Please try again later.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const SuccessView = () => (
    <div className="text-center py-12 px-6">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
      <p className="text-lg text-gray-600 mb-10 max-w-md mx-auto">
        Thank you for reaching out. We have received your inquiry and our experts will get back to you within 24 hours.
      </p>
      <button
        onClick={() => setShowSuccess(false)}
        className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
      >
        Send Another Message
      </button>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Contact Information */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                    <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-blue-600 hover:text-blue-800">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                    <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:text-blue-800">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="text-2xl">🕐</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">{contactInfo.businessHours}</p>
                  </div>
                </div>

                {/* Social Media */}
                {/* <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {contactInfo.socialMedia.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className="text-3xl hover:scale-110 transition-transform"
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7" id="contact-form">
            <div className="bg-white rounded-xl shadow-lg p-8 min-h-[500px] flex flex-col justify-center">
              {showSuccess ? (
                <SuccessView />
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.name ? 'border-red-300' : 'border-gray-300'
                            }`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.email ? 'border-red-300' : 'border-gray-300'
                            }`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.phone ? 'border-red-300' : 'border-gray-300'
                            }`}
                          placeholder="+61 400 123 456"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                        )}
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    {/* Product Type */}
                    <div>
                      <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-2">
                        Product Type *
                      </label>
                      <select
                        id="productType"
                        name="productType"
                        value={formData.productType}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.productType ? 'border-red-300' : 'border-gray-300'
                          }`}
                      >
                        <option value="">Select a product type</option>
                        {productTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.productType && (
                        <p className="mt-1 text-sm text-red-600">{errors.productType}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none ${errors.message ? 'border-red-300' : 'border-gray-300'
                          }`}
                        placeholder="Tell us about your project requirements..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
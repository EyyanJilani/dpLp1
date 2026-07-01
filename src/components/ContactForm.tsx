import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function ContactForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    comments: "",
    services: [],
    file: null,
    privacyPolicy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).files?.[0] || null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.fullName.trim()) {
      setIsSubmitting(false);
      return Swal.fire(
        "Validation Error",
        "Please enter your full name.",
        "error"
      );
    }
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setIsSubmitting(false);
      return Swal.fire(
        "Validation Error",
        "Please enter a valid email.",
        "error"
      );
    }
    if (!formData.phone.trim()) {
      setIsSubmitting(false);
      return Swal.fire(
        "Validation Error",
        "Please enter your phone number.",
        "error"
      );
    }
    if (!formData.privacyPolicy) {
      setIsSubmitting(false);
      return Swal.fire(
        "Validation Error",
        "You must agree to the Privacy Policy.",
        "error"
      );
    }

    const submissionData = new FormData();
    submissionData.append("fullName", formData.fullName);
    submissionData.append("email", formData.email);
    submissionData.append("phone", formData.phone);
    submissionData.append("country", formData.country || "");
    submissionData.append("comments", formData.comments || "");
    submissionData.append("services", formData.services.join(", "));
    if (formData.file) {
      submissionData.append("file", formData.file);
    }

    try {
      const res = await fetch("https://server.optimal-itsolutions.com/api/contact", {
        method: "POST",
        body: submissionData,
      });

      if (res.ok) {
        setIsSubmitted(true);
        navigate("/thank-you");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          country: "",
          comments: "",
          services: [],
          file: null,
          privacyPolicy: false,
        });
      } else {
        Swal.fire("Error", "Failed to send your message.", "error");
      }
    } catch (err) {
      console.error("Submission error:", err);
      Swal.fire("Error", "Server error occurred.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Contact Details Card */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold tracking-widest text-red-400 uppercase font-mono">Let's Connect</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
              Contact Us
            </h2>
            <p className="mt-4 text-base text-zinc-400 leading-relaxed max-w-md">
              Ready to make a move? Send us your details and we'll get back to you shortly.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-red-600 text-white shadow-sm flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-400 font-mono tracking-wider uppercase">Email Us</h3>
                  <p className="mt-1 text-base font-semibold text-white hover:text-red-300 transition-colors">
                    <a href="mailto:info@digitalparadigm.com.au">info@digitalparadigm.com.au</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-red-600 text-white shadow-sm flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-400 font-mono tracking-wider uppercase">Call Our Team</h3>
                  <p className="mt-1 text-base font-semibold text-white hover:text-red-300 transition-colors">
                    <a href="tel:+612-5119-4369">+61 (2) 5119 4369</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-red-600 text-white shadow-sm flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-400 font-mono tracking-wider uppercase">Sydney Head Office</h3>
                  <p className="mt-1 text-base font-semibold text-zinc-300">
                    Level 1 530 Lt Collins Street Melbourne VIC
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-5 rounded-sm bg-zinc-950 border border-red-900 text-white max-w-sm shadow-md">
              <h4 className="text-xs font-bold tracking-widest text-red-400 uppercase font-mono mb-2">Consultation Guarantee</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                All inquiries are reviewed directly by a senior tech lead. We respect your confidentiality and will provide a ballpark estimate and strategy brief during our initial call.
              </p>
            </div>
          </div>

          {/* Right Column - Submission Form Container */}
          <div className="lg:col-span-7 bg-zinc-950 p-8 sm:p-10 rounded-sm border border-red-900 shadow-xl relative min-h-[550px] flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold tracking-wider text-zinc-400 font-mono uppercase mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-red-900 bg-black text-white focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 transition-colors text-sm font-medium"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold tracking-wider text-zinc-400 font-mono uppercase mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-sm border border-red-900 bg-black text-white focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 transition-colors text-sm font-medium"
                        placeholder="john@company.com.au"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold tracking-wider text-zinc-400 font-mono uppercase mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-sm border border-red-900 bg-black text-white focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 transition-colors text-sm font-medium"
                        placeholder="0400 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-xs font-bold tracking-wider text-zinc-400 font-mono uppercase mb-2">Country</label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-red-900 bg-black text-white focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 transition-colors text-sm font-medium"
                      placeholder="Australia"
                    />
                  </div>

                  <div>
                    <label htmlFor="comments" className="block text-xs font-bold tracking-wider text-zinc-400 font-mono uppercase mb-2">Comments or Project Details</label>
                    <textarea
                      name="comments"
                      id="comments"
                      rows={4}
                      value={formData.comments}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-red-900 bg-black text-white focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 transition-colors text-sm font-medium resize-none"
                      placeholder="Tell us about your project, catalogue, custom options, and what systems you need integrated."
                    />
                  </div>

                  <div>
                    <label htmlFor="file" className="block text-xs font-bold tracking-wider text-zinc-400 font-mono uppercase mb-2">Attachments (Optional)</label>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-red-900 bg-black text-white focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 transition-colors text-sm font-medium"
                    />
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-sm bg-zinc-900 border border-red-900/30">
                    <input
                      type="checkbox"
                      name="privacyPolicy"
                      id="privacyPolicy"
                      required
                      checked={formData.privacyPolicy}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded border-red-600 bg-black text-red-600 focus:ring-red-500 cursor-pointer"
                    />
                    <label htmlFor="privacyPolicy" className="text-xs text-zinc-300 cursor-pointer leading-relaxed">
                      I agree to the <a href="/privacy" className="text-red-400 hover:underline">Privacy Policy</a> and consent to being contacted regarding this inquiry. *
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center rounded-sm bg-red-600 px-6 py-4 text-sm font-bold text-white shadow-md hover:bg-red-700 disabled:bg-zinc-700 transition-all duration-200 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting Details...
                        </>
                      ) : (
                        "Submit Consultation Request"
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-12 px-4"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600/10 border-2 border-red-600 text-red-400 mb-6">
                    <Check className="h-8 w-8 stroke-[3]" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white font-display">
                    Thank You!
                  </h3>
                  
                  <p className="mt-3 text-base text-zinc-400 leading-relaxed max-w-md mx-auto">
                    Your request has been received safely. One of our senior technical architects will review your details and contact you within the next business hour.
                  </p>
                  
                  <div className="mt-8">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center justify-center rounded-sm border border-red-900 bg-black px-5 py-2.5 text-xs font-bold text-white hover:bg-red-950 shadow-sm transition-all duration-200 cursor-pointer font-mono uppercase"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}

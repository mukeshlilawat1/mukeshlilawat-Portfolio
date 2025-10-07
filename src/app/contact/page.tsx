"use client";

import {
  FaEnvelope,
  FaMap,
  FaMapMarkedAlt,
  FaPhone,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "sending" | "success" | "error";

const ContactPage = () => {
  const [FormData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });
      if (!response.ok) {
        throw new Error("failed to send message");
      }
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container max-w-7xl mx-auto py-20 px-4 md:px-0">
      <h1 className="text-4xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
        Content Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* contact info */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-secondary md:w-2/3">
            Im Always open to discussing new projects, creative ideas, or
            opportunities to be part of your journey.
          </p>
          <div className="space-y-8">
            {[
              {
                icon: <FaEnvelope className="w-6 h-6 text-primary" />,
                label: "Email",
                content: (
                  <Link
                    href="mailto:mukeshlilawat@mukeshlilawat.online"
                    className="text-secondary hover:text-primary transition-colors duration-200"
                  >
                    mukeshlilawat@mukeshlilawat.online
                  </Link>
                ),
              },
              {
                icon: <FaTwitter className="w-6 h-6 text-primary" />,
                label: "Twitter",
                content: (
                  <Link
                    href="https://x.com/coder_lilawat"
                    className="text-secondary hover:text-primary transition-colors duration-200"
                  >
                    Mukesh Lilawat
                  </Link>
                ),
              },
              {
                icon: <FaPhone className="w-6 h-6 text-primary" />,
                label: "Phone",
                content: (
                  <Link
                    href="tel:+919079643602"
                    className="text-secondary hover:text-primary transition-colors duration-200"
                  >
                    +919079643602
                  </Link>
                ),
              },
              {
                icon: <FaTelegram className="w-6 h-6 text-primary" />,
                label: "Telegram",
                content: (
                  <Link
                    href="text: mukeshlilawat"
                    className="text-secondary hover:text-primary transition-colors duration-200"
                  >
                    mukeshlilawat
                  </Link>
                ),
              },
              {
                icon: <FaMapMarkedAlt className="w-6 h-6 text-primary" />,
                label: "Location",
                content: <p className="text-secondary">Jodhpur</p>,
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                {item.icon}
                <div>
                  <h3 className="font-semibold">{item.label}</h3>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* contact form */}
        <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                required
                value={FormData.name}
                onChange={handleChange}
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                className="w-full px-4 py-2 rounded-md placeholder:text-white border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                required
                value={FormData.email}
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 rounded-md placeholder:text-white border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                rows={5}
                value={FormData.message}
                onChange={handleChange}
                required
                id="message"
                name="message"
                placeholder="Enter Your Message"
                className="w-full px-4 py-2 rounded-md placeholder:text-white border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              className="w-full btn btn-primary transition-all duration-200 hover:scale-105"
            >
              {status === "loading" ? "Sending...." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-700 text-center animate-pulse mt-2">
                Message Sent Successfully
              </p>
            )}

            {status === "error" && (
              <p className="text-red-700 text-center animate-shake mt-2">
                Failed to send message: Please Try Again
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

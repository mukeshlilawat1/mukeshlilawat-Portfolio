"use client";

import React from "react";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

        <p className="mb-4">
          At Lilawat&trade;, your privacy is important to us. This policy
          explains how we collect, use, and protect your personal information.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">
          1. Information Collection
        </h2>
        <p className="mb-4">
          We may collect personal information such as your name, email address,
          and usage data when you interact with our website.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">
          2. Information Usage
        </h2>
        <p className="mb-4">
          Collected information is used to improve our services, personalize
          your experience, and communicate important updates.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">3. Data Protection</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal
          information from unauthorized access or disclosure.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">4. Cookies</h2>
        <p className="mb-4">
          Our website uses cookies to enhance your browsing experience. You can
          manage cookie preferences in your browser settings.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">
          5. Third-party Services
        </h2>
        <p className="mb-4">
          We may share anonymized data with third-party services for analytics
          and improving website performance.
        </p>

        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} Lilawat&trade;. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;

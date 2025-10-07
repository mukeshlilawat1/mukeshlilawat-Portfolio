"use client";

import React from "react";

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Cookie Policy</h1>

        <p className="mb-4">
          At Lilawat&trade;, we use cookies to enhance your browsing experience
          and improve our services. This policy explains what cookies are, how
          we use them, and your choices regarding cookies.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">
          1. What are Cookies?
        </h2>
        <p className="mb-4">
          Cookies are small text files stored on your device when you visit a
          website. They help remember your preferences and activity.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">
          2. How We Use Cookies
        </h2>
        <p className="mb-4">
          We use cookies to:
          <ul className="list-disc ml-6 mt-2">
            <li>Remember your preferences and login sessions.</li>
            <li>Analyze website traffic and performance.</li>
            <li>Personalize content and ads.</li>
          </ul>
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">3. Your Choices</h2>
        <p className="mb-4">
          You can manage cookies through your browser settings. Blocking cookies
          may affect website functionality.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">
          4. Third-Party Cookies
        </h2>
        <p className="mb-4">
          We may use third-party services (like Google Analytics) that place
          cookies on your device for analytics purposes. These are governed by
          their own policies.
        </p>

        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} Lilawat&trade;. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicyPage;

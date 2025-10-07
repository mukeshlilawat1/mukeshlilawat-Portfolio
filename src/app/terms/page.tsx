"use client";

import React from "react";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Terms & Conditions
        </h1>

        <p className="mb-4">
          Welcome to Lilawat&trade;. By using our website, you agree to comply
          with and be bound by the following terms and conditions:
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">1. Use of Website</h2>
        <p className="mb-4">
          You agree to use the website for lawful purposes only and in a way
          that does not infringe the rights of others.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">
          2. Intellectual Property
        </h2>
        <p className="mb-4">
          All content on this website, including text, graphics, logos, and
          images, is the property of Lilawat&trade; and protected by copyright
          laws.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">3. Liability</h2>
        <p className="mb-4">
          Lilawat&trade; will not be liable for any damages arising from the use
          or inability to use the website.
        </p>

        <h2 className="text-xl font-semibold mb-2 mt-6">4. Changes</h2>
        <p className="mb-4">
          We may update these terms at any time. Continued use of the website
          constitutes acceptance of any changes.
        </p>

        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} Lilawat&trade;. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;

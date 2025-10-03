"use client";
import React from "react";
import PageWrapper from "@/components/layout/Pagewrapper";
import LoginForm from "@/components/forms/LoginForm"; // path may differ

const LoginPage = () => {
  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
          <LoginForm />
        </div>
      </div>
    </PageWrapper>
  );
};

export default LoginPage;

import React from "react";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center p-8 min-h-[80vh] bg-gray-50">
      {children}
    </div>
  );
}

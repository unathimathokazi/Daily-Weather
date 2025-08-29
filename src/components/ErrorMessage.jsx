import React from "react";

export default function ErrorMessage({ message }) {
  return (
    <div className="p-4 bg-red-100/80 text-red-700 rounded-xl border border-red-200 shadow-md text-center">
      <p className="font-medium">{message}</p>
    </div>
  );
}
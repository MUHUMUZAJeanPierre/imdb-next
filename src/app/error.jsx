'use client';

import React, { useEffect } from 'react';

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    console.error('Error captured by boundary:', error);
  }, [error]);

  const handleReset = () => {
    reset(); // Framework-provided function to attempt a retry
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-xl font-semibold">Something went wrong. Please try again later.</h1>
      <button
        className="mt-4 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600"
        onClick={handleReset}
      >
        Try Again
      </button>
    </div>
  );
}

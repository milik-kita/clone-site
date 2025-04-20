"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Apply styles directly without Tailwind
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
    document.body.style.fontFamily = "'Avenir', sans-serif";
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#111";
  }, []);

  return (
    <body className="antialiased" suppressHydrationWarning>
      {children}
    </body>
  );
}

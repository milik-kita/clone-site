import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Box & Tale - Gift Box, Custom Gifts, Hampers & Corporate Gifts",
  description: "Create custom Gifts and Hampers at Box & Tale, Pick The Box, Gift Items, and Greeting Card for your special occasion with build a box menu. Based in Jakarta",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}

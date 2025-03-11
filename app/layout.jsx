import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

export const metadata = {
  title: "CPG - ihSakib",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

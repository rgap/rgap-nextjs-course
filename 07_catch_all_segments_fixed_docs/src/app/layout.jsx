import "./globals.css";

export const metadata = {
  title: "Project 01 | Empty Next.js project",
  description: "Minimal starter without the stock Next.js demo content.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

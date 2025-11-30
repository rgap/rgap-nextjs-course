import "./globals.css";

// root layout
// created even if deleted

export const metadata = {
  title: "Project 01 | Empty Next.js project",
  description: "Minimal starter without the stock Next.js demo content.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue" }}>
          <p>Header</p>
        </header>
        {children}
        <footer style={{ backgroundColor: "ghostwhite" }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}

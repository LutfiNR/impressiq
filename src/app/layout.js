import "./globals.css";

export const metadata = {
  title: "ImpressIQ",
  description: "Aplikasi Lomba Cepat Tepat Impression 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" type="image/png"/>
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

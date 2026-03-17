import "./globals.css";   // ✅ PASTE HERE (LINE 1)

export const metadata = {
  title: "Haandi Shaandi",
  description: "Uniting the Flavours of Bharat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

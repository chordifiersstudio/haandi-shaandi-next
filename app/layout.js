export const metadata = {
  title: "Haandi Shaandi",
  description: "Uniting the Flavours of Bharat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

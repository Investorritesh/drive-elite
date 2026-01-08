import './globals.css';

export const metadata = {
  title: 'DriveElite | Premium Car Rentals',
  description: 'Premium car rentals at unbeatable prices',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}

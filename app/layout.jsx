import './globals.css';
import { AuthProvider } from './context/AuthContext';

export const metadata = {
  title: 'DriveElite | Premium Car Rentals',
  description: 'Premium car rentals at unbeatable prices',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

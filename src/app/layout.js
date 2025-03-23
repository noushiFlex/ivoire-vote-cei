import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../../components/NavBar';
import Footer from '../../components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Commission Électorale de Côte d\'Ivoire - Plateforme de Vote Numérique',
  description: 'Plateforme officielle de vote électronique de la Commission Électorale de Côte d\'Ivoire',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
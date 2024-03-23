import { Inter } from 'next/font/google';
import { Container } from '@/components/bootstrap';
import Header from './header/page';
import Footer from './footer/page';


import { ProductProvider } from '@/contexts/products';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Keith Haring & Blvck',
  description: 'Uma fusão de arte e moda',
  url: 'https://keithharingblvck.vercel.app',
  image: 'https://keithharingblvck.vercel.app/og-image.png',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProductProvider>
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
        </ProductProvider>
      </body>
    </html>
  );
}

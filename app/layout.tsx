import './globals.css';
import localFont from 'next/font/local';
import { Metadata, Viewport } from 'next';
import TanstackQueryWrapper from './_states/tanstackQuery/TanstackQueryWrapper';
import RecoilRootWrapper from './_states/recoil/RecoilRootWrapper';
import Footer from './_components/layout/footer/Footer';

const pretendard = localFont({
  src: [
    { path: './_font/Pretendard-Bold.ttf', style: 'bold' },
    { path: './_font/Pretendard-Medium.ttf', style: 'light' },
    { path: './_font/Pretendard-Light.ttf', style: 'medium' },
  ],
  display: 'swap',
  variable: '--font-pretendard',
});

const sb = localFont({
  src: [
    { path: './_font/SB 어그로 B.ttf', style: 'bold' },
    { path: './_font/SB 어그로 L.ttf', style: 'light' },
    { path: './_font/SB 어그로 M.ttf', style: 'medium' },
  ],
  display: 'swap',
  variable: '--font-sb',
});

const patua = localFont({ src: './_font/PatuaOne-Regular.ttf', display: 'swap', variable: '--font-patua' });

export const metadata: Metadata = {
  title: 'FE 김명섭 포트폴리오',
  description: '어서오세요. 웹 프론트엔드 개발자 김명섭입니다.',
  authors: [{ name: 'Kim MyungSub', url: 'https://kimmyungsub-portfolio.com' }],
  keywords: '웹프론트엔드, 포트폴리오, 웹개발자, 프론트엔드',
  metadataBase: new URL('https://kimmyungsub-portfolio.com'),
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: 'https://jeaukpjgukscmujtxqot.supabase.co/storage/v1/object/public/seo/seo.png',
    type: 'website',
    url: 'https://kimmyungsub-portfolio.com',
    siteName: 'FE 김명섭 포트폴리오',
    title: 'FE 김명섭 포트폴리오',
    description: '어서오세요. 웹 프론트엔드 개발자 김명섭입니다.',
  },
  twitter: {
    title: 'FE 김명섭 포트폴리오',
    images: 'https://jeaukpjgukscmujtxqot.supabase.co/storage/v1/object/public/seo/seo.png',
    card: 'summary',
    description: '어서오세요. 웹 프론트엔드 개발자 김명섭입니다.',
    site: 'https://kimmyungsub-portfolio.com',
  },
};

export const viewport: Viewport = {
  width: 698,
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${sb.variable} ${patua.variable}`}>
      <body>
        <TanstackQueryWrapper>
          <RecoilRootWrapper>
            {children}
            <Footer />
            <div id="modal-portal" />
          </RecoilRootWrapper>
        </TanstackQueryWrapper>
      </body>
    </html>
  );
}

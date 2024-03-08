import './globals.css';
import localFont from 'next/font/local';
import Header from './components/layout/header/Header';
import RecoilRootWrapper from './states/recoil/RecoilRootWrapper';
import TanstackQueryWrapper from './states/tanstackQuery/TanstackQueryWrapper';
import Footer from './components/layout/footer/Footer';

const pretendard = localFont({
  src: [
    { path: './font/Pretendard-Bold.ttf', style: 'bold' },
    { path: './font/Pretendard-Medium.ttf', style: 'light' },
    { path: './font/Pretendard-Light.ttf', style: 'medium' },
  ],
  display: 'swap',
  variable: '--font-pretendard',
});

const sb = localFont({
  src: [
    { path: './font/SB 어그로 B.ttf', style: 'bold' },
    { path: './font/SB 어그로 L.ttf', style: 'light' },
    { path: './font/SB 어그로 M.ttf', style: 'medium' },
  ],
  display: 'swap',
  variable: '--font-sb',
});

const patua = localFont({ src: './font/PatuaOne-Regular.ttf', display: 'swap', variable: '--font-patua' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${sb.variable} ${patua.variable}`}>
      <body>
        <TanstackQueryWrapper>
          <RecoilRootWrapper>
            <Header />
            {children}
            <Footer />
            <div id="modal-portal" />
          </RecoilRootWrapper>
        </TanstackQueryWrapper>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets:['latin'], variable:'--font-inter' });
const newsreader = Newsreader({ subsets:['latin'], variable:'--font-newsreader' });
export const metadata: Metadata = { title:{ default:'Nimatullah | Computational Geophysics', template:'%s | Nimatullah' }, description:'Computational geophysics research in inversion, machine learning, and scientific computing.', metadataBase:new URL('https://naimat04.github.io/portfolio/'), openGraph:{ type:'website', locale:'en_IN', title:'Nimatullah | Computational Geophysics' } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en" suppressHydrationWarning><body className={`${inter.variable} ${newsreader.variable}`}><Navbar/><main>{children}</main><Footer/></body></html>; }

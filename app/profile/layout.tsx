import type { Metadata } from 'next';
import '.././globals.css';

export const metadata: Metadata = {
    title: 'profile',
    description: 'profile',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <body>{children}</body>
        </html>
    );
}

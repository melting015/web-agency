import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.nav}`}>
                <Link href="/" className={styles.logo}>
                    Web<span>Flosy</span>
                </Link>
                <nav className={styles.links}>
                    <Link href="/" className={styles.link}>서비스 소개</Link>
                    <Link href="/portfolio" className={styles.link}>포트폴리오</Link>
                    <Link href="/pricing" className={styles.link}>가격 안내</Link>
                    <Link href="/faq" className={styles.link}>FAQ</Link>
                </nav>
                <Link href="/contact" className={`btn btn-primary ${styles.cta}`}>
                    문의하기
                </Link>
            </div>
        </header>
    );
}

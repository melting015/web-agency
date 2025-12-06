import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container`}>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <h3>WebFlosy</h3>
                        <p>비즈니스 목적에 딱 맞는 완벽한 웹사이트를 제작합니다. 기획부터 디자인, 개발까지 원스톱 솔루션을 경험하세요.</p>
                    </div>

                    <div className={styles.section}>
                        <h4>Menu</h4>
                        <div className={styles.links}>
                            <Link href="/">서비스 소개</Link>
                            <Link href="/portfolio">포트폴리오</Link>
                            <Link href="/pricing">가격 안내</Link>
                            <Link href="/contact">문의하기</Link>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h4>Contact</h4>
                        <div className={styles.links}>
                            <span>Kakao Talk: Webflosy</span>
                            <span>Phone: 010-6529-6242</span>
                            <span>Email: sch4884@naver.com</span>
                            <span>Mon-Fri: 09:00 - 21:00</span>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    &copy; {new Date().getFullYear()} WebFlosy. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

import Link from 'next/link';
import styles from '@/styles/Pages.module.css';
import { Check, Clock, Shield } from 'lucide-react';

export default function Pricing() {
    return (
        <div>
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1 className={styles.title}>Transparent <span className="text-gradient">Pricing</span></h1>
                    <p className={styles.subtitle}>거품 없는 합리적인 가격으로 최고의 퀄리티를 제공합니다.</p>
                </div>
            </section>

            <section className="container">
                <div className={styles.pricingGrid}>
                    {/* Basic */}
                    <div className={styles.pricingCard}>
                        <h3>기본형</h3>
                        <p style={{ color: '#888' }}>개인 포트폴리오, 소규모 홍보</p>
                        <div className={styles.price}>50<span style={{ fontSize: '1rem' }}>만원~</span></div>
                        <ul className={styles.featureList}>
                            <li><Check size={18} color="var(--accent-primary)" /> 반응형 웹 기본 적용</li>
                            <li><Check size={18} color="var(--accent-primary)" /> 메인 + 서브 3페이지</li>
                            <li><Check size={18} color="var(--accent-primary)" /> 기본 SEO 설정</li>
                            <li><Check size={18} color="var(--accent-primary)" /> 게시판 1개</li>
                            <li><Check size={18} color="var(--accent-primary)" /> 제작기간 5~7일</li>
                        </ul>
                        <Link href="/contact" className="btn btn-outline" style={{ width: '100%' }}>문의하기</Link>
                    </div>

                    {/* Business - Popular */}
                    <div className={`${styles.pricingCard} ${styles.popular}`}>
                        <span className={styles.popularTag}>BEST CHOICE</span>
                        <h3>기업형</h3>
                        <p style={{ color: '#888' }}>중소기업, 스타트업, 브랜드</p>
                        <div className={styles.price}>100<span style={{ fontSize: '1rem' }}>만원~</span></div>
                        <ul className={styles.featureList}>
                            <li><Check size={18} color="var(--accent-primary)" /> <strong>고급 맞춤 디자인</strong></li>
                            <li><Check size={18} color="var(--accent-primary)" /> 메인 + 서브 6페이지</li>
                            <li><Check size={18} color="var(--accent-primary)" /> 관리자 페이지 제공</li>
                            <li><Check size={18} color="var(--accent-primary)" /> 팝업/배너 관리 기능</li>
                            <li><Check size={18} color="var(--accent-primary)" /> 제작기간 10~14일</li>
                        </ul>
                        <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>상담 신청하기</Link>
                    </div>

                    {/* Commerce */}
                    <div className={styles.pricingCard}>
                        <h3>쇼핑몰형</h3>
                        <p style={{ color: '#888' }}>온라인 커머스, 판매 최적화</p>
                        <div className={styles.price}>150<span style={{ fontSize: '1rem' }}>만원~</span></div>
                        <ul className={styles.featureList}>
                            <li><Check size={18} color="var(--accent-primary)" /> 쇼핑몰 솔루션 연동</li>
                            <li><Check size={18} color="var(--accent-primary)" /> 상품/주문 관리 시스템</li>
                            <li><Check size={18} color="var(--accent-primary)" /> PG 결제사 연동</li>
                            <li><Check size={18} color="var(--accent-primary)" /> 회원 등급/적립금 기능</li>
                            <li><Check size={18} color="var(--accent-primary)" /> 제작기간 2주 이상</li>
                        </ul>
                        <Link href="/contact" className="btn btn-outline" style={{ width: '100%' }}>문의하기</Link>
                    </div>
                </div>
            </section>

            {/* Options */}
            <section className="section">
                <div className="container">
                    <h3 className="text-center mb-4">추가 옵션 서비스</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', textAlign: 'center' }}>
                        <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
                            <h4>다국어 기능</h4>
                            <p>영어/중국어/일어</p>
                        </div>
                        <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
                            <h4>예약 시스템</h4>
                            <p>네이버/실시간 예약</p>
                        </div>
                        <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
                            <h4>채널톡 연동</h4>
                            <p>실시간 상담 채팅</p>
                        </div>
                        <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: '12px' }}>
                            <h4>블로그 연동</h4>
                            <p>최신글 자동 노출</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="container mb-4 text-center">
                <div style={{ background: 'var(--bg-secondary)', padding: '3rem', borderRadius: '16px' }}>
                    <h2>예상 작업 기간</h2>
                    <div style={{ maxWidth: '600px', margin: '2rem auto', textAlign: 'left' }}>
                        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>기본형 (5-7일)</p>
                        <div style={{ width: '100%', background: '#333', height: '10px', borderRadius: '5px', marginBottom: '1.5rem' }}>
                            <div style={{ width: '40%', background: 'var(--accent-primary)', height: '100%', borderRadius: '5px' }}></div>
                        </div>

                        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>기업/쇼핑몰형 (10-14일)</p>
                        <div style={{ width: '100%', background: '#333', height: '10px', borderRadius: '5px' }}>
                            <div style={{ width: '80%', background: 'var(--accent-gradient)', height: '100%', borderRadius: '5px' }}></div>
                        </div>
                    </div>
                    <p>※ 자료 준비 및 피드백 속도에 따라 달라질 수 있습니다.</p>
                </div>
            </section>

            <div className="text-center section">
                <h2>예산에 맞춰 최적의 제안을 드립니다</h2>
                <Link href="/contact" className="btn btn-primary mt-4">무료 견적 받기</Link>
            </div>
        </div>
    );
}

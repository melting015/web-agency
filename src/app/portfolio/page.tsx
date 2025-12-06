import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Pages.module.css';
import { ArrowRight, Star, ExternalLink, BarChart } from 'lucide-react';

export default function Portfolio() {
    const projects = [
        { id: 1, title: 'TechFlow Enterprise', cat: '기업형', desc: 'IT 솔루션 기업의 신뢰감을 높이는 다크 모드 디자인', image: '/portfolio-1.png' },
        { id: 2, title: 'Urban Mode', cat: '쇼핑몰', desc: 'MZ세대를 타겟팅한 감각적인 패션 커머스', image: '/portfolio-2.png' },
        { id: 3, title: 'Artist J', cat: '포트폴리오', desc: '작가의 작품이 돋보이는 갤러리형 레이아웃', image: '/portfolio-3.png' },
        { id: 4, title: 'Cafe Morning', cat: '브랜드', desc: '따뜻한 감성을 담은 로컬 카페 브랜딩', image: '/portfolio-4.png' },
    ];

    return (
        <div>
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1 className={styles.title}>Project <span className="text-gradient">Portfolio</span></h1>
                    <p className={styles.subtitle}>성공적인 비즈니스를 위한 웹플로시의 제작 사례를 확인하세요.</p>
                </div>
            </section>

            {/* Filter - Visual Only for Demo */}
            <section className="container">
                <div className={styles.filterBar}>
                    <button className={`${styles.filterBtn} ${styles.active}`}>전체</button>
                    <button className={styles.filterBtn}>기업 소개</button>
                    <button className={styles.filterBtn}>쇼핑몰</button>
                    <button className={styles.filterBtn}>포트폴리오</button>
                    <button className={styles.filterBtn}>랜딩페이지</button>
                </div>

                <div className={styles.projectGrid}>
                    {projects.map((project) => (
                        <div key={project.id} className={styles.projectCard}>
                            <div className={styles.projectImage}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className={styles.projectContent}>
                                <div className={styles.projectTags}>
                                    <span className={styles.tag}>{project.cat}</span>
                                </div>
                                <h3>{project.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '1rem' }}>{project.desc}</p>
                                <Link href="#" className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                                    자세히 보기 <ArrowRight size={14} style={{ marginLeft: 4 }} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Case Study */}
            <section className="section">
                <div className="container">
                    <div className={styles.caseStudy}>
                        <div style={{ flex: 1 }}>
                            <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>SUCCESS STORY</span>
                            <h2 className="mb-4">리뉴얼로 매출 200% 상승,<br />비결은 '사용자 경험'입니다.</h2>
                            <div className="styles.caseStats">
                                <div className={styles.statItem}>
                                    <h4>문제점 (Problem)</h4>
                                    <p>기존 사이트의 복잡한 메뉴 구조로 인해 고객 이탈률이 70%에 달했습니다.</p>
                                </div>
                                <div className={styles.statItem}>
                                    <h4>해결책 (Solution)</h4>
                                    <p>모바일 최적화와 결제 동선을 3단계에서 1단계로 단축했습니다.</p>
                                </div>
                                <div className={styles.statItem}>
                                    <h4>결과 (Result)</h4>
                                    <p className="text-gradient" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>체류시간 30% 증가, 매출 2배 달성</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ flex: 1, minHeight: '300px', background: 'var(--bg-card)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <BarChart size={64} color="var(--accent-secondary)" />
                            <span style={{ marginLeft: '1rem' }}>Before / After Comparison</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section className="container mb-4">
                <h2 className="text-center mb-4">생생한 고객 후기</h2>
                <div className={styles.reviewGrid}>
                    {[1, 2, 3].map(i => (
                        <div key={i} className={styles.reviewCard}>
                            <div className={styles.stars}>
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="#fbbf24" style={{ display: 'inline-block' }} />)}
                            </div>
                            <p className="mb-2">"처음 제작해보는데 친절하게 설명해주셔서 좋았습니다. 결과물도 기대 이상이에요!"</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#333' }}></div>
                                <div>
                                    <h5 style={{ margin: 0 }}>김*수 대표님</h5>
                                    <span style={{ fontSize: '0.8rem', color: '#666' }}>쇼핑몰 제작</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <div className="text-center section">
                <h2>이런 퀄리티로 제작하고 싶다면?</h2>
                <Link href="/contact" className="btn btn-primary mt-4">견적 문의하기</Link>
            </div>
        </div>
    );
}

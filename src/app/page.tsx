import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { Layout, Smartphone, Zap, CheckCircle, PenTool, Search, Rocket, MessageCircle, FileText, Check, Layers } from 'lucide-react';

export default function Home() {
  return (
    <div className="home-container">
      {/* Section 1: Introduction & What We Do */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroTag}>Premium Web Builder Service</span>
          <h1 className={styles.heroTitle}>
            비즈니스의 시작,<br />
            <span className="text-gradient">가장 완벽한 웹사이트</span>로.
          </h1>
          <p className={styles.heroText}>
            기업 소개형, 쇼핑몰, 포트폴리오, 개인 브랜드까지.<br />
            관리하기 쉽고 빠르게 운영할 수 있는 최적의 웹사이트를 제작해드립니다.
          </p>
          <div className="btn-group" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="https://open.kakao.com/o/sFaAGi5h" target="_blank" className="btn btn-glow" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              무료 상담 신청하기
            </Link>
            <Link href="/portfolio" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              포트폴리오 보기
            </Link>
          </div>
        </div>

        <div className="container">
          <div className={styles.previewCard}>
            <Image
              src="/hero-preview.png"
              alt="Website Preview"
              width={1000}
              height={600}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
            />
            {/* Floating Badge on Preview */}
            <div style={{
              position: 'absolute', bottom: '30px', right: '30px',
              background: 'rgba(0,0,0,0.8)', padding: '1rem 2rem',
              borderRadius: '50px', border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', gap: '10px'
            }}>
              <span style={{ color: '#4ade80' }}>●</span>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>지금 상담 시 20% 할인</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Part of Section 1 Concept) */}
      <section className="section">
        <div className="container">
          <div className={styles.grid + " grid-3"}>
            <div className={styles.serviceCard}>
              <div className={styles.iconBox}><Layout size={32} /></div>
              <h3>기업형 홈페이지</h3>
              <p>신뢰감을 주는 디자인과<br />브랜드 스토리텔링</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.iconBox}><Smartphone size={32} /></div>
              <h3>쇼핑몰 / 커머스</h3>
              <p>매출을 부르는 UI와<br />간편한 결제 시스템</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.iconBox}><FileText size={32} /></div>
              <h3>포트폴리오 / 블로그</h3>
              <p>개성을 살린 디자인과<br />콘텐츠 중심 레이아웃</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Process */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center mb-4">
            <h2>제작 과정 한눈에 보기</h2>
            <p>초보자도 처음부터 끝까지 쉽게 따라올 수 있도록 안내해드립니다.</p>
          </div>

          <div className={styles.timeline}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h4 className={styles.stepTitle}>문의</h4>
              <p className={styles.stepDesc}>상담 요청</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h4 className={styles.stepTitle}>상담</h4>
              <p className={styles.stepDesc}>요구사항 분석</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h4 className={styles.stepTitle}>기획</h4>
              <p className={styles.stepDesc}>구조 설계</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h4 className={styles.stepTitle}>디자인</h4>
              <p className={styles.stepDesc}>UI/UX 제작</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>5</div>
              <h4 className={styles.stepTitle}>검수</h4>
              <p className={styles.stepDesc}>수정 및 보완</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>6</div>
              <h4 className={styles.stepTitle}>오픈</h4>
              <p className={styles.stepDesc}>사이트 게시</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Differentiation */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>무엇이 다른가요?</h2>
            <p>고객의 성공을 위해 디테일 하나까지 신경 씁니다.</p>
          </div>

          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <CheckCircle className={styles.checkIcon} size={24} />
              <div>
                <h4>쉬운 관리</h4>
                <p>개발 지식 없이도 텍스트와 이미지를 직접 수정할 수 있습니다.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <Smartphone className={styles.checkIcon} size={24} />
              <div>
                <h4>모바일 최적화</h4>
                <p>PC, 태블릿, 모바일 어디서나 완벽하게 보이는 반응형 웹입니다.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <Zap className={styles.checkIcon} size={24} />
              <div>
                <h4>빠른 제작 속도</h4>
                <p>체계적인 프로세스로 불필요한 대기 시간을 줄였습니다.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <Layers className={styles.checkIcon} size={24} />
              <div>
                <h4>All-in-One 서비스</h4>
                <p>기획부터 디자인, 개발, 사후관리까지 한 번에 해결하세요.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Requirements */}
      <section className="section">
        <div className="container">
          <div className={styles.reqCard}>
            <h2>고객님이 <span className="text-gradient">준비할 것은 단 3가지</span></h2>
            <p>나머지는 전문 기획자와 디자이너가 알아서 만들어 드립니다.</p>

            <div className={styles.reqList}>
              <div className={styles.reqItem}>
                <h4>1. 로고</h4>
                <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>(없으면 텍스트 로고 가능)</span>
              </div>
              <div className={styles.reqItem}>
                <h4>2. 사진/이미지</h4>
                <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>사용할 사진 몇 장</span>
              </div>
              <div className={styles.reqItem}>
                <h4>3. 참고 사이트</h4>
                <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>마음에 드는 곳 1~2개</span>
              </div>
            </div>

            <p style={{ opacity: 0.8 }}>복잡한 기획서는 필요 없습니다. 머릿속 아이디어만 가져오세요.</p>
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="container mb-4 mt-4">
        <div className={styles.ctaSection}>
          <h2>지금 바로 나만의 홈페이지를 만드세요</h2>
          <p className="mb-4">망설이는 시간에도 경쟁자는 앞서나가고 있습니다.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact" className="btn btn-glow" style={{ background: 'white', color: '#000', padding: '1rem 2rem' }}>
              <MessageCircle size={20} style={{ marginRight: '8px' }} />
              문의하기
            </Link>
            <Link href="/contact" className="btn btn-outline" style={{ color: 'white', borderColor: 'white', padding: '1rem 2rem' }}>
              견적 문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* Floating CPA Button - Fixed position at bottom right */}
      <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 999 }}>
        <Link href="/contact" className="btn btn-glow" style={{ borderRadius: '50px', padding: '1rem 1.5rem', display: 'flex', gap: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <MessageCircle size={24} />
          <span style={{ fontWeight: 700 }}>1:1 상담</span>
        </Link>
      </div>
    </div>
  );
}

'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/Pages.module.css';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.faqItem}>
            <div className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
                <span>Q. {question}</span>
                {isOpen ? <Minus size={20} color="var(--accent-primary)" /> : <Plus size={20} />}
            </div>
            {isOpen && (
                <div className={styles.faqAnswer}>
                    A. {answer}
                </div>
            )}
        </div>
    );
};

export default function FAQ() {
    return (
        <div>
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1 className={styles.title}>FAQ</h1>
                    <p className={styles.subtitle}>자주 묻는 질문을 모았습니다. 궁금한 점이 해결되지 않았다면 언제든 문의해주세요.</p>
                </div>
            </section>

            <section className="container">
                <div className={styles.faqContainer}>
                    <h3 className="mb-4 text-gradient">자주 묻는 질문 BEST 3</h3>
                    <FAQItem
                        question="홈페이지 제작 비용은 얼마인가요?"
                        answer="기본형 50만원부터 시작하며, 페이지 수와 기능에 따라 달라집니다. 자세한 내용은 가격 안내 페이지를 참고해주세요."
                    />
                    <FAQItem
                        question="제작 기간은 얼마나 걸리나요?"
                        answer="자료가 모두 준비된 시점으로부터 평균 1~2주 소요됩니다. 급행 제작이 필요하신 경우 별도 문의 부탁드립니다."
                    />
                    <FAQItem
                        question="제가 준비해야 할 것은 무엇인가요?"
                        answer="회사 로고(AI/PNG), 들어갈 문구, 사용할 이미지, 참고하고 싶은 사이트 주소만 알려주시면 됩니다."
                    />

                    <h3 className="mb-4 mt-4">제작 및 수정 관련</h3>
                    <FAQItem
                        question="디자인 수정은 몇 회까지 가능한가요?"
                        answer="시안 단계에서 2회, 퍼블리싱(코딩) 단계에서 텍스트/이미지 수정 1회를 기본으로 제공합니다."
                    />
                    <FAQItem
                        question="모바일에서도 잘 보이나요?"
                        answer="네, 모든 홈페이지는 PC, 태블릿, 모바일에서 완벽하게 작동하는 반응형 웹으로 제작됩니다."
                    />

                    <h3 className="mb-4 mt-4">유지보수 및 관리</h3>
                    <FAQItem
                        question="제작 후 직접 수정할 수 있나요?"
                        answer="네, 관리자 페이지를 제공하여 팝업, 공지사항, 기본 텍스트 등을 직접 수정하실 수 있습니다."
                    />
                    <FAQItem
                        question="유지보수 비용이 따로 있나요?"
                        answer="제작 완료 후 1개월간 간단한 오류는 무상 처리해드리며, 이후에는 건별 유지보수 또는 월 관리 계약을 통해 진행합니다. 서버/도메인 비용은 별도(고객 부담)입니다."
                    />

                    <div className="card mt-4" style={{ marginTop: '3rem', background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '12px' }}>
                        <h4>결제 및 환불 정책</h4>
                        <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
                            계약금 50% 입금 시 착수하며, 잔금 50%는 완료 후 청구됩니다.<br />
                            착수 후 디자인 시안 전달 전 취소 시 90% 환불, 시안 전달 후에는 환불이 불가합니다.
                        </p>
                    </div>
                </div>
            </section>

            <div className="text-center section">
                <h2>더 궁금한 점이 있으신가요?</h2>
                <Link href="/contact" className="btn btn-primary mt-4">1:1 문의하기</Link>
            </div>
        </div>
    );
}

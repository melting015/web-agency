'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '@/styles/Pages.module.css';
import { Mail, Phone, MessageSquare, Calendar } from 'lucide-react';

export default function Contact() {
    const [schedule, setSchedule] = useState<{ id: number, status: string }[]>([]);
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        type: '기업 소개형',
        ref: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        // Fetch schedule
        fetch('/api/schedule')
            .then(res => res.json())
            .then(data => setSchedule(data.slots || []))
            .catch(err => console.error(err));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.contact) {
            alert('이름과 연락처를 입력해주세요.');
            return;
        }

        setIsSubmitting(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const result = await res.json();
            if (result.success) {
                alert('문의가 접수되었습니다. 담당자가 확인 후 빠르게 연락드리겠습니다.');
                setFormData({ name: '', contact: '', type: '기업 소개형', ref: '', message: '' });
            } else {
                alert('접수 중 오류가 발생했습니다.');
            }
        } catch (error) {
            alert('전송 실패');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1 className={styles.title}>Contact <span className="text-gradient">Us</span></h1>
                    <p className={styles.subtitle}>성공적인 프로젝트의 시작, 지금 바로 문의하세요.</p>
                </div>
            </section>

            <section className="container">
                <div className={styles.contactWrapper}>
                    {/* Left: Info & Channels */}
                    <div>
                        <Link href="https://open.kakao.com/o/sFaAGi5h" target="_blank" className={styles.contactInfoCard}>
                            <MessageSquare size={32} color="var(--accent-primary)" />
                            <div>
                                <h4>카카오톡 상담</h4>
                                <p>1:1 오픈채팅 바로가기</p>
                            </div>
                        </Link>
                        <div className={styles.contactInfoCard}>
                            <Phone size={32} color="var(--accent-secondary)" />
                            <div>
                                <h4>전화 문의</h4>
                                <p>010-6529-6242 (평일 09:00 ~ 21:00)</p>
                            </div>
                        </div>
                        <div className={styles.contactInfoCard}>
                            <Mail size={32} color="#ffffff" />
                            <div>
                                <h4>이메일 문의</h4>
                                <p>sch4884@naver.com</p>
                            </div>
                        </div>

                        <div className="card" style={{ padding: '2rem', marginTop: '2rem' }}>
                            <h4 className="mb-2"><Calendar size={20} style={{ marginRight: 8, verticalAlign: 'middle' }} />제작 가능 일정</h4>
                            <p style={{ marginBottom: '1rem' }}>현재 <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>바로 착수 가능</span>합니다.</p>
                            <div style={{ display: 'flex', gap: '5px' }}>
                                {schedule.length > 0 ? schedule.map((slot, i) => (
                                    <div key={i} style={{
                                        flex: 1,
                                        height: '40px',
                                        background: slot.status === 'closed' ? '#333' : 'var(--accent-primary)',
                                        opacity: slot.status === 'closed' ? 0.3 : 1,
                                        borderRadius: '4px'
                                    }} title={slot.status === 'closed' ? "마감" : "가능"}></div>
                                )) : [...Array(7)].map((_, i) => <div key={i} style={{ flex: 1, height: 40, background: '#333', opacity: 0.3 }}></div>)}
                            </div>
                            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: '#666' }}>회색: 마감 / 파란색: 가능</p>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="card">
                        <h3 className="mb-4">간편 견적 문의</h3>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>이름 / 담당자명</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} className={styles.input} placeholder="홍길동" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>연락처</label>
                                <input type="text" name="contact" value={formData.contact} onChange={handleChange} className={styles.input} placeholder="010-0000-0000" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>원하는 사이트 유형</label>
                                <select name="type" value={formData.type} onChange={handleChange} className={styles.input} style={{ appearance: 'auto' }}>
                                    <option>기업 소개형</option>
                                    <option>쇼핑몰</option>
                                    <option>포트폴리오/블로그</option>
                                    <option>기타</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>참고 사이트 (선택)</label>
                                <input type="text" name="ref" value={formData.ref} onChange={handleChange} className={styles.input} placeholder="예: www.example.com" />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>문의 내용</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} className={styles.textarea} placeholder="프로젝트 예산, 일정 등 궁금한 점을 자유롭게 적어주세요." required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
                                {isSubmitting ? '전송 중...' : '문의하기'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <div className="text-center section">
                <p>궁금한 점이 많으신가요?</p>
                <Link href="/faq" style={{ textDecoration: 'underline', color: 'var(--accent-primary)' }}>자주 묻는 질문(FAQ) 확인하기</Link>
            </div>
        </div>
    );
}

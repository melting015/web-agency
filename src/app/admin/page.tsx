'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/Pages.module.css';

export default function Admin() {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [schedule, setSchedule] = useState<{ id: number, status: string }[]>([]);

    useEffect(() => {
        if (isAuthenticated) {
            fetch('/api/schedule')
                .then(res => res.json())
                .then(data => setSchedule(data.slots || []));
        }
    }, [isAuthenticated]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple client-side check for MVP
        if (password === 'admin1234') {
            setIsAuthenticated(true);
        } else {
            alert('비밀번호가 틀립니다.');
        }
    };

    const toggleSlot = async (id: number) => {
        const newSchedule = schedule.map(slot =>
            slot.id === id ? { ...slot, status: slot.status === 'open' ? 'closed' : 'open' } : slot
        );
        setSchedule(newSchedule);

        await fetch('/api/schedule', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ slots: newSchedule })
        });
    };

    if (!isAuthenticated) {
        return (
            <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
                <h2>관리자 로그인</h2>
                <form onSubmit={handleLogin} style={{ maxWidth: 300, margin: '2rem auto' }}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호 입력"
                        className={styles.input}
                        style={{ marginBottom: '1rem' }}
                    />
                    <button className="btn btn-primary" type="submit">로그인</button>
                    <p style={{ marginTop: '1rem', fontSize: '0.8rem', opacity: 0.5 }}>초기 비밀번호: admin1234</p>
                </form>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '8rem 0' }}>
            <h1 className="mb-4">제작 일정 관리</h1>
            <p className="mb-4">Contact 페이지에 표시될 제작 가능 일정을 관리합니다.</p>

            <div className="card">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1rem' }}>
                    {schedule.map((slot, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div
                                onClick={() => toggleSlot(slot.id)}
                                style={{
                                    height: '100px',
                                    background: slot.status === 'open' ? 'var(--accent-primary)' : '#333',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: '0.2s',
                                    border: '2px solid rgba(255,255,255,0.1)'
                                }}
                            >
                                <span style={{ fontWeight: 'bold' }}>
                                    {slot.status === 'open' ? '가능' : '마감'}
                                </span>
                            </div>
                            <p style={{ marginTop: '0.5rem' }}>슬롯 {i + 1}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

import { NextResponse } from 'next/server';
import crypto from 'crypto';

// CoolSMS (Solapi) API Configuration
const API_KEY = process.env.COOLSMS_API_KEY || '';
const API_SECRET = process.env.COOLSMS_API_SECRET || '';
const SENDER_NUMBER = process.env.COOLSMS_SENDER_NUMBER || '01065296242';
const RECEIVER_NUMBER = process.env.COOLSMS_RECEIVER_NUMBER || '01065296242';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, contact, type, message, ref } = body;

        console.log('=== 문의 접수 ===');
        console.log('이름:', name);
        console.log('연락처:', contact);
        console.log('유형:', type);
        console.log('참고사이트:', ref);
        console.log('내용:', message);
        console.log('API_KEY 설정됨:', !!API_KEY);
        console.log('API_SECRET 설정됨:', !!API_SECRET);
        console.log('발신번호:', SENDER_NUMBER);
        console.log('수신번호:', RECEIVER_NUMBER);
        console.log('================');

        // API 키가 설정되지 않은 경우
        if (!API_KEY || !API_SECRET) {
            console.warn('⚠️ CoolSMS API 키가 설정되지 않았습니다. 환경 변수를 확인하세요.');
            return NextResponse.json({
                success: true,
                message: 'Inquiry logged (SMS disabled - missing API keys)'
            });
        }

        // Solapi v4 인증 헤더 생성
        const date = new Date().toISOString();
        const salt = crypto.randomBytes(32).toString('hex');
        const signature = crypto.createHmac('sha256', API_SECRET)
            .update(date + salt)
            .digest('hex');
        const authorization = `HMAC-SHA256 apiKey=${API_KEY}, date=${date}, salt=${salt}, signature=${signature}`;

        // SMS 내용 구성
        const smsText = `[WebFlosy 견적문의]
이름: ${name}
연락처: ${contact}
유형: ${type}
${ref ? `참고: ${ref}` : ''}
내용: ${message.substring(0, 50)}${message.length > 50 ? '...' : ''}`;

        console.log('SMS 전송 시도:', smsText);

        // Solapi v4 API 호출 (단일 메시지 전송 형식으로 수정)
        const requestBody = {
            message: {
                to: RECEIVER_NUMBER,
                from: SENDER_NUMBER,
                text: smsText
            }
        };

        console.log('Request Body:', JSON.stringify(requestBody, null, 2));

        const response = await fetch('https://api.solapi.com/messages/v4/send', {
            method: 'POST',
            headers: {
                'Authorization': authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        const result = await response.json();

        console.log('Solapi 응답 상태:', response.status);
        console.log('Solapi 응답 내용:', JSON.stringify(result, null, 2));

        if (!response.ok) {
            console.error('❌ CoolSMS 전송 실패:', result);
            // 사용자에게는 성공으로 표시하되, 경고 로그 남김
            return NextResponse.json({
                success: true,
                warning: 'SMS 전송 실패',
                error: result
            });
        }

        console.log('✅ SMS 전송 성공');
        return NextResponse.json({ success: true, smsResult: result });

    } catch (error: any) {
        console.error('❌ API 오류:', error);
        console.error('오류 상세:', error.message);
        console.error('스택:', error.stack);
        return NextResponse.json({
            success: false,
            error: 'Internal Server Error',
            details: error.message
        }, { status: 500 });
    }
}

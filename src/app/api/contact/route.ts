import { NextResponse } from 'next/server';
import crypto from 'crypto';

// CoolSMS (Solapi) API Configuration
// You must get these keys from https://console.coolsms.co.kr/
const API_KEY = process.env.COOLSMS_API_KEY || 'NCSS7WPSLYVTPWJO';
const API_SECRET = process.env.COOLSMS_API_SECRET || 'YSLMWZDPL3MRCWHSPDAATVPTCOKNFFMU';
const SENDER_NUMBER = process.env.COOLSMS_SENDER_NUMBER || '01065296242'; // Must be a registered sender number
const RECEIVER_NUMBER = '01065296242'; // The number to receive the notification

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, contact, type, message } = body;

        console.log('--- Inquiry Received ---');
        console.log(`Name: ${name}`);
        console.log(`Contact: ${contact}`);
        console.log(`Type: ${type}`);
        console.log(`Message: ${message}`);
        console.log('------------------------');

        // If API Keys are not set, log and return success (for testing)
        if (API_KEY === 'YOUR_API_KEY') {
            console.log('⚠️ CoolSMS API Keys not set. SMS was not sent but inquiries are logged.');
            return NextResponse.json({ success: true, message: 'Inquiry received (SMS skipped)' });
        }

        // Prepare CoolSMS Authorization Header
        const date = new Date().toISOString();
        const salt = crypto.randomBytes(32).toString('hex');
        const signature = crypto.createHmac('sha256', API_SECRET)
            .update(date + salt)
            .digest('hex');
        const authorization = `HMAC-SHA256 apiKey=${API_KEY}, date=${date}, salt=${salt}, signature=${signature}`;

        // SMS Content
        const smsText = `[WebFlosy 견적문의]\n이름: ${name}\n연락처: ${contact}\n유형: ${type}\n내용: ${message.substring(0, 20)}...`;

        // Send Request to Solapi (CoolSMS)
        const response = await fetch('https://api.solapi.com/messages/v4/send', {
            method: 'POST',
            headers: {
                'Authorization': authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: {
                    to: RECEIVER_NUMBER,
                    from: SENDER_NUMBER,
                    text: smsText
                }
            })
        });

        const result = await response.json();

        if (!response.ok) {
            console.error('CoolSMS Error:', result);
            // Don't fail the request for the user, just log the error
            return NextResponse.json({ success: true, warning: 'Failed to send SMS' });
        }

        return NextResponse.json({ success: true, result });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
    }
}

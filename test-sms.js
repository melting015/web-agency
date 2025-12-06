const crypto = require('crypto');
const https = require('https');

const API_KEY = 'NCSS7WPSLYVTPWJO';
const API_SECRET = 'YSLMWZDPL3MRCWHSPDAATVPTCOKNFFMU';
const SENDER_NUMBER = '01065296242';
const RECEIVER_NUMBER = '01065296242';

console.log("Checking credentials and sending test SMS...");

const date = new Date().toISOString();
const salt = crypto.randomBytes(32).toString('hex');
const signature = crypto.createHmac('sha256', API_SECRET)
    .update(date + salt)
    .digest('hex');
const authorization = `HMAC-SHA256 apiKey=${API_KEY}, date=${date}, salt=${salt}, signature=${signature}`;

const data = JSON.stringify({
    message: {
        to: RECEIVER_NUMBER,
        from: SENDER_NUMBER,
        text: '[WebFlosy] Test SMS Message'
    }
});

const options = {
    hostname: 'api.solapi.com',
    port: 443,
    path: '/messages/v4/send',
    method: 'POST',
    headers: {
        'Authorization': authorization,
        'Content-Type': 'application/json'
    }
};

const req = https.request(options, (res) => {
    let responseBody = '';

    res.on('data', (chunk) => {
        responseBody += chunk;
    });

    res.on('end', () => {
        console.log('Status Code:', res.statusCode);
        console.log('Response Body:', responseBody);

        const result = JSON.parse(responseBody);
        if (result.errorCode) {
            console.error("❌ FAILURE: " + result.errorMessage);
        } else {
            console.log("✅ SUCCESS: SMS Request Accepted!");
        }
    });
});

req.on('error', (error) => {
    console.error('Network Error:', error);
});

req.write(data);
req.end();

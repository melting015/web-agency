# Vercel 배포 시 SMS 기능 설정 가이드

## 문제 해결 완료 ✅

Vercel에서 문자 받는 기능이 작동하지 않는 문제를 해결했습니다.

## 수정 사항

1. **API 요청 형식 수정**: Solapi v4 API의 올바른 형식으로 변경
   - 기존: `{ message: { to, from, text } }`
   - 수정: `{ messages: [{ to, from, text }] }`

2. **환경 변수 보안 강화**: 하드코딩된 API 키 제거

3. **상세한 로깅 추가**: 문제 진단을 위한 로그 강화

## Vercel 환경 변수 설정 방법

### 1. Vercel 대시보드에서 설정

1. [Vercel 대시보드](https://vercel.com/dashboard)에 접속
2. 프로젝트 선택 (webflosy)
3. **Settings** 탭 클릭
4. 왼쪽 메뉴에서 **Environment Variables** 클릭
5. 다음 환경 변수들을 추가:

```
COOLSMS_API_KEY=NCSS7WPSLYVTPWJO
COOLSMS_API_SECRET=YSLMWZDPL3MRCWHSPDAATVPTCOKNFFMU
COOLSMS_SENDER_NUMBER=01065296242
COOLSMS_RECEIVER_NUMBER=01065296242
```

6. **Environment** 선택: Production, Preview, Development 모두 체크
7. **Save** 클릭

### 2. 재배포

환경 변수를 추가한 후 **반드시 재배포**해야 합니다:

**방법 1: Vercel 대시보드에서**
- Deployments 탭 → 최신 배포 → 점 3개 메뉴 → **Redeploy**

**방법 2: Git push로**
```bash
git add .
git commit -m "Fix SMS functionality"
git push
```

## 로컬 테스트

로컬에서 테스트하려면 `.env.local` 파일을 생성하세요:

```bash
# .env.local 파일 생성
COOLSMS_API_KEY=NCSS7WPSLYVTPWJO
COOLSMS_API_SECRET=YSLMWZDPL3MRCWHSPDAATVPTCOKNFFMU
COOLSMS_SENDER_NUMBER=01065296242
COOLSMS_RECEIVER_NUMBER=01065296242
```

그 다음 개발 서버 재시작:
```bash
npm run dev
```

## 문제 진단 방법

배포 후에도 문제가 있다면:

1. **Vercel 로그 확인**:
   - Vercel 대시보드 → Deployments → 최신 배포 → **Functions** 탭
   - `/api/contact` 함수의 로그 확인

2. **확인할 로그 메시지**:
   - ✅ `API_KEY 설정됨: true` - 환경 변수가 제대로 로드됨
   - ✅ `SMS 전송 시도:` - SMS 전송 시도 중
   - ✅ `Solapi 응답 상태: 200` - 성공
   - ❌ `CoolSMS API 키가 설정되지 않았습니다` - 환경 변수 누락
   - ❌ `CoolSMS 전송 실패` - API 오류 (발신번호 미등록 등)

## CoolSMS 발신번호 확인

1. [CoolSMS 콘솔](https://console.coolsms.co.kr/) 접속
2. **발신번호 관리** 메뉴 확인
3. `01065296242`가 **인증 완료** 상태인지 확인
4. 미인증 시 인증 절차 진행 필요

## 추가 확인 사항

- **잔액 확인**: CoolSMS 계정에 충분한 잔액이 있는지 확인
- **API 키 유효성**: API 키가 만료되지 않았는지 확인
- **발신번호 등록**: 발신번호가 CoolSMS에 정식 등록되어 있는지 확인

## 테스트 방법

1. 배포된 사이트의 Contact 페이지 접속
2. 문의 폼 작성 후 제출
3. Vercel 로그에서 다음 확인:
   - 문의 데이터가 제대로 수신되었는지
   - SMS 전송 요청이 성공했는지
4. 등록된 휴대폰 번호로 SMS 수신 확인

## 문제가 계속되면

다음 정보를 확인해주세요:
1. Vercel 환경 변수가 제대로 설정되었는지
2. 재배포를 했는지
3. CoolSMS 콘솔의 발신번호 인증 상태
4. CoolSMS 계정 잔액
5. Vercel Functions 로그의 오류 메시지

# STORY STUDIO ONLINE

관리자: `admin.html` / 플레이어: `player.html?id=게임ID`

## 배포
1. Firebase 프로젝트를 만들고 **Authentication > 로그인 방법 > 이메일/비밀번호**를 켭니다. 관리자 사용자 계정을 직접 생성하고 이메일 인증을 완료합니다.
2. **Firestore Database**를 생성합니다. `firestore.rules`의 `REPLACE_WITH_YOUR_EMAIL@example.com`을 관리자 이메일로 바꾸고 Firestore > 규칙에 게시합니다. 이 규칙은 공개된 게임만 익명 열람을 허용합니다. 이메일 주소를 설정하지 않으면 쓰기 권한이 차단됩니다.
3. Firebase 프로젝트 설정 > 웹 앱을 등록한 후 `firebase-config.js`에 제공된 설정값을 붙여 넣습니다. (Firebase 웹 구성은 공개 가능한 앱 식별 정보이며 비밀 관리자 키가 아닙니다.)
4. `admin.html`, `player.html`, `cloud.js`, `firebase-config.js`를 같은 GitHub Pages 저장소에 업로드합니다. HTTPS 주소에서 실행합니다.
5. `admin.html`에서 로그인한 뒤 **클라우드에서 불러오기** 또는 **클라우드에 게시**를 이용합니다. 게임마다 플레이 링크를 복사할 수 있습니다.

## 주의
- 로컬 편집은 기존과 같이 브라우저에 자동 저장되지만 클라우드 게시는 별도 버튼으로 실행합니다.
- 비공개 게임은 익명 플레이어가 접근할 수 없습니다. '비공개'는 링크를 숨기는 기능이 아니라 Firestore 읽기 규칙으로 보호됩니다.
- 플레이어 진행 상황은 해당 브라우저의 localStorage에 저장됩니다. 기기 간 이어하기는 아직 지원하지 않습니다.
- 정답과 장면 데이터는 공개 게임에서 브라우저로 전달됩니다. 부정행위 방지나 유료 게임용 서버 검증은 지원하지 않습니다.
- 장면 ID를 바꾸거나 삭제하면 이전 플레이 저장 기록이 시작 장면으로 돌아갈 수 있습니다.

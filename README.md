<p align="middle" >
  <img src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/0fefce79602043a9b3281ee1dd8f4be6" width="400">
</p>
<h2 align="middle">페이먼츠</h2>
<p align="middle">React 모바일 페이먼츠 애플리케이션</p>
</p>

## 🚀 Getting Started

> `Component-Driven Development` 에 따라 UI를 구성하고 재사용 가능한 `Component`를 작성합니다.

✔️ `모바일 타겟`의 웹 앱을 구현하며 사용하기 `편리한 모바일 UI/UX`에 대해 고민해봅니다.  
✔️ 다른 라이브러리나 프레임워크 없이 오로지 `React`만으로 상태를 관리하고 컴포넌트를 설계합니다.  
✔️ `재사용 가능한 Component`를 직접 작성하고 사용합니다.  
✔️ `Controlled` & `Uncontrolled Components`에 입각하여 `Form`을 핸들링합니다.

## 고민한 흔적들 (꾸준히 업데이트 예정)

### 1. CDD에 따라 UI구성 및 컴포넌트 작성

### 2. 꼭 필요한 상태인가?

- e.g. 가상 키보드

### 3. 스토리북 상호작용 테스트

- 스토리북에 넣을 컴포넌트 기준
  1. Props에 따라서 UI가 달라지는 컴포넌트
     1. Card
        - PreviewCard ✅
        - BigCard ✅
        - SmallCard ✅
     2. Button
        - CardTypeButton ✅
        - NavigationButton ✅
     3. Modal
        - CardTypeSelectionModal ✅
        - VitualKeyboard
     4. Toast ✅
     5. Tooltip ✅
  2. 유저와의 상호작용을 통해 UI가 달라지는 컴포넌트
     1. Input ✅
     2. CardForm ✅
        - CardNumbers ✅
        - CardExpiredDate ✅
        - CardOwner ✅
        - CardPassword ✅
        - CardSecurityCode ✅
  3. 컴포넌트의 조합으로 생성된 페이지
     1. /cart-add ✅
     2. /card-completed
     3. /card-list
     4. /card-update
- Context API를 테스트 하려면?
- Router를 테스트 하려면?

### 4. 재사용 가능한 컴포넌트

### 5. 제어 & 비제어 컴포넌트

### 6. Context API를 활용한 전역 상태 관리와 계층 재구성

### 7. 테스트에 대한 고찰

### 8. 기타

- ref를 이용한 Context + 비제어 컴포넌트로 만든 폼의 가상 키보드 붙이기

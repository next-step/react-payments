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

## 요구사항

### 필수 요구사항

- [ ] Storybook 상호 작용 테스트
- [X] 재사용 가능한 Component 작성

### 카드 추가

- [X] <(뒤로가기) 버튼 클릭 시, 카드 목록 페이지로 이동한다.
- [X] 카드 번호를 입력 받을 수 있다.
    - [X] 카드 번호는 숫자만 입력가능하다.
    - [X] 카드 번호 4자리마다 -가 삽입된다.
    - [X] 카드 번호는 실시간으로 카드 UI에 반영된다.
    - [X] 카드 번호는 앞 8자리만 숫자로 보여지고, 나머지 숫자는 *로 보여진다.
- [X] 만료일을 입력 받을 수 있다.
    - [X] MM / YY 로 placeholder를 적용한다.
    - [X] 월, 년 사이에 자동으로 /가 삽입된다.
    - [X] 만료일은 실시간으로 카드 UI에 반영된다.
    - [X] 월은 1이상 12이하 숫자여야 한다.
- [X] 보안코드를 입력 받을 수 있다.
    - [X] 보안코드는 *으로 보여진다.
    - [X] 보안코드는 숫자만 입력가능하다.
- [X] 카드 비밀번호의 앞 2자리를 입력 받을 수 있다.
    - [X] 카드 비밀번호는 각 폼마다 한자리 숫자만 입력가능하다.
    - [X] 카드 번호 입력 시, *으로 보여진다.
- [X] 카드 소유자 이름을 입력 받을 수 있다.
    - [X] 이름은 30자리까지 입력할 수 있다.
    - [X] 이름 입력 폼 위에, 현재 입력 자릿수와 최대 입력 자릿수를 실시간으로 보여준다.
- [X] 카드 추가 완료시 카드 등록 완료 페이지로 이동한다.

### 심화 요구사항 (선택사항)

- [ ] Storybook 단위 테스트
- [X] 유효성 검증 실패에 대한 UI/UX 추가
- [X] 유효한 값 입력시 다음 필드로 Input Focusing
- [X] 카드사 선택
    - [X] 카드 번호 앞 8자리로 카드사를 추정하여 그 테마를 카드 UI에 반영한다.
    - [X] 카드사를 선택하지 않아도 모달을 닫을 수 있다.
    - [X] 카드사가 선택되고 유효한 카드 번호 16자리를 모두 입력하면, 자동으로 만료일로 focus된다.
- [X] 보안코드 툴팁
    - [X] 클릭 시, 보안코드 관련 안내 메시지를 보여준다.
    - [X] focusout 시, 툴팁이 닫힌다.
- [X] 가상 키보드
    - [X] 마스킹 처리된 값 입력시 사용
    - [X] 숫자를 랜덤으로 배열

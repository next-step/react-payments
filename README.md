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

---

# 필수 요구사항

- [ ] 원시적인 형태의 Primitive UI 형태의 컴포넌트 작성
- [x] Funnel 기반의 애플리케이션 설계
- [ ] Storybook 상호 작용 테스트
- [ ] Controlled & Uncontrolled Components를 명확하게 구분하거나 선택하여 구현

## 카드 추가

- [x] <(뒤로가기) 버튼 클릭 시, 카드 목록 페이지로 이동한다.

- [x] 카드 번호를 입력 받을 수 있다.

  - [x] 카드 번호는 숫자만 입력가능하다.
  - [x] 카드 번호 4자리마다 -가 삽입된다.
  - [x] 카드 번호는 실시간으로 카드 UI에 반영된다.
  - [x] 카드 번호는 앞 8자리만 숫자로 보여지고, 나머지 숫자는 \*로 보여진다.

- [x] 만료일을 입력 받을 수 있다.

  - [x] MM / YY 로 placeholder를 적용한다.
  - [x] 월, 년 사이에 자동으로 /가 삽입된다.
  - [x] 만료일은 실시간으로 카드 UI에 반영된다.
  - [x] 월은 1이상 12이하 숫자여야 한다.

- [x] 보안코드를 입력 받을 수 있다.

  - [x] 보안코드는 \*으로 보여진다.
  - [x] 보안코드는 숫자만 입력가능하다.

- [x] 카드 비밀번호의 앞 2자리를 입력 받을 수 있다.

  - [x] 카드 비밀번호는 각 폼마다 한자리 숫자만 입력가능하다.
  - [x] 카드 번호 입력 시, \*으로 보여진다.

- [x] 카드 소유자 이름을 입력 받을 수 있다.
  - [x] 이름은 30자리까지 입력할 수 있다.
  - [x] 이름 입력 폼 위에, 현재 입력 자릿수와 최대 입력 자릿수를 실시간으로 보여준다.
- [x] 카드 추가 완료시 카드 등록 완료 페이지로 이동한다.

---

# 개선되어야 하는 사항

각 객체(컴포넌트와 훅)들의 역할과 책임이 너무 과중하다는 느낌을 지울 수 없습니다.

## Input 핸들링 로직(useInputFields)

- 현재의 useInputFields는 여러개의 input을 관리하려는 도메인이 들어가있어 다른 Input 컴포넌트에서 범용적으로 사용이 어려워보입니다. 우선, 현재 PR에선 useInputFields를 완료한 상태로 PR을 날린 뒤, 시간이 허락하는대로 아래의 것들을 새로운 브랜치에서 다시 작업해보겠습니다.

1. useForm : 단일 Input에 대한 useForm을 구현하여 단일 Input에서 사용될 로직들을 주입할 수 있는 validation, value, onChange를 관리.
2. useAutoFocus : Atomic Pattern에 조금 더 입각하여 useForm를 각 컴포넌트 주입 후 molecule 컴포넌트 Layer에서 useAutofocus를 조합하여 이를 관리.
3. 부끄럽지만 이미 구현되어있는 input 태그 내부의 API를 전혀 고려하지 못하고 구현하였습니다. MDN을 다시 정독하며 input 태그의 API를 고려하여 다시 구현하겠습니다.

## Funnel

여러 곳에서 사용할 수 있는 형식을 취하고 TS를 잘 써보고싶은 욕심 때문에 추상화가 너무 과도하게 이루어졌습니다.
간단하게 커스텀 훅으로 관리할 수 있는 구조이지만, 타입을 주입받기 위해 불필요하게 함수의 형태를 취하게 되었고, 좋은 구조라고 말하긴 어려운 것 같습니다.(코드의 가독성이 낮고 오버엔지니어링이라는 생각을 지울 수 없는 것 같습니다.)
코드를 다시 한 번 리팩터링하며 손익을 고려해보고, 간단한 커스텀 훅으로 변경하는 것을 고려하겠습니다.

## 카드 추가 확인

- [x] 이전 폼에서 입력된 카드를 보여준다.
- [x] 카드 별칭을 입력할 수 있다.
  - [x] placeholder는 카드 별칭 (선택)이다.
  - [x] 빈 입력값인 경우, 카드사 이름이 별칭으로 저장된다.
  - [x] 최대 길이는 10자리이다.
- [x] 확인 버튼을 누르면, 카드 목록 페이지로 이동한다.

## 카드 목록

- [x] 카드 목록을 조회할 수 있다.
- [x] 카드 목록은 최신순(내림차순)으로 정렬된다.
- [x] 목록 최상단에 +을 누르면 카드 추가 페이지로 이동한다.
- [x] 카드를 클릭하면, 카드 별칭 수정(카드 추가 완료 페이지)로 이동한다.
- [ ] 카드를 삭제할 수 있다.

---

## 구현 목표

- [x] useForm을 이용하여 Input에 주입할 로직을 관리한다.
- [x] form 내부의 input값들은 하나의 해시맵에서 관리한다. useInput 단위로 추상화한다면 최상단 Layer(form)에서 각 input들의 값을 다시 동기화해야하기 때문이다.
- [x] ref는 register에서 포함하지 않는다. autoFocus를 사용하기 위해 forwardRef를 래핑해야하는데, 모든 컴포넌트에서 autoFocus를 사용하는 것은 아니기 때문이다.

---

## +a

### 1. inputAPI를 사용한다면? (추후에 코드로 구현해보기)

- constraint validation check validity override
- setCustomValidity
- https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation#complex_constraints_using_the_constraint_validation_api
- https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
- customError {@link https://developer.mozilla.org/en-US/docs/Web/API/ValidityState#customerror}

### 2. TSDoc 좋으니 잘 쓰기

```ts
/**
 * {@link HTMLElement}
 * {@link useManager}
 * @template T 어쩌고 저쩌고 타입을 위한 제네릭 {@link useManager}
 * @exampl
 * ExtractSelectors<typeof {}>
 */
```

### 3. 재남님 스터디 기회되면 참여하기

### 4. 오픈소스 참여하기

- zod
- https://blueskyproject.io/bluesky/contributing.html

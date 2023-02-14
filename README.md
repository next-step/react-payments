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
- [ ] 재사용 가능한 Component 작성

### 카드 추가

- [x] <(뒤로가기) 버튼 클릭 시, 카드 목록 페이지로 이동한다.
- [ ] 카드 번호를 입력 받을 수 있다.
  - [ ] 카드 번호는 숫자만 입력가능하다.
  - [ ] 카드 번호 4자리마다 -가 삽입된다.
  - [ ] 카드 번호는 실시간으로 카드 UI에 반영된다.
  - [ ] 카드 번호는 앞 8자리만 숫자로 보여지고, 나머지 숫자는 \*로 보여진다.
- [ ] 만료일을 입력 받을 수 있다.
  - [ ] MM / YY 로 placeholder를 적용한다.
  - [ ] 월, 년 사이에 자동으로 /가 삽입된다.
  - [ ] 만료일은 실시간으로 카드 UI에 반영된다.
  - [ ] 월은 1이상 12이하 숫자여야 한다.
- [ ] 보안코드를 입력 받을 수 있다.
  - [ ] 보안코드는 \*으로 보여진다.
  - [ ] 보안코드는 숫자만 입력가능하다.
- [ ] 카드 비밀번호의 앞 2자리를 입력 받을 수 있다.
  - [ ] 카드 비밀번호는 각 폼마다 한자리 숫자만 입력가능하다.
  - [ ] 카드 번호 입력 시, \*으로 보여진다.
- [ ] 카드 소유자 이름을 입력 받을 수 있다.
  - [ ] 이름은 30자리까지 입력할 수 있다.
  - [ ] 이름 입력 폼 위에, 현재 입력 자릿수와 최대 입력 자릿수를 실시간으로 보여준다.
- [ ] 카드 추가 완료시 카드 등록 완료 페이지로 이동한다.

### 개발하면서 생각의 흐름 기록하기

카드 번호 입력받기

- 보유 카드 리스트에서 +를 클릭해서 카드를 생성하는 페이지로 넘어갈 때 +의 영역을 텍스트가 차지하는 것보다 크게 주어 정확히 클릭하지 않아도 이동할 수 있게 했다.
- Input과 Button들을 자식으로 하는 스타일링 용도의 컨테이너가 하나 있으면 좋을 것 같다는 생각이 들었다. 그래서 Box 컴포넌트를 만들었다.
- CardBox 컴포넌트와 CardNumberInput 컴포넌트가 동일한 상태가 필요하여 그들의 부모인 CardAdd 컴포넌트에서 상태를 선언하고 props로 내려주었다.
- CardBox 컴포넌트 내부의 JSX도 컴포넌트로 빼보면 좋을 것 같은데 아직은 빼MAX_LIMIT지는 않았다.
- CardBox 컴포넌트서 카드 번호를 4개 입력하면 하이푼을 보여주는 이 로직도 `{isShowHyphen(num1, num2) && <span>-</span>}` renderHyphen(num1, num2) 이렇게 한번 더 분리할까 싶다.
- 카드 추가 페이지에 처음 들어갔을 때 카드번호에 focus가 가는게 UI/UX적으로 좋은게 맞나?
- input 검증을 JS 로직으로 하지 않고 input의 attribute인 pattern과 maxLength로 하려고 했는데 절반만 되길래... 일부는 JS 로직을 이용했다.
- 카드 번호 입력하면 실시간으로 카드 UI에 반영해줄 때 \* 별은 vertical center 하고싶은데 잘 안되서 이건 다시 스타일링 처리하자.
- 카드번호 입력할 때 4자리 입력하면 다음 인풋으로 넘기고 싶은데 일단 구현은 했는데 너무 코드가 떡인 것 같다. 고민해보자.

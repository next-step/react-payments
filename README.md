# nextstep-payments-gn0lee

## 소개

NEXTSTEP의 TDD, 클린 코드 with React 3기에서 진행하는 결제 시스템 프로젝트입니다.
<br/>
<br/>
[NEXTSTEP](https://edu.nextstep.camp)
<br/>
[과제 저장소](https://github.com/next-step/react-payments)

## 데모
[데모링크](https://codesandbox.io/p/devbox/nextstep-payments-gn0lee-rp2ly6)

## 설치 방법

```bash
npm install nextstep-payments-gn0lee # or yarn add nextstep-payments-gn0lee
```

## 사용 방법

아래의 예제 코드를 참고하여 사용하세요.

### 1. Provider 설정 및 기본 스타일 적용

라이브러리에서 제공하는 컴포넌트들은 PaymentsProvider 컴포넌트로 감싸져야 합니다.
또한, 라이브러리에서 제공하는 기본 스타일을 적용하기 위해 아래와 같이 import 해주세요.

```typescript jsx

import "nextstep-payments-gn0lee/dist/style.css";

import { PaymentsProvider } from "nextstep-payments-gn0lee";

function App() {
  return (
    <PaymentsProvider>
      <App />
    </PaymentsProvider>
  );
}

```

### 2. CardAddForm 컴포넌트 사용

라이브러리에서 제공하는 AddCardForm 컴포넌트를 사용하여 카드 정보를 입력할 수 있습니다.
form 제출시 onSubmit 함수를 통해 입력된 카드 정보를 전달 받을 수 있습니다.
onSubmit 함수 실행후 카드 목록에 입력한 카드가 추가 된 후 카드 별칭 입력 step으로 전환됩니다.

```typescript jsx

import { AddCardForm } from "nextstep-payments-gn0lee";

function App() {
  const handleSubmit = (card) => {
    // Do something
  }
  
  return (
    <AddCardForm 
      onSubmit={handleSubmit}
    />
  );
}

```

### 3. AddCardFinish 컴포넌트 사용

라이브러리에서 제공하는 AddCardFinish 컴포넌트를 사용하여 카드 별칭을 입력할 수 있습니다.
form 제출시 onUpdate 함수를 통해 수정되는 카드의 정보를 전달 받을 수 있습니다.
onUpdate 함수 실행후 카드 목록 화면으로 전환됩니다.

```typescript jsx

import { AddCardFinish } from "nextstep-payments-gn0lee";

function App() {
  const handleUpdate = (card) => {
    // Do something
  }
  
  return (
    <AddCardFinish 
      onUpdate={handleUpdate}
    />
  );
}

```

### 4. CardList 컴포넌트 사용

라이브러리에서 제공하는 CardList 컴포넌트를 사용하여 등록된 카드 목록을 확인할 수 있습니다.

카드 목록에서 카드를 선택하면 해당 카드의 별칭를 수정할 수 있는 화면으로 전환됩니다.

삭제 버튼 클릭시 onDelete 함수 실행 후 카드 목록에서 해당 카드가 삭제됩니다.

카드 추가 버튼 클릭시 카드 입력 화면으로 전환됩니다.

```typescript jsx

import { CardList } from "nextstep-payments-gn0lee";

function App() {
  const handleDelete = (card) => {
    // Do something
  }
  
  return (
    <CardList 
      onDelete={handleDelete}
    />
  );
}

```

## 전체 사용 예시

```typescript jsx

import "nextstep-payments-gn0lee/dist/style.css";

import { PaymentsProvider, AddCardForm, AddCardFinish, CardList } from "nextstep-payments-gn0lee";

function AddCard(){
  const handleSubmit = (card) => {
    console.log(card);
  }
  
  const handleUpdate = (card) => {
    console.log(card);
  }
  
  const handleDelete = (card) => {
    console.log(card);
  }

  return (
    <>
        <AddCardForm 
          onSubmit={handleSubmit}
        />
        <AddCardFinish 
          onUpdate={handleUpdate}
        />
        <CardList 
          onDelete={handleDelete}
        />
    </>
  );
}

export default function App() {
  return (
    <PaymentsProvider>
      <AddCard />
    </PaymentsProvider>
  );
}

```

## usePaymentInfo 사용 방법

usePaymentInfo는 라이브러리 사용시 필요한 정보를 조회할 수 있는 hook입니다.
PaymentsProvider로 감싸진 컴포넌트 내부에서 사용할 수 있습니다.
카드목록, initialSettings 반영 여부, 현재 스텝을 조회할 수 있습니다.

```typescript jsx

    import { usePaymentInfo } from "nextstep-payments-gn0lee";

    function App() {
      const { cardList, isInitialized, currentStep } = usePaymentInfo();
      
      return (
        <div>
          <div>카드 목록: {cardList}</div>
          <div>초기 설정 반영 여부: {isInitialized}</div>
          <div>현재 스텝: {currentStep}</div>
        </div>
      );
    }

```


## 스타일 적용 방법

각 컴포넌트는 styles prop을 통해 스타일을 적용할 수 있습니다.
styles의 필드를 통해 해당 컴포넌트 내부의 요소를 선택하여 스타일을 적용할 수 있습니다.
각 스타일은 React.CSSProperties 타입을 따릅니다.

```typescript jsx

    import { AddCardForm } from "nextstep-payments-gn0lee";

    function App() {
      const handleSubmit = (card) => {
        // Do something
      }
      
      return (
        <AddCardForm 
          onSubmit={handleSubmit}
          styles={{
            enteredCardImage: {
              container: { marginBottom: '30px' },
            },
            backButton: {
              position: 'absolute',
              left: '20px',
              top: '20px',
            },
          }}
        />
      );
    }

```

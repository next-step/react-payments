# 🚀 Getting Started
> 복잡한 흐름의 Stepper State Machine 으로 구현합니다.

- [x] 모바일 타겟의 웹 앱을 구현하며 사용하기 편리한 모바일 UI/UX에 대해 고민해봅니다.  
- [x] Stepper 기반으로 작성한 애플리케이션을 State Machine XState로 구현합니다.
  - Funnel (Funnel 기존 로직을 XState로 변경했어요.) 
- [x] 재사용 가능한 Component를 직접 작성하고 사용합니다.
- [x] Controlled & Uncontrolled Components에 입각하여 Form을 핸들링합니다.

# 📝 Requirements
### 필수 요구사항
- [x] 원시적인 형태의 Primitive UI 형태의 컴포넌트 작성
- [x] Storybook 상호 작용 테스트 
- [x] Controlled & Uncontrolled Components를 명확하게 구분하거나 선택하여 구현
- [x] 설계한 Stepper을 XState Visualizer를 활용하여 구현
### 카드 추가 확인
- [x] 이전 폼에서 입력된 카드를 보여준다.
- [x] 카드 별칭을 입력할 수 있다.
- [x] placeholder는 카드 별칭 (선택)이다.
- [x] 빈 입력값인 경우, 카드사 이름이 별칭으로 저장된다.
- [x] 최대 길이는 10자리이다.
- [x] 확인 버튼을 누르면, 카드 목록 페이지로 이동한다.
### 카드 목록
- [x] 카드 목록을 조회할 수 있다.
- [x] 카드 목록은 최신순(내림차순)으로 정렬된다.
- [x] 목록 최상단에 +을 누르면 카드 추가 페이지로 이동한다.
  - `요구사항 변경` 최하단에 카드 추가영역을 고정하고, 카드 리스트는 스크롤되도록 한다.  
- [x] 카드를 클릭하면, 카드 별칭 수정(카드 추가 완료 페이지)로 이동한다.
- [x] 카드를 삭제할 수 있다.


# 📚 리뷰 개선 사항
### 코드 구조 및 순서
- [x] 코드를 절차적으로 순서를 변경했어요.
  - 파일 내 먼저 사용되는 함수를 상단으로 이동했어요.
- [x] 관심사의 사용 범위가 다른 파일은 관심사에 맞게 분류한다.
  - Card 도메인 코드는 src/card 폴더로 분리했어요.
- [x] shared 폴더는 barrel 적용하여, re-export 한다.
- [x] provider 코드는 폴더를 별도로 분리한다.

### 컴포넌트 및 UI
- [x] 컴포넌트는 활용 용도에 맞게 Storybook 테스트를 작성한다.
  - Flex, Stack, Grid 등 컴포넌트 역할에 충족하도록 작성했어요.
- [x] CardInput 컴포넌트는 도메인을 제거한다.
  - Card에 종속되었던 Input 컴포넌트를 개선했어요.
    - FormatInput
    - PinInput
- [x] AppLayout -> AppDisplay 로 네이밍 변경한다.
- [x] CardDisPlay 컴포넌트의 expiration props는 내부에서 분리한다.
- [x] UI에서 사용하는 props는 행위에 맞게 네이밍한다.
- [x] 컴포넌트의 return 상위에는 개행을 추가한다.

### 함수 및 변수 네이밍
- [x] handle, on, submit, change 등의 이벤트 핸들러는 명확한 용도를 가지고 있어야 한다.
- [x] ~is prefix 네이밍은 함수에 대한 Boolean 값을 반환한다.
- [x] 함수는 is prefix, 변수는 ~ed suffix를 사용했어요.

### 타입 및 유틸리티
- [x] HTML tag 자체 node 타입의 정의는 제거한다. (button type)
- [x] Pick, Omit 유틸리티 타입은 적합한 상황에 맞게 사용한다.
- [x] 반복되는 타입은 축약해서 활용한다. | grid${'Gap'| 'RowGap' | '...'}
- [x] 형식이 정해져있는 값은 타입을 명확하게 정의한다. CardNumber, ExpirationDate, SecurityCode, Password

### Hooks
- [x] hooks의 반환 값은 도메인을 포함하지 않고, 최대한 단순하게 유지한다.
- [x] value, selected
- [x] 하나의 hook에 너무 많은 역할을 부여하지 않는다.

### 기타
- [x] letterSpacingValue의 fontSize에 대한 수치 변환에 대한 검증을 추가한다.
- [x] 사용하지 않는 불필요한 코드는 제거한다.
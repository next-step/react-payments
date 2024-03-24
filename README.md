# Payments App & components

<br/>

## Getting Started

You can also see detailed docs and components through [this storybook](https://65e6646cccf98da794739e61-dgflgcqxzn.chromatic.com/?path=/docs/getting-started--docs)

<br/>

### Requirements

```json
"node": ">=20"

"peerDependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

### Installaion


```bash
npm install @sxungchxn/react-payments

yarn install @sxungchxn/react-payments

pnpm install @sxungchxn/react-payments
```

<br/>

### Setup

It is required to import style sheet before using app/components as below.


```tsx
import '@sxungchxn/react-payments/styles'

...

import { ... } from '@sxungchxn/react-payments'
```

<br/>

### Usage

- **Remember that setup step is required before usage.**

```tsx
/* Using payments app */
import { PaymentsApp } from '@sxungchxn/react-payments'

/* you can manage layout given payments-app by using basic props or passing stylesheet */
<PaymentsApp width="450px" height="100%" className="..." />


/* Using components */
import { Text, Flex } from '@sxungchxn/react-payments'

/* Using theme */
import { vars } from '@sxungchxn/react-payments'
```

<br/>

### Tech stacks

- `vanilla-extract` : type-safe & zero run-time css
- `xstate` : implementing payments flow in intutive way
- `storybook` : component, payments app docs
- `vite` : easy & quick bundler tool
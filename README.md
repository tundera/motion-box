# `motion-box`

A super simple abstraction of Chakra UI's `Box` component, enhanced with Framer Motion props from the `motion` API.

## Install

> This packages requires Chakra UI and its peer dependencies. If you haven't installed Chakra UI in your project, find the necessary pacakges [here](https://chakra-ui.com/docs/getting-started#installation).

Using npm:

```node
npm install motion-box
```

Using yarn:

```node
yarn add motion-box
```

## Usage

```tsx
import MotionBox from 'motion-box';

function Example() {
  return (
    <MotionBox
      height="40px"
      bg="red.300"
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    />
  );
}
```

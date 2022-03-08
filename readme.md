## Tailwin-rn

**[Getting Started](https://github.com/vadimdemedes/tailwind-rn#getting-started)**


↓ What's next?

  1. Run tailwind-rn in development mode:
```cli
$ yarn dev:tailwind
```
  2. Import TailwindProvider and tailwind.json in the root of your app
```js
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
```
  3. Wrap the root of your app into TailwindProvider:
```jsx
<TailwindProvider utilities={utilities}>
   <MyComponent/>
</TailwindProvider>
```
  4. Use Tailwind
```jsx
import {useTailwind} from 'tailwind-rn';
const MyComponent = () => {
  const tailwind = useTailwind();
  return <Text style={tailwind('text-blue-600')}>Hello world</Text>;
};
```

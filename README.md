# p5.starter

a quick starter template for p5.js with typescript and vite.

## usage

`npm install` then `npm run dev` to preview.

## (bonus) resizer

resize canvas automatically on window `resize` events.

uses `window.visualViewport` if available, otherwise `window`

import `resizer` in `util/resize/resize.ts`, and use `resizer.p5(p: p5)`.
if you want to perform something additional on resize, pass a function to second argument.

```typescript
import { resizer } from "./util/resize/resize";

resizer.p5(p, () => console.log('resized!'))
```

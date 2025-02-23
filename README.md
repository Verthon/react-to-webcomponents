# Transforming React 18 Component into Web Component

Folders

- client - Vue 3 with Rsbuild based on <https://vue-loader.vuejs.org/> unable to run web-component
- client-vue - Vite based Vue 3 SPA which gets and renders correctly web-component react-app
- widget - react app which exposes the react-app inside using index.js

## Client - Widget communication

- window based or something else ?

## Styling problems

- shadow root or not ? Shadow-root with variant "open" will allow to fully (almost, you need to reset inheritance) isolate the styles

## Performance issues

- currently with `react-to-webcomponent` I'm forced to create one JS chunk with everything bundled together
  - most likely we could try to add chunks imperatively in web-component lifecycle however it is problematic due to random names for the async chunks

## React 18 problems with web-components

Previously React treated all unknown properties as attributes - so only strings allowed (attributes in html can be only strings)
<https://jakearchibald.com/2024/attributes-vs-properties/>

Wrapper for web-components to use it easily in react <https://www.npmjs.com/package/@microsoft/fast-react-wrapper>

## Things to cover

- find the limitations of `react-to-webcomponent` library
- events
- theming from outside
- way for web-component to encapsulate styles (shadow dom with randomized classes)
- error handling on the widget side
- logs when things go wrong (only when client explicitly add config to do so, to not bloat their console)
- add react client (React 17/18 and React 19)
- do we need versioning ?

## UX issues

- Layout shift - when widget is being loaded
- accessibility issues <https://www.matuzo.at/blog/2023/pros-and-cons-of-shadow-dom/>

## Browsers support

Declarative shadow-dom doesn't support iOS 15 <https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals#browser_compatibility>

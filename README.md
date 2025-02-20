# Transforming React 18 Component into Web Component

Folders

- client - Vue 3 with Rsbuild based on <https://vue-loader.vuejs.org/> unable to run web-component
- client-vue - Vite based Vue 3 SPA which gets and renders correctly web-component react-app
- widget - react app which exposes the react-app inside using index.js

## React 18 problems with web-components

Previously React treated all unknown properties as attributes - so only strings allowed (attributes in html can be only strings)
<https://jakearchibald.com/2024/attributes-vs-properties/>

Wrapper for web-components to use it easily in react <https://www.npmjs.com/package/@microsoft/fast-react-wrapper>

## Things to cover

- events
- theming from outside
- way for web-component to encapsulate styles
- error handling on the widget side
- add react client (React 17/18 and React 19)

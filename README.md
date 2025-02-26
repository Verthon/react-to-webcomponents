# Transforming React 18 Component into Web Component

## Guiding principles

- as small changes/config on the client possible
- full styling encapsulation (widget cannot break the host in terms of CSS)
- secure
- with as small as possible layout shifts when mounting
- works with any frontend framework
- should be easily added to the part of the host page, whenever they point
- white-labelling parts like Zendesk in terms of theming it to match host application look and feel

Folders

- client - Vue 3 with Rsbuild based on <https://vue-loader.vuejs.org/> unable to run web-component
- client-vue - Vite based Vue 3 SPA which gets and renders correctly web-component react-app
- widget - react app which exposes the react-app inside using index.js

## Client - Widget communication

- window based or something else ?
  - when to attach public API on window ?
  - white labeling components for theming
- is this component ready ? How to make sure client can use our public API without any problem

## Styling problems

- shadow root or not ? Shadow-root with variant "open" will allow to fully (almost, you need to reset inheritance) isolate the styles
- should widget respect global host zoom and font-size ? - scaling rems of our widget

## Performance issues

- currently with `react-to-webcomponent` I'm forced to create one JS chunk with everything bundled together
  - most likely we could try to add chunks imperatively in web-component lifecycle however it is problematic due to random names for the async chunks
- how will parent app component rerenders, remounts etc affect widget ?

## React 18 problems with web-components

Previously React treated all unknown properties as attributes - so only strings allowed (attributes in html can be only strings)
<https://jakearchibald.com/2024/attributes-vs-properties/>

Wrapper for web-components to use it easily in react <https://www.npmjs.com/package/@microsoft/fast-react-wrapper>

## Things to cover

- find the limitations of `react-to-webcomponent` library for transforming React 18/19 components to web-component
- events, communication between client and the widget (change theme, change locale, remove widget, show, hide)
- theming from the client perspective
- way for web-component to encapsulate styles (shadow dom with randomized classes)
- error handling on the widget side
- logs when things go wrong (only when client explicitly add config to do so, to not bloat their console)
- add react client (React 17/18 and React 19)
- do we need versioning on the widget side ?
  - evergreen feels the best (ideally specify when breaking change may be introduced)
  - semantic-versioning (not so suitable, maintenance overhead)
  - host-defined (probably hard to coordinate)
- how we make sure that client is authenticated ? We can't let him the chunks if invalid api-key or whatever that authenticates them
- authorization

## UX issues

- Layout shift - when widget is being loaded
- accessibility issues <https://www.matuzo.at/blog/2023/pros-and-cons-of-shadow-dom/>

## Browsers support

Declarative shadow-dom doesn't support iOS 15 <https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals#browser_compatibility>

## Current public API

Client integration

1. Add script to the HTML  <script async type="module" src="http://address-here.domain/index.js?key=YOUR_KEY" data-key="ALTERNATIVELY_YOUR_KEY"></script>
2. (Optional) Before web-component is rendered configure theme -> window.wt.configureTheme({ colors: { primary: "red" }, fontFamily: 'Poppins' //etc });
3. Use web-component in the framework <react-app></react-app>

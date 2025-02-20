import React from 'react';
import ReactDOM from 'react-dom/client';
import r2wc from "react-to-webcomponent"

import App from './App';

export const AppWBC = r2wc(App, React, ReactDOM)

customElements.define("react-app", AppWBC)
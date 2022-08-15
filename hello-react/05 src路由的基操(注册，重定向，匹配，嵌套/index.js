//引入核心库
import React from 'react'
import {  HashRouter } from "react-router-dom";

//react18 渲染挂载组建的api变成了createroot
import { createRoot } from 'react-dom/client';
import App from './App'

const container = document.getElementById('root')
createRoot(container).render(<HashRouter><App /></HashRouter>)
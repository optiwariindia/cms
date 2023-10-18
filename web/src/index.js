import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "./styles/global.scss";
import RouteList from './routes/RouteList';
(() => {
    let rootElement = document.getElementById('root');
    if (!rootElement) {
        rootElement = document.createElement("div");
        rootElement.setAttribute("id", "root");
        document.body.appendChild(rootElement)
    }
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <RouteList />
            </BrowserRouter>
        </React.StrictMode>
    );
})();
import React from "react";
import './App.css';
import {Header} from "./components/layout/Header";
import {Footer} from "./components/layout/Footer";
import {AppRouter} from "./router/AppRouter";

export const App = () => {
  return (
    <div className="App">
        <Header/>
        <div className="app-container">
            <AppRouter  />
        </div>
        <Footer/>
    </div>
  );
}
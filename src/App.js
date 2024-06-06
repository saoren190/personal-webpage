import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="content">
                {/*<Sidebar />*/}
                <MainContent />
            </div>
        </div>
    );
}

export default App;

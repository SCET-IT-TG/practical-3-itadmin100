import React from 'react';
import Counter from './components/Counter';
import TweetInput from './components/TweetInput';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>React Components Demo</h1>
            <Counter />
            <TweetInput />
            <ThemeSwitcher />
        </div>
    );
}

export default App;
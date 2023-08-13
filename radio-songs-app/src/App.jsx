import React from 'react';
import './App.css';
import Header from './components/Header'
import SongList from './components/songs/SongList'
import SongRequestForm from './components/songs/SongRequestForm'

function App() {
    const songs = [
        {
            id: 1,
            name: 'Bohemian Rhapsody',
            artist: 'Queen',
            genre: 'Рок',
        },
        {
            id: 2,
            name: 'Shape of You',
            artist: 'Ed Sheeran',
            genre: 'Поп',
        },
        {
            id: 3,
            name: 'Uptown Funk',
            artist: 'Mark Ronson ft. Bruno Mars',
            genre: 'Поп',
        },
        {
            id: 4,
            name: 'Rolling in the Deep',
            artist: 'Adele',
            genre: 'Блюз',
        },
        {
            id: 5,
            name: 'Blinding Lights',
            artist: 'The Weeknd',
            genre: 'Поп',
        },
    ];

    return (
        <div className='App'>
            <Header />
            <div className='container'>
                <SongRequestForm />
                <SongList songs={songs} />
            </div>
        </div>
    );
}

export default App;
import React, {useState} from 'react';
import './App.css';
import Header from './components/Header'
import SongList from './components/songs/SongList'
import SongRequestForm from './components/songs/SongRequestForm'

const DEFAULT_SONGS = [
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


function App() {
    const [prevSongs, setSongs] = useState(DEFAULT_SONGS)

    const AddSong = (song) => {
        const newSong = {...song,
            'id': Math.random().toString()}
        setSongs([...prevSongs, newSong])
    }

    return (
        <div className='App'>
            <Header />
            <div className='container'>
                <SongRequestForm OnNewSong={AddSong}/>
                <SongList songs={prevSongs} />
            </div>
        </div>
    );
}

export default App;
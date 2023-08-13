import React from 'react';
import './App.css';

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

function Header() {
    return (
        <div className='header'>
            <h1>Заявки на Радио</h1>
            <p>Отправляйте заявку и мы сыграем вашу любимую песню!</p>
        </div>
    );
}

function SongRequestForm() {
    return (
        <form className='song-request-form'>
            <input type='text' placeholder='Название песни' />
            <input type='text' placeholder='Исполнитель' />
            <select>
                <option value='Поп'>Поп</option>
                <option value='Рок'>Рок</option>
                <option value='Джаз'>Джаз</option>
                <option value='Блюз'>Блюз</option>
                <option value='Рэп'>Рэп</option>
                <option value='Шансон'>Шансон</option>
                <option value='Электроника'>Электроника</option>
                <option value='Кантри'>Кантри</option>
                <option value='Регги'>Регги</option>
                <option value='Фолк'>Фолк</option>
                <option value='Классика'>Классика</option>
            </select>
            <button type='submit'>Отправить</button>
        </form>
    );
}

function SongList({ songs }) {
    return (
        <div className='song-list'>
            <SongItem song={songs[0]} />
            <SongItem song={songs[1]} />
            <SongItem song={songs[2]} />
            <SongItem song={songs[3]} />
            <SongItem song={songs[4]} />
        </div>
    );
}

function SongItem({ song }) {
    return (
        <div className='song-item'>
            <span>{song.name}</span>
            <span>{song.artist}</span>
            <span>{song.genre}</span>
        </div>
    );
}

export default App;
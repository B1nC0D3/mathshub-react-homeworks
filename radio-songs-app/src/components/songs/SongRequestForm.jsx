import React, {useState} from "react";

function SongRequestForm({OnNewSong}) {
    const [enteredSongName, setSongName] = useState('')
    const [enteredArtistName, setArtistName] = useState('')
    const [enteredGenre, setGenre] = useState('Поп')

    const NameChangeHandler = (e) => {
        setSongName(e.target.value)
    }

    const ArtistNameChangeHandler = (e) => {
        setArtistName(e.target.value)
    }

    const GenreChangeHandler = (e) => {
        setGenre(e.target.value)
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
        const newSong = {
            'name': enteredSongName,
            'artist': enteredArtistName,
            'genre': enteredGenre
        }
        OnNewSong(newSong)
        setGenre('Поп')
        setSongName('')
        setArtistName('')
    }

    return (
        <form className='song-request-form' onSubmit={SubmitHandler}>
            <input type='text' placeholder='Название песни'
                   value={enteredSongName}
                   onChange={NameChangeHandler}/>
            <input type='text' placeholder='Исполнитель'
                   value={enteredArtistName}
                   onChange={ArtistNameChangeHandler}/>
            <select value={enteredGenre} onChange={GenreChangeHandler}>
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

export default SongRequestForm
import React from "react";

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

export default SongRequestForm
import React from "react";
import './ThemeToggle.css'

function ThemeToggle() {

    function getTheme() {
        return localStorage.getItem('theme')
    }
    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
    }

    function toggleTheme() {
        if (getTheme() === 'light-theme') {
            setTheme('dark-theme')
            return
        }
        setTheme('light-theme')
    }

    return (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label
            className='theme-toggle'>
            <input
                type="checkbox"
                defaultChecked={() => getTheme() === 'light-theme'}
                onChange={toggleTheme}
            />
            <div />
        </label>
    )
}

export default ThemeToggle
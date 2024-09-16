import React from 'react';
import './App.css';
import Profile from './components/Profile';
import profileImage from './imgs/profile_pic.jpg'

function App() {
    const userData = {
        userName: 'Кирилл',
        userBio: 'Меня зовут Кирилл, мне 23 года. Люблю играть на гитаре, погромировать и несмешные анекдоты.',
        userHobbies: 'Гитара, программирование, различные игры',
        userCitation: 'В это вашем интернете хрен поймешь, кто прикалывается, а кто реально дебил',
        userImage: profileImage,
    };
    return (
        <main>
            <Profile userName={userData.userName}
                     userBio={userData.userBio}
                     userHobbies={userData.userHobbies}
                     userCitation={userData.userCitation}
                     userImage={userData.userImage}
            />
        </main>
    );
}

export default App;

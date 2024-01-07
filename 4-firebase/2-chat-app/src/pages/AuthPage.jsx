import { auth, provider } from '../firebase/config';
import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

const AuthPage = () => {
  // giriş butonuna tıklanınca
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {});
  };

  return (
    <div>
      <div>
        <h1>Chat Odası</h1>

        <p>Devam Etmek İçin Giriş Yapın</p>

        <button onClick={handleClick}>Google ile Gir</button>
      </div>
    </div>
  );
};

export default AuthPage;

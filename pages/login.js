import Layout from '../components/Layout'
import { useState } from 'react'
import Router from 'next/router'
import { setCookie } from 'nookies'
import { useContext } from 'react';
import UserContext from '../contexts/user';

export default function Login() {
  const [userData, setUser] = useContext(UserContext);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  async function handleLogin() {
    const loginInfo = {
        identifier: username,
        password: password
    }
    console.log(loginInfo)
    // const login = await fetch(`http://localhost:1337/auth/local`, {
    //     method: "POST",
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(loginInfo)
    // })
    // const loginResponse = await login.json();
    // console.log(loginResponse)
    // setCookie(null, 'jwt', loginResponse.jwt , {
    //     maxAge: 30 * 24 * 60 * 60,
    //     path: '/',
    // })
    setUser(loginInfo)
    Router.push('/profile')
  }
  return (
    <Layout>
      <div className="login_form">
        <h3>Авторизация</h3>
        <input id="login" type="text" placeholder="Логин" 
          onChange={e => setUsername(e.target.value) } value={username}></input>
        <input id="password" type="password" placeholder="Пароль"
          onChange={e => setPassword(e.target.value) } value={password}></input>
        <button className="action_button green_button login_button" 
          onClick={() => handleLogin() }>Войти</button>
      </div>
      <style jsx>{`
        input {
          background: #ffffff;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
          border-radius: 1.8rem;
          width: 20%;
          border: none;
          margin: 0.5rem;
          outline: none;
          padding: 0.4rem;
          padding-left: 0.9rem;
          color: rgba(51, 51, 51, 0.5);
        }
        input::placeholder {
          color: rgba(51, 51, 51, 0.5);
        }
        .login_form {
          background-color:#F8F8F8;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .login_form > * {
          margin: 10px;
        }
        h3 {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 24px;
          color: #333333;
        }
        @media screen and (max-width: 1000px) {
          input {
            width: 40%;
          }
        }
      `}</style>
    </Layout>
  )
}

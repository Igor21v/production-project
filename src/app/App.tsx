import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { AppRouter } from './providers/router'

export default function App() {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter/>
    </div>
  )
}

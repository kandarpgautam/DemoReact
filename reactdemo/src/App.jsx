import { useEffect, useState } from 'react';
import './App.css';
import WeatherForecast from './WeatherForecast.jsx'
import { Nav, Bio,Gallery } from './components'


const App = () => {
    const contents =
        <>
            <Nav />
            <div className="container">

                <Bio />
                <Gallery />
                <WeatherForecast />
            </div>
        </>
    return (
        contents
    )
}

export default App;
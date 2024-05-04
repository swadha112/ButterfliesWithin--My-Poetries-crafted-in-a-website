import React from 'react';
import './App.css'; 
import Navbar from './components/navbar';

const App = () => {
    return (
        <div className="app">
          <Navbar/>
            <div className="dashboard">
                <img src="/src/assets/butterflieswithin.gif" alt="GIF" className="media" />
                <div className="text-right">
                    <h2>TO CRAFT EVERLASTING WORKS OF ART</h2>
                    <h1 ><b>Butterflies Within: Verses Unfold in the Heart's Garden</b></h1>
                    <div className="verse">
                    <p>In the quiet rustle of the soul's garden,</p>
                    <p>Where whispers of words dance like butterflies,</p>
                    <p>Let your heart wander among our verses,</p>
                    <p>A sanctuary of dreams and vibrant skies.</p>
                    </div>
                </div>
            </div>
            <div className="artist">
            <div className="text-left">
                    <h2>ABOUT THE ARTIST</h2>
                    <h1>Swadha Khatod</h1>
                </div>
                <img src="/src/assets/artist.gif" alt="GIF" className="media" />
            </div>
        </div>
    );
};

export default App;

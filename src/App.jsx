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
            <div >
                    <h2>ABOUT THE ARTIST</h2>
                    <h1>Swadha Khatod</h1>
                    <div className="verse">    
                    <p>Over the past decade, I have journeyed through the landscapes of love, the wilderness of friendship, the shadows of fear, the warmth of family, and the profound silence of death. In the depths of despair and the quiet moments of joy, I found my voice and poured it into these poems. This collection is not just a chronicle of time but a map of my heart’s most secret chambers. Each poem is a thread of my being, spun from the raw fibers of my experiences and dreams.</p>
                    <ul>Here, you will find:</ul>
                    <li>Love poems that capture the ache and elation of romance.</li>
                    <li>Verses of friendship that speak to the bonds that hold us together.</li>
                    <li>Lines that delve into the depths of fear and the courage it births.</li>
                    <li>Reflections on family, the roots and branches of our lives.</li>
                    <li>Meditations on death, the final horizon, and the mysteries it holds.</li>
                    <li>Insights into the shadows of depression and the light that struggles to break through.</li>
                    <p>These poems are my most treasured possessions, fragments of my spirit laid bare. I invite you to wander through them, to find solace, to feel understood, and perhaps to discover a piece of your own soul in these words.</p>
                    <p>Come, immerse yourself in the tapestry of my thoughts and emotions. Let these poems be a bridge between my heart and yours.</p>
                    </div>
                    </div>
                    
            </div>
        </div>
    );
};

export default App;

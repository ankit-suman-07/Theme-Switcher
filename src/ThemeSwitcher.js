import React, { useState } from 'react';
import "./ThemeSwitcher.css";

const dark = {
    buttonDiv: {
        backgroundColor: '#282832',
        borderBottom: '3px solid #ffff',
    },
    navStyles: {
        backgroundColor: '#282832',
        border: '1px solid #282832',
        color: '#D7D2B5',
      },
    content: {
        backgroundColor: "#4D5360",
    },
    h3: {
        color: "#FF6B6B",
        borderBottom: "3px solid #D7D2B5",
    },
    p: {
        color: "aliceblue",
    },
    footer: {
        backgroundColor: "#39414A",
        color: "#D7D2B5",
    }
};


const light = {
    buttonDiv: {
        backgroundColor: '#D7D2B5',
        borderBottom: '3px solid #333333',
    },
    navStyles: {
        backgroundColor: '#D7D2B5',
        border: '1px solid #D7D2B5',
        color: '#282832',
      },
    content: {
        backgroundColor: "#ffff",
    },
    h3: {
        color: "#FF6B6B",
        borderBottom: "3px solid #333333",
    },
    p: {
        color: "#777A8B",
    },
    footer: {
        backgroundColor: "#39414A",
        color: "#ffff",
    }
};

const blue = {
    buttonDiv: {
        backgroundColor: '#4D5360',
        borderBottom: '3px solid #ffff',
    },
    navStyles: {
        backgroundColor: '#4D5360',
        border: '1px solid #4D5360',
        color: '#D7D2B5',
      },
    content: {
        backgroundColor: "#777A8B",
    },
    h3: {
        color: "#ffff",
        borderBottom: "3px solid #FF6B6B",
    },
    p: {
        color: "#FFFFFF",
    },
    footer: {
        backgroundColor: "#4D5360",
        color: "#D7D2B5",
    }
};

const red = {
    buttonDiv: {
        backgroundColor: '#C07562',
        borderBottom: '3px solid #ffff',
    },
    navStyles: {
        backgroundColor: '#C07562',
        border: '1px solid #C07562',
        color: '#ffff',
      },
    content: {
        backgroundColor: "#ffff",
    },
    h3: {
        color: "#777A8B",
        borderBottom: "3px solid #222222",
    },
    p: {
        color: "#222222",
    },
    footer: {
        backgroundColor: "#C07562",
        color: "#333333",
    }
};

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(light);

    return (
        <div className='theme-box'>
            <div className='btn-div'   style={theme.buttonDiv}>
                <button className='theme-btn dark'  onClick={() => setTheme(dark)}  ></button>
                <button className='theme-btn light'  onClick={() => setTheme(light)} ></button>
                <button className='theme-btn blue'  onClick={() => setTheme(blue)} ></button>
                <button className='theme-btn red'  onClick={() => setTheme(red)} ></button>
            </div>
            <div className='nav'   style={theme.navStyles}>
                <ul className='nav-list' >
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className='content' style={theme.content}>
                <div className='title' >
                    <h3  style={theme.h3} >Theme-Switcher</h3>
                </div>
                <div className='main-content' >
                    <p  style={theme.p} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className='footer'  style={theme.footer} >
                A theme-switcher website
            </div>

        </div>
    );
}

export default ThemeSwitcher;
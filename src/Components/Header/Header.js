import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(true);
    return (
        <div>
            <nav className='navigation-container'>
                <div className='logo'>
                    <h2>QuizGig</h2>
                </div>
                <div className={`link-container ${open ? 'css1' : 'css2'}`} >
                    <Link to='/topics'>Topics</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='./blog'>Blog</Link>
                </div>
                <div className='icons' onClick={() => { setOpen(!open) }}  >
                    {
                        open ? <Bars3Icon /> : <XMarkIcon />
                    }
                </div>
            </nav>
            <div className='header-banner'  >
                <div className='Header-text'>
                    <h2>Web Development Quizzes & Trivia</h2>
                    <p>Quiz Maker   ›   Create Quiz   ›   Online Quizzes   ›   Computer   ›
                        Internet   ›  Web Development Web Development Quizzes & Trivia
                        The internet connects everyone nowadays and web development is a huge part 
                         of our society.  Our trivia 
                           on web development has questions about every aspect concerning web 
                            development nowadays and will test your knowledge on the matter. Can 
                             you face all these questions?  <Link to='/'>Learn More....</Link> </p> 
                             
                            
                             <div className='banner-link'>
                             <button>Let's Try</button>
                            
                             </div>
                </div>
                
            </div>


        </div>
    );
};

export default Header;
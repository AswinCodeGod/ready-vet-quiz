import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Main() {

    // reference for input in form
    const inputRef = useRef(null)

  return (
    
    <div className='body'>
        <header>
            <h3>ReadyVet®</h3>
            <nav>
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li><button>Log In</button></li>
                    <li><button>Sign Up</button></li>
                </ul>

                <div class="hamburger-container">
                    <input id="toggle" type="checkbox"></input>
                    <label for="toggle" class="hamburger">
                        <div class="top-bun"></div>
                        <div class="meat"></div>
                        <div class="bottom-bun"></div>
                    </label>
                </div>
            </nav>
        </header>
        <div className='container'>
            <h1 className='title text-light'>Vet Question Bank 1</h1>

            <ol>
                <li>10 Vet Questions in this Question Bank</li>
                <li>Multiple Choice Question</li>
                <li>View Results and Stats at the end</li>
                <li>Press 'Start Quiz' to begin</li>
            </ol>

            <form id='form'>
                <input ref={inputRef} type="text" placeholder='Username*' />
            </form>

            <div>
                <Link className='btn' to={'quiz'}>Start Quiz</Link>
            </div>
        </div>
    </div>
  )
}

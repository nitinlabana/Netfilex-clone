import React from 'react'

function Header() {
    return (
        <>
            <div className="header-content">
                <h1>Laughter. Tears. Thrills. Find it all on Netflix.</h1>
                <h3>Endless entertainment starts at just ₹ 149. Cancel anytime.</h3>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <form className='email-signup' >
                <input  type="email" placeholder='Email Adderss' required/>
                <button type='submit'>Get Started</button>

                </form>
            </div>
        </>
    )
}

export default Header
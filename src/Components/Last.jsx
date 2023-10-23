import React from 'react'

function Last() {
    return (
        <>
            <div className="faq">
                <h2>Frequently Asked Questions</h2>
                <ul className="accordion">
                    <li>
                        <input type="radio" name='accordion' id='first' />
                        <label for='first'>What is Netflix?</label>
                        <div className="content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis alias dolore quaerat vel tenetur expedita hic quia provident? Cumque, incidunt? Placeat quos sed debitis libero tenetur reiciendis dolorum molestiae deserunt?</p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name='accordion' id='second' />
                        <label for='second'>How much does Netflix cost?</label>
                        <div className="content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis alias dolore quaerat vel tenetur expedita hic quia provident? Cumque, incidunt? Placeat quos sed debitis libero tenetur reiciendis dolorum molestiae deserunt?</p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name='accordion' id='third' />
                        <label for='third'>Where can I Watch</label>
                        <div className="content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis alias dolore quaerat vel tenetur expedita hic quia provident? Cumque, incidunt? Placeat quos sed debitis libero tenetur reiciendis dolorum molestiae deserunt?</p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name='accordion' id='fourth' />
                        <label for='fourth'>How do I cancel</label>
                        <div className="content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis alias dolore quaerat vel tenetur expedita hic quia provident? Cumque, incidunt? Placeat quos sed debitis libero tenetur reiciendis dolorum molestiae deserunt?</p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name='accordion' id='fifth' />
                        <label for='fifth'>What can I watch on </label>
                        <div className="content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis alias dolore quaerat vel tenetur expedita hic quia provident? Cumque, incidunt? Placeat quos sed debitis libero tenetur reiciendis dolorum molestiae deserunt?</p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name='accordion' id='sixth' />
                        <label for='sixth'>IS Netflix good for kids?</label>
                        <div className="content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis alias dolore quaerat vel tenetur expedita hic quia provident? Cumque, incidunt? Placeat quos sed debitis libero tenetur reiciendis dolorum molestiae deserunt?</p>
                        </div>
                    </li>
                </ul>
                <small>Ready to watch? Enter your email to create or restart your membership.</small>
                <form className='email-signup' >
                <input type="email" placeholder='Email Adderss' required/>
                <button type='submit'>Get Started</button>

                </form>
            </div>
        </>
    )
}

export default Last
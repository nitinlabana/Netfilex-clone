import React from 'react'
// import logo from './netfilxphoto/logo.png'

function Signup() {
 return (
       <>
       {/* <h1>hello world</h1> */}
         {/* <div className="logo">
                <img src={logo} alt="" />
            </div> */}

            <div className="container">
                <h1>Sign In</h1>
                <div className="form">
                    <input type="email" placeholder="Email or phone number" />
                    <input type="password" placeholder="Password" />
                    <input type="submit" value="Sign In" />
                    <input type="checkbox" />
                    <label>Remember me</label>
                    <a href="need">Need help?</a>
                </div>
                <div className="content">
                    <h2>New to Netflix? <a href="sign">Sign up now.</a> </h2>
                    <h2>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</h2>
                </div>
            </div> 
            {/* <!-- Scrollable modal --> */}
{/* <div class="modal-dialog modal-dialog-scrollable">
  ...
</div> */}
        </>

    )
}

export default Signup
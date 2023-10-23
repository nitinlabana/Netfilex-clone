import React from 'react'

function Footer() {
  return (
    <>
      <div className="footer">
        <h2>Question? call 000-000-000-000</h2>

        <div className="row">
          <div className="col">
            <a href='FAQ'>FAQ</a>
            <a href='Inverstore Relations'>Inverstore Relations</a>
            <a href='Privacy'>Privacy</a>
            <a href='Speet Test'>Speet Test</a>
          </div>
          <div className="col">
            <a href='Help Centra'>Help Centra</a>
            <a href='Job'>Job</a>
            <a href='Cookies Preferences'>Cookies Preferences</a>
            <a href='Legal Notices'>Legal Notices</a>
          </div>
          <div className="col">
            <a href='Account'>Account</a>
            <a href='Ways to Watch'>Ways to Watch</a>
            <a href='Pcorporate Information'>Pcorporate Information</a>
            <a href='Only on NetFlix'>Only on NetFlix</a>
          </div>
          <div className="col">
            <a href='Media'>Media</a>
            <a href='erms of us'>Terms of use</a>
            <a href='ontact'>contact</a>

          </div>
        </div>
        <button className='language-btn'>English</button>
        <p className='copyright-txt'>Netflix India</p>
      </div>
    </>
  )
}

export default Footer
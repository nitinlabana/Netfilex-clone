import React from 'react'
import one from '../netfilxphoto/one.png'
import two from '../netfilxphoto/two.png'
import three from '../netfilxphoto/three.png'
import four from '../netfilxphoto/four.png'


function Homepage() {
  return (
    <>
      <div className="features">
        <div className="row">
          <div className="text-col">
            <h2>Enjoy on your TV</h2>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <div className="img-col">
            <img src={one} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="img-col">
            <img src={two} alt="" />
          </div>
          <div className="text-col">
            <h2>Download your shows to watch offline</h2>
            <p>Save your favourites easily and always have something to watch.</p>
          </div>
        </div>
        < div className="row">
            <div className="img-col">
              <img src={three} alt="" />
            </div>
          <div className="text-col">
            <h2>Watch everywhere</h2>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
        </div>
        <div className="row">
          <div className="img-col">
            <img src={four} alt="" />
          </div>
          <div className="text-col">
            <h2>Create profiles for kids</h2>
            <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
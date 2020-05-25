import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Curious about technology, passionate about music and fascinated by Japanese culture: three points that define the person and professional that I am.</p>
                    <p>More than 9 years of experience in software development, Web applications, APIs, back-end systems, analysis and troubleshooting and process automation.</p>
                    <p>In those years, I have been working with Go, Grails, JavaScript (Node, ES6, React) and PHP programming languages, MySQL database, MongoDB and Oracle SQL, agile Scrum methodology.</p>
                    <p>Music follows me since I was a child; studious guitarist; music producer and composer.</p>
                    <p>Sansei, first literated in Japanese in a significant experience lived in Japan from 5 to 8 years old, which connected me forever to this culture that is part of me. Since then, Japanese has been my second language, although the love for the country has established it as the first; I have been in contact with the language through manga, anime and visits to the country, reviving my memories and getting closer to my roots. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about" data-section="expertise">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development</h3>
                    <p>I have experience building web applications, design and development of Restful API using Go, JavaScript, NodeJS and PHP.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>As coming from the Computer Science background, I have good grasp over fundamental concepts of Data Structure and Algorithms.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-music2" />
                </span>
                <div className="desc">
                    <h3>Music Production</h3>
                    <p>I have experience producing and composing music and background music for videos in general available in my YouTube Channel <a href="https://www.youtube.com/c/YoshiStudios" target="_blank" rel="noopener noreferrer" >Yoshi Studios</a></p>
                </div>
                </div>
            </div>
            
            {/* <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div> */}
            
            {/* <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div> */}
            
            {/* <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div> */}
           
            </div>
        </div>
        </section>
      </div>
    )
  }
}
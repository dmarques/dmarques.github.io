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
                                <p>More than 12 years of experience in software development, Web applications, APIs, back-end systems, analysis and troubleshooting and process automation.</p>
                                <p>A self-taught professional with fast learning, a constant search for meaningful solutions for people, and excellent interpersonal relationships, collaboration and teamwork.</p>
                                <p>Creative, interested, devoted. These characteristics lead me towards finding a solution to any problem that may appear. I always have the word "possible" as the first option.</p>
                                <p>Dedicated and open to sharing and receiving knowledge. Always willing to learn, I believe this is the only way to maintain a constant maturity and achieve professional and personal growth.</p>
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
                                <i className="icon-code" />
                            </span>
                            <div className="desc">
                                <h3>Web Development</h3>
                                <p>I have experience building web applications, design and development of Restful API using Golang, JavaScript, NodeJS, ReactJS, VueJS. Flutter and PHP Laravel.</p>
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
                </div>
            </div>
        </section>
      </div>
    )
  }
}
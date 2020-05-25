import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer at Mercado Libre <span>2010-2020</span></h2>
                        <p>I worked as a Software Engineer at <a href="https://www.mercadolibre.com" target="_blank" rel="noopener noreferrer" >Mercado Libre</a> company with Web application development in large scale system design, distributed computing, system integration, and set up services and internal tools in Latin America where Mercado Libre operates.</p>
                        <p>I also worked with development of Back-End applications with relational (MySQL, Oracle) and non-relational database (MongoDB). Design and development of Restful API using Go and Grails language. Development of applications for process automation using Go, PHP and Javascript languages.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Technical Support at DigiSystem <span>2008-2010</span></h2>
                        <p>I worked as technical support at SENAC (National Service of Commercial Learning) by Digisystem Company providing support for installation, maintenance, configuration and repair of computers, notebooks, printers and networks. Installation and configuration of management applications for administrative and educational areas.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Technical Support at Jet Laser <span>2005-2008</span></h2>
                        <p>I worked as technical support at Jet Laser Company providing support for installation, maintenance, configuration and repair of inkjet printers, laser printers, dot matrix printers, multifunction printers and remanufacture of cartridges and toners.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduation <span>2004-2011</span></h2>
                        <p>I graduated with a bachelor degree in computer science. I have taken courses like Data Structures and Algorithms, Software Engineering, Data Bases over the years and have better understanding of these subjects. My final graduation work was <a href="https://cepein.femanet.com.br/BDigital/arqTccs/0411150133.pdf" target="_blank" rel="noopener noreferrer" >Robot Development for Automation of Productive Process in Web Platforms.</a></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>1991-2003</span></h2>
                        <p>My first 3 years of elementary school was in Japan and then I continued my studies until I finished high school in Brazil.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
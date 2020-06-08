import React, { Component } from 'react';

import style from '../styles/Main.less';

import SideBar from '../components/SideBar/SideBar.jsx';
import Hero from '../components/Hero/Hero.jsx';
import Social from '../components/Social/Social.jsx';

import About from '../../../public/images/about.jpg';

import { FaAngleRight } from 'react-icons/fa';

import Resume from '../../../public/resume.pdf';

class AboutPage extends Component {
  render() {
    return (
      <div className={style.page}>
        <SideBar />
        <div className={style.main}>
          <Hero background={About}>
            <h1 className={style.heading}>About</h1>
            <Social />
          </Hero>
          <section className={style.section}>
            <div className={style.container}>
              <div className={style.row}>
                <div className={style.col1}></div>
                <div className={style.col10}>
                  <p>
                    I am a third year software engineering student at the University of Waterloo, and I went to high school
                    at St. Mildred's Lightbourn School in Oakville, Ontario. I accepted my offer of admission to the University
                    of Waterloo with one of six HeForShe Impact Scholarships, and a President's Scholarship of Distinction.
                  </p>
                  <p>
                    After beginning my studies as a software engineer, and having several co-op placements I have realized
                    that I have a passion for full stack web development. With a natural eye for design I have contributed to
                    several user-interface redesigns at my previous internships, and have worked with Ruby on Rails on many
                    occasions.
                  </p>
                  <p>
                    I have balanced my school work with horseback riding, and have been competing at a provincial and national
                    level for the past 10 years. I also enjoy playing volleyball, ultimate frisbee, traveling and photographing
                    my adventures.
                  </p>
                  <p>
                    I invite you to look around my website to learn more about my previous work experiences, projects, or other
                    experiences that I am particularly proud of.
                  </p>
                  <p><a href={Resume} class="btn-custom">Download My Resume <FaAngleRight /></a></p>

                </div>
                <div className={style.col1}></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default AboutPage;
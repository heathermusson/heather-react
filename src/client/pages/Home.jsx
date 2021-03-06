import React, { Component } from 'react';
import {  Link } from "react-router-dom";

import style from '../styles/Main.less';

import SideBar from '../components/SideBar/SideBar.jsx';
import Hero from '../components/Hero/Hero.jsx';
import Entry from '../components/Entry/Entry.jsx';

import Background from '../../../public/images/background.jpg';
import Author from '../../../public/images/author.jpg';
import Heather from '../../../public/images/heather.png';
import Shopify from '../../../public/images/shopify.png';
import Forest from '../../../public/images/forest.png';
import Housing from "../../../public/images/housing.jpg";
import Smile from "../../../public/images/smile.png";
import Foodwaste from "../../../public/images/foodwaste.jpg";
import Brisk from '../../../public/images/brisk.png';
import PharmAchieve from '../../../public/images/pharmachieve.png';
import Connect5 from "../../../public/images/connect5.jpg";
import Facebook from "../../../public/images/facebook.png";

import { FaAngleRight } from 'react-icons/fa';

class HomePage extends Component {
  render() {
    return (
      <div className={style.page}>
        <SideBar />
        <div className={style.main}>
          <Hero background={Background}>
            <img src={Author} className={style.authorImg}/>
            <div>
                <h2 className={style.subheading}>Hello I'm</h2>
                <h1 className={style.heading}>Heather Musson</h1>
                <p>I'm a fourth year software engineering student at the University of Waterloo, with an interest in web development and design, and experience working with a wide variety of technologies.</p>
                <p><Link className={style.btnCustom} to='/about'>More About Me <FaAngleRight /></Link></p>
            </div>
          </Hero>
          <section className={style.section}>
            <div class="container">
              <div className={style.row}>
              <div className={style.col4}>
                  <Entry
                    showLink={false}
                    isExternal={false}
                    image={Facebook}
                    type="Internship"
                    title="Facebook"
                    description="Front End Engineer"
                    btn="In Progress"
                  />
                </div>
                <div className={style.col4}>
                  <Entry
                    link="https://medium.com/@hmusson/my-summer-as-an-intern-at-shopify-80423bf25e95"
                    showLink={true}
                    isExternal={true}
                    image={Shopify}
                    type="Internship"
                    title="Shopify"
                    description="Web Developer"
                    btn="More"
                  />
                </div>
                <div className={style.col4}>
                  <Entry
                    link="https://github.com/heathermusson/heather-react"
                    isExternal={true}
                    image={Heather}
                    type="Project"
                    title="Personal Website"
                    description="Have a look at the code used to create this ReactJS website."
                    btn="More"
                  />
                </div>
                <div className={style.col4}>
                  <Entry
                    link="https://devpost.com/software/forest-zfr4ye"
                    isExternal={true}
                    image={Forest}
                    type="Project"
                    title="Forest"
                    description="Contact tracing in hospitals is undeniably lack, with nurses often writing tracking on pieces of paper - we aim to fix this."
                    btn="More"
                  />
                </div>
                <div className={style.col4}>
                  <Entry
                    link="https://github.com/heathermusson/UWHousing"
                    isExternal={true}
                    image={Housing}
                    type="Project"
                    title="UWHousing"
                    description="A centralized system that helps students find short-term housing and post their own listings."
                    btn="In progress"
                  />
                </div>
                <div className={style.col4}>
                  <Entry
                    link="smile"
                    isExternal={false}
                    image={Smile}
                    type="Internship"
                    title="Smile.io"
                    description="Full Stack Web Developer"
                    btn="More"
                  />
                </div>
                <div className={style.col4}>
                  <Entry
                    link="foodwaste"
                    isExternal={false}
                    image={Foodwaste}
                    type="Design"
                    title="Food Waste Experience"
                    description="This mobile app concept imagines a way to help reduce food waste through a social media platform."
                    btn="More"
                  />
                </div>
                <div className={style.col4}>
                  <Entry
                    link="https://brisksynergies.com/"
                    showLink={true}
                    isExternal={true}
                    image={Brisk}
                    type="Internship"
                    title="Brisk Synergies"
                    description="Full Stack Developer"
                    btn="More"
                  />
                </div>
                <div className={style.col4}>
                  <Entry
                    link="#"
                    showLink={false}
                    isExternal={true}
                    image={PharmAchieve}
                    type="Internship"
                    title="PharmAchieve"
                    description="Full Stack Web Developer"
                    btn="Completed"
                  />
                </div>
                <div className={style.col4}>
                  <Entry
                    link="https://github.com/heathermusson/First-Year-Design-Project"
                    isExternal={true}
                    image={Connect5}
                    type="Project"
                    title="Connect 5"
                    description="An Arduino-based Connect 5 game featuring an intelligent computer player."
                    btn="More"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };
};

export default HomePage;
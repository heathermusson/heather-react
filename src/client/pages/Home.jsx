import React, { Component } from 'react';
import {  Link } from "react-router-dom";

import style from '../styles/Main.less';

import SideBar from '../components/SideBar/SideBar.jsx';
import Hero from '../components/Hero/Hero.jsx';
import Entry from '../components/Entry/Entry.jsx';

import Background from '../../../public/images/background.jpg';
import Author from '../../../public/images/author.jpg';
import Housing from "../../../public/images/housing.jpg";
import Foodwaste from "../../../public/images/foodwaste.jpg";
import Connect5 from "../../../public/images/connect5.jpg";

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
                            <p>I'm a third year software engineering student at the University of Waterloo, with an interest in web development and design, and experience working with a wide variety of technologies.</p>
                            <p><Link className={style.btnCustom} to='/about'>More About Me <FaAngleRight /></Link></p>
                        </div>
                    </Hero>
                    <section className={style.section}>
                        <div class="container">
                            <div className={style.row}>
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
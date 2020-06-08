import React, { Component } from 'react';

import style from '../styles/Main.less';

import SideBar from '../components/SideBar/SideBar.jsx';
import Hero from '../components/Hero/Hero.jsx';

import Foodwaste from '../../../public/images/foodwaste.jpg';
import MainFeed from '../../../public/images/food-waste/main-feed.png';
import RightPanel from '../../../public/images/food-waste/right-panel.png';
import NewPost from '../../../public/images/food-waste/new-post.png';
import Notifications from '../../../public/images/food-waste/notifications.png';
import PersonalProfile from '../../../public/images/food-waste/personal-profile.png';


class FoodwastePage extends Component {
    render() {
        return (
            <div className={style.page}>
                <SideBar />
                <div className={style.main}>
                    <Hero background={Foodwaste}>
                      <h2 className={style.subheading}>Mobile App Concept</h2>
							        <h1 className={style.heading}>Food Waste Experience</h1>
							        <p class="mb-4">Roughly one third of the food produced in the world for human consumption every year (approximately 1.3 billion tonnes) is lost or wasted. There are efforts being done to combat food waste and to improve the situation, but more can be done. </p>
                    </Hero>
                    <section className={style.section}>
                      <div className={style.container}>
                        <div className={style.row}>
                          <div className={style.col2}></div>
                          <div className={`${style.col8} ${style.textCenter}`}>
                            <h4>Share what you are doing to reduce your food waste.</h4>
                          </div>
                          <div className={style.col2}></div>
                        </div>
                        <div class="row">
                          <div className={`${style.col12} ${style.textCenter}`}>
                            <img src={MainFeed} />
                          </div>
                          <div className={`${style.col12} ${style.textCenter}`}>
                            <img src={RightPanel} />
                          </div>
                          <div className={`${style.col12} ${style.textCenter}`}>
                            <img src={NewPost} />
                          </div>
                          <div className={`${style.col12} ${style.textCenter}`}>
                            <img src={Notifications} />
                          </div>
                          <div className={`${style.col12} ${style.textCenter}`}>
                            <img src={PersonalProfile} />
                          </div>
                        </div>
                      </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default FoodwastePage;
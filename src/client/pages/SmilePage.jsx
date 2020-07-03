import React, { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed';

import style from '../styles/Main.less';

import SideBar from '../components/SideBar/SideBar.jsx';
import HalfHero from '../components/HalfHero/HalfHero.jsx';
import Social from '../components/Social/Social.jsx';

import SmileGroup from '../../../public/images/smilegroup.jpg';

import { FaAngleRight } from 'react-icons/fa';

import Resume from '../../../public/resume.pdf';

class SmilePage extends Component {
  render() {
    return (
      <div className={style.page}>
        <SideBar />
        <div className={style.main}>
          <HalfHero background={SmileGroup}>
            <h1 className={style.heading}>Smile.io</h1>
            <h2 className={style.subheading}>Full Stack Web Developer</h2>
          </HalfHero>
          <section className={style.section}>
            <div className={style.container}>
              <div className={style.row}>
                <div className={style.col1}></div>
                <div className={style.col5}>
                  <p>
                    I spent my third co-op term at <a href='https://smile.io'>Smile.io</a> as a Full Stack Web Developer. Smile 
                    is an e-commerce company located in Waterloo, Ontario that creates points based loyalty programs. Their 
                    product is currently offered as an app for Shopify and BigCommerce e-commerce stores.
                  </p>
                  <p>
                    I was hired with mostly backend tasks in mind, however with past experience with lots of frontend projects, 
                    I ended up taking on a more full stack role within the engineering team. I was oftening jumping between the
                    Ruby on Rails codebase, to the Ember.js admin interface.
                  </p>
                  <p>
                    My main project was working on internationalization. The i18n project was a recent addition to Smile's 
                    engineering roadmap, so I was involved in implementing the foundation for translating the Ember.js and 
                    ReactJS user interfaces into multiple languages.
                  </p>
                  <p>
                    In addition to internationalization, I was involved in several other small projects which implemented new 
                    features in the Ruby on Rails backend including improvements to the existing architecture. I also spent a 
                    lot of time working with the merchant support and success teams to gain a deeper understanding about 
                    merchant pain points.
                  </p>
                  <p>
                    The four months that I spent at Smile exposed me to many new web technologies, and allowed me to gain
                    experience in the e-commerce industry. I met so many amazing people who taught me so much in my short time 
                    with them.
                  </p>
                </div>
                <div className={style.col5}>
                  <InstagramEmbed
                    url='https://www.instagram.com/p/B6MLvj6AH61/'
                    maxWidth={500}
                    hideCaption={false}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => {}}
                    onSuccess={() => {}}
                    onAfterRender={() => {}}
                    onFailure={() => {}}
                  />
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

export default SmilePage;
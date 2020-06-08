import React, { Component } from 'react';

import style from '../styles/Main.less';

import SideBar from '../components/SideBar/SideBar.jsx';
import Social from '../components/Social/Social.jsx';

import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithubAlt, FaAngleRight } from 'react-icons/fa';

class ContactPage extends Component {
  render() {
    return (
      <div className={style.page}>
        <SideBar />
        <div className={style.main}>
          <section className={style.section}>
            <div className={style.container}>
              <div className={style.row}>
                <div className={style.col12}>
                  <h4>Say hello.</h4>
                </div>
                <div className={style.col12}>
                  <p>Find me on social media, or send me an email at <a href="mailto:havmusso@uwaterloo.ca">havmusso@uwaterloo.ca</a>.</p>
                  <Social />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default ContactPage;
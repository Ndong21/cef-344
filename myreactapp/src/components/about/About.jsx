import React from 'react'
import './about.css'
import moi from '../../assets/we1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
      <section id="about">
        <h5>Get to know</h5>
        <h2>About me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me__image">
              <img src={moi} alt="Brown " />
            </div>
          </div>
          <div className="about__me__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>4+ Years</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>Over 95 world widely</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>70 Completed</small>
              </article>
            </div>
            <p>
              I am a young data analyst with a degree in software engineering. I work with businesses and individuals to provide 
              tech and business solutions using data by performing data analysis, data analytics, building machine learning 
              models and simple easy visualisations in form of dashboards and reports (using python, sql and power BI) for 
              exectives and investors to enhance decision making. I also carry out market research and consultancy for 
              businesses to assess the performance of the business or a certain product.
              As a software engineer, proficient in both frontend and backend technologies such as react, flask, fastapi, I build responsive 
              web and mobile applications for my clients. This also helps me build end to end machine learning projects 
              for my clients. I am fluent in both english and french and i can work in both remote and onsite settings
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>
      </section>
    );
}

export default About

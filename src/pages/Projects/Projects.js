import React from 'react'
import './Projects.css'
import image1 from '../../images/journal.png'
import image2 from '../../images/foodapi.png'
import image3 from '../../images/codeQuiz.png'
import image4 from '../../images/passwordGenerator.png'
import image5 from '../../images/WeatherDash.png'
import image6 from '../../images/dailyplanner.png'


export default function Projects() {
    return (
        <section class="page-section portfolio" id="portfolio">
            <div class="container">
                
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Projects:</h2>
                 
                <div class="row justify-content-center">
                    
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <a target="_blank" href="https://glacial-falls-08571.herokuapp.com/login">
                            <img class="" src={image1} alt="..." />
                            </a>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <a target="_blank" href="https://kbonaccorsi.github.io/group-project-1/">
                            <img class="" src={image2} alt="..." />
                            </a>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <a target="_blank" href="https://github.com/aeghin/Code-Quiz">
                            <img class="" src={image3} alt="..." />
                            </a>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <a target="_blank" href="https://github.com/aeghin/Password-generator">
                            <img class="" src={image4} alt="..." />
                            </a>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <a target="_blank" href="https://aeghin.github.io/weather-dashboard/">
                            <img class="" src={image5} alt="..." />
                            </a>
                        </div>
                    </div>
                    
                    <div class="col-md-6 col-lg-4">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <a target="_blank" href="https://aeghin.github.io/daily-planner/">
                            <img class="" src={image6} alt="..." />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

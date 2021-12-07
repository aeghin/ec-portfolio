import React from 'react'
import './Footer.css';

export default function Footer() {
    return (
        <footer className="bg-dark text-center text-white fixed-bottom">
            <div className="container p-2 pb-0">
                <section className="mb-2">
                    <a className="contact" >CONTACT ME:</a>
                    <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://github.com/aeghin" role="button"
                    ><i className="fab fa-linkedin-in"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.linkedin.com/in/edward-castaneda-1b18a9100" role="button"
                    ><i className="fab fa-github"></i></a>
                    
                </section>
            </div>

            <div className="text-center p-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2021 Copyright
                <a className="text-white"></a>
            </div>
        </footer>
    )
}

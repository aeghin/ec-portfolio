import React from 'react'
import './Contact.css';

export default function Contact() {
    return (

        <div class="container-fluid mt-4">
            <div class="row justify-content-center align-items-center">
                <div class="col col-sm-6">
                    <form>

                        <div className="form-outline mb-4">
                            <input type="text" id="form4Example1" className="form-control" />
                            <label className="form-label" for="form4Example1">Name</label>
                        </div>


                        <div className="form-outline mb-4">
                            <input type="email" id="form4Example2" className="form-control" />
                            <label className="form-label" for="form4Example2">Email address</label>
                        </div>


                        <div className="form-outline mb-4">
                            <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                            <label className="form-label" for="form4Example3">Message</label>
                        </div>


                        <div className="form-check d-flex justify-content-center mb-4">
                            <input
                                className="form-check-input me-2"
                                type="checkbox"
                                value=""
                                id="form4Example4"
                                checked
                            />
                            <label className="form-check-label" for="form4Example4">
                                Send me a copy of this message
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4 btn-warning">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

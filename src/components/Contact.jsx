import React from 'react'
import { emailSvg, github, linkedinSvg } from '../Icons'

const Contact = () => {
  return (
    <>
       <div className="contact-me">
            <h1 className="section-title">Contact Me</h1>
            <p>
              If you want to collaborate or have any questions, feel free to reach out!
            </p>
            <p>
              {emailSvg()}
              <a
                href="mailto:dhananjaysunil.kachure@gmail.com"
                className="contact-link"
              >
                dhananjaysunil.kachure@gmail.com
              </a>
            </p>
        <p>
            {linkedinSvg()}
        <a className="contact-link" href='https://www.linkedin.com/in/dhananjay-sunil-kachure'>
        https://www.linkedin.com/in/dhananjay-sunil-kachure
        </a>
        </p>

        <p>
            {github()}
            <a className="contact-link" href='https://github.com/DhananjayKachure'>
            https://github.com/DhananjayKachure
            </a>
        </p>
          </div>
    </>
  )
}

export default Contact

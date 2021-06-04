import React from 'react'
import "../styles/Footer.scss"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className="footer">
            <div className="info">Generate Lorem Ipsum placeholder text. Select the number of characters, words,</div>
            <div className="icons">
                <a href="http://facebook.com"><FacebookIcon/></a>
                <a href="http://twitter.com"><TwitterIcon/></a>
                <a href="http://instagram.com"><InstagramIcon/></a>
            </div>
            <div className="bloc">
                <div>
                    <h3>Location</h3>
                    <p>Asiatique,Building Makelele House</p>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p>bluetech@tech.bi<br/>+257 63 383 393</p>
                </div>
            </div>
        </div>
    )
}

export default Footer

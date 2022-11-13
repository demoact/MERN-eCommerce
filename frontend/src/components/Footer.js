import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import SocialLinks from './SocialLinks';

function Footer() {
  const { email, setEmail } = useState({ email: '' });
  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col md={6}>
            <div id="mc_embed_signup">
              <form
                action="https://gmail.us21.list-manage.com/subscribe/post?u=db6edbfa30ee8790072aa07d3&amp;id=f8b4228fb5&amp;f_id=0088c6e1f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
              >
                <div id="mc_embed_signup_scroll">
                  <h2>Subscribe</h2>
                  <div className="indicates-required">
                    <span className="asterisk">*</span> indicates required
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">
                      Email Address <span className="asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      name="EMAIL"
                      className="required email"
                      id="mce-EMAIL"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <span
                      id="mce-EMAIL-HELPERTEXT"
                      className="helper_text"
                    ></span>
                  </div>
                  <div id="mce-responses" className="clear foot">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: 'none' }}
                    ></div>
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: 'none' }}
                    ></div>
                  </div>
                  <div
                    style={{ position: 'absolute', left: '-5000px' }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_db6edbfa30ee8790072aa07d3_f8b4228fb5"
                      tabIndex="-1"
                      value=""
                    />
                  </div>
                  <div className="optionalParent">
                    <div className="clear foot">
                      <input
                        type="submit"
                        value="Subscribe"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button"
                      />
                      <p className="brandingLogo">
                        <a
                          href="http://eepurl.com/icZQQz"
                          title="Mailchimp - email marketing made easy and fun"
                        >
                          <img
                            src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"
                            alt="hgg"
                          />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Col>
          <Col md={3}>
            <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
            <ul className="useful-links">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/my-account">My Account</Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3"></i> New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope me-3"></i>
              info@example.com
            </p>
            <p>
              <i className="fas fa-phone me-3"></i> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print me-3"></i> + 01 234 567 89
            </p>
          </Col>
        </Row>
      </Container>
      <div className="bottom">
        <Row>
          <Col md={5}>
            <div className="copyright text-center">All rights reserved</div>
          </Col>
          <Col md={7}>
            <SocialLinks />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;

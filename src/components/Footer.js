import React from 'react';

const Footer = () => {
  return (
    <div
    id="tg-footer"
    style={{ backgroundImage: "url('https://preview.themesglance.com/modern-blogger-pro/wp-content/themes/modern-blogger-pro/assets/images/footer-bg-image.png')" }}
    className="section_bg_scroll"
  >
    <div className="container">
      <div className="subscribe">
        <div className="row">
          <div className="subscribe_box">
            <h4>Be Notified First When New News Arrives!</h4>
            <p>News are here all the time but subscribe to the newsletter to get notified when there's new buzz about your favorite interests!</p>
            <div className="wpcf7 js" id="wpcf7-f91-o1">
              <div className="screen-reader-response">
                <p role="status" aria-live="polite" aria-atomic="true"></p>
                <ul></ul>
              </div>
              <form
                action="/modern-blogger-pro/#wpcf7-f91-o1"
                method="post"
                className="wpcf7-form init"
                aria-label="Contact form"
                noValidate
                data-status="init"
              >
                <div style={{ display: "none" }}>
                  <input type="hidden" name="_wpcf7" value="91" />
                  <input type="hidden" name="_wpcf7_version" value="5.9.4" />
                  <input type="hidden" name="_wpcf7_locale" value="" />
                  <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f91-o1" />
                  <input type="hidden" name="_wpcf7_container_post" value="0" />
                  <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                </div>
                <p>
                  <span className="wpcf7-form-control-wrap" data-name="your-email">
                    <input
                      size="40"
                      className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Enter Your E-mail Here"
                      type="email"
                      name="your-email"
                    />
                  </span>
                  <input className="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value="Subscribe" />
                  <span className="wpcf7-spinner"></span>
                </p>
                <div className="wpcf7-response-output" aria-hidden="true"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="tg-footer_box">
        <div className="container tg-footer-cols">
          <div className="row footer-details">
            <div className="col-lg-4 col-sm-6 footer1">
              <aside id="media_image-1" className="widget widget_media_image">
                <a href="#">
                  <img
                    width="211"
                    height="70"
                    src="https://preview.themesglance.com/modern-blogger-pro/wp-content/uploads/sites/51/2024/05/logo-7.png"
                    className="image wp-image-130 attachment-full size-full"
                    alt=""
                    style={{ maxWidth: "100%", height: "auto" }}
                    decoding="async"
                    loading="lazy"
                  />
                </a>
              </aside>
              <aside id="text-1" className="widget widget_text">
                <h3 className="widget-title">About Us</h3>
                <div className="textwidget">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              </aside>
            </div>
            <div className="col-lg-3 col-sm-6 footer2">
              <aside id="nav_menu-1" className="widget widget_nav_menu">
                <h3 className="widget-title">Categories</h3>
                <div className="menu-categories-container">
                  <ul id="menu-categories" className="menu">
                    <li className="">
                      <a href="#">Architecture</a>
                    </li>
                    <li className="">
                      <a href="#">Reviews</a>
                    </li>
                    <li className="">
                      <a href="#">People</a>
                    </li>
                    <li className="">
                      <a href="#">Lifestyle</a>
                    </li>
                    <li className="">
                      <a href="#">Co-working</a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div className="col-lg-3 col-sm-6 footer3">
              <aside id="nav_menu-2" className="widget widget_nav_menu">
                <h3 className="widget-title">Quick Links</h3>
                <div className="menu-quick-links-container">
                  <ul id="menu-quick-links" className="menu">
                    <li className="tg-one-page ">
                      <a href="#">About Us</a>
                    </li>
                    <li className="blog-left-sidebar ">
                      <a href="#">Blog</a>
                    </li>
                    <li className="tg-one-page menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-107">
                      <a href="#" aria-current="page">Newsletter</a>
                    </li>
                    <li className="contact-us ">
                      <a href="#">Home</a>
                    </li>
                    <li className="contact-us ">
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div className="col-lg-2 col-sm-6 footer4">
              <aside id="nav_menu-3" className="widget widget_nav_menu">
                <h3 className="widget-title">Support</h3>
                <div className="menu-support-container">
                  <ul id="menu-support" className="menu">
                    <li className="">
                      <a href="#">Customer Support</a>
                    </li>
                    <li className="">
                      <a href="#">Advertisements</a>
                    </li>
                    <li className="">
                      <a href="#">Post a News</a>
                    </li>
                    <li className="">
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
          {/* <ul className="copy-right">
            <span className="privacy-text">Legal terms and information:</span>
            <li className="privacy">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="terms">
              <a href="#">Terms of Service</a>
            </li>
          </ul> */}
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>
            AdSense  Theme 2024
            <span className="credit_link">
              Design and Developed by
              <a href="#" target="_blank" rel="noopener noreferrer">Areeb Qazi</a>
            </span>
          </p>
        
        </div>
      </div>
    </div>
  </div>
  );
};

export default Footer;
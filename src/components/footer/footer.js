import React from 'react';
import logo from '../../svg/logo-footer.svg';
import './footer.css';

const Footer = () => {
  const links = [
    'Terms of Use',
    'Privacy Policy',
    'Cookie Policy',
    'Do Not Sell My Personal Information',
    'Contact us',
  ];
  const renderLinks = links.map((link) => (
    <a key={link} className="footer__link" href="/">
      {link}
    </a>
  ));

  return (
    <div className="footer">
      <div className="footer__logo">
        <a href="/" target="_blank">
          <img src={logo} alt="logo" />
        </a>

      </div>
      <div>{renderLinks}</div>
    </div>
  );
};

export default Footer;

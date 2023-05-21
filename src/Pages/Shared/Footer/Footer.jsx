import React from "react";
import logo from'../../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <img style={{width: '153px'}} src={logo} alt="" />
        <p>
          KIDZ Toy Industries Ltd.
          <br />
          Providing reliable tech since 2020
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Selling</a>
        <a className="link link-hover">Producing</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Supply</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Join us</span>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">Instagram</a>
        <a className="link link-hover">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;

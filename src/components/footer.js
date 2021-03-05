import React from 'react';
import {
  TiMail,
  TiSocialLinkedin,
  TiSocialGithub,
  TiDocumentText,
} from 'react-icons/ti';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-10 text-center text-white bg-purple-700">
      <h2>I'm available for freelance work! Let's get in touch.</h2>
      <ul className="flex justify-center items-center p-5">
        <li className="mx-2">
          <a
            href="https://linkedin.com/in/nikki-louis-quibin-539ba796/"
            className="inline-block p-2 rounded-full hover:bg-white hover:text-purple-700"
          >
            <TiSocialLinkedin className="text-4xl" />
          </a>
        </li>
        <li className="mx-2">
          <a href="https://github.com/NQuibin" className="inline-block p-2 rounded-full hover:bg-white hover:text-purple-700">
            <TiSocialGithub className="text-4xl" />
          </a>
        </li>
        <li className="mx-2">
          <a
            href="mailto:nikki.quibin@gmail.com"
            className="inline-block p-2 rounded-full hover:bg-white hover:text-purple-700"
          >
            <TiMail className="text-4xl" />
          </a>
        </li>
        <li className="mx-2">
          <a href="#" className="inline-block p-2 rounded-full hover:bg-white hover:text-purple-700">
            <TiDocumentText className="text-4xl" />
          </a>
        </li>
      </ul>
      <small>
        © {currentYear} <b>Nikki Quibin</b>. All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;

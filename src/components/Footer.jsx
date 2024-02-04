import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <div className="flex flex-col items-center text-black py-10">
      <span>Copyright &copy; Mrudhula Shri M</span>
      <div className="mt-2">
        <FontAwesomeIcon icon={faEnvelope} /> mrudhulashrimanikantan@gmail.com
      </div>
      <div className="mt-2">
        <FontAwesomeIcon icon={faPhone} /> +91 9487781044
      </div>
    </div>
  );
}

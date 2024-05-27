import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  const isIndex = true;
  return (
    <div className="Footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>
    </div>
  );
}

export default Footer;

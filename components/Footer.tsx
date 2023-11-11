import Link from 'next/link';
import { FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';
import ProposNewsletter from './sections/section3parts/ProposNwesletter';
export default function Footer() {
  return (
    <>

      <div className="footer-container">
        <div className="footer-part1">
          <ProposNewsletter />
        </div>
        <div className="footer-part2">
          <p className="footer-text">Fréquence médicale | All rights Reserved 2023</p>
          <div className="social-icons">
            <Link href="https://www.facebook.com"><FaFacebook /></Link>
            <Link href="https://www.twitter.com"><FaTwitter /></Link>
            <Link href="mailto:contact@frequence-medicale.com"><FaEnvelope /></Link>
          </div>
        </div>

      </div>
    </>

  );
}

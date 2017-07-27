import React from 'react';
import { Divider } from 'semantic-ui-react';
import FootMenu from './FooterMenu';
import FooterSocialInfo from './FooterSocialInfo';
import FooterCopyright from './FooterCopyright';
import 'assets/style/footer.scss';

const Footer = () => (
  <footer id='footer'>
    <FootMenu/>
    <Divider section/>
    <FooterSocialInfo/>
    <FooterCopyright/>
  </footer>
)

export default Footer;
import styles from './styles.module.scss';
import TikTok from '../../assets/images/tiktok.png';
import Instagram from '../../assets/images/instagram.png';
import XLogo from '../../assets/images/X.png';

function Footer() {
    return <div className={styles.footer__container}>
        <img src={TikTok} />
        <img src={Instagram} />
        <img src={XLogo} />
    </div>;
}

export { Footer };

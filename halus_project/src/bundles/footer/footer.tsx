import styles from './styles.module.css';
import { PiTiktokLogo } from "react-icons/pi";
import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
    return <div className={styles.footer__container}>
        <PiTiktokLogo className={styles.logo} />
        <SiInstagram className={styles.logo} />
        <FaXTwitter className={styles.logo}/>
    </div>;
}

export { Footer };

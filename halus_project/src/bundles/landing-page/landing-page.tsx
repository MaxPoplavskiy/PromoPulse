import { Header } from "../header/header";
import IntroImage from '../../assets/images/intro.png';
import LineChart from '../../assets/images/image 13.png';
import DonutChart from '../../assets/images/image 14.png';
import TikTok from '../../assets/images/tiktok.png';
import Instagram from '../../assets/images/instagram.png';
import XLogo from '../../assets/images/X.png';
import Sofia from '../../assets/images/407224620_893420559116604_8936711427757346525_n.jfif';
import styles from './styles.module.scss';
import { SocialMediaCard } from "./components/social-media-card/social-media-card";
import { Footer } from "../footer/footer";

function LandingPage() {
    return <>
    <Header />
    
    <div className={styles.landing_page__container}>
        <section className={styles.landing_page__intro_container}>
            <div className={styles.intro__text_container}>
                <h1 className={styles.intro__title}>
                    Intro
                </h1>

                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>

            <div className={styles.intro__image_container}>
                <img src={IntroImage} />
            </div>
        </section>

        <section className={styles.landing_page__statistics_container}>
            <h1 className={styles.landing_page__statistics_title}>
                AI statistic
            </h1>

            <img src={LineChart}></img>
            
            <img src={DonutChart}></img>
        </section>

        <section className={styles.landing_page__recommendation_container}>
            <h1>
                AI recommendation
            </h1>

            <ol>
                <li>
                    Experiment with brighter compositions to add vibrancy and allure to your images. Consider adjusting exposure settings or exploring different lighting conditions to capture the essence of your subjects in a more radiant and captivating manner.
                </li>
                <li>
                    Enhance your audience engagement by establishing a consistent posting schedule. Aim to share your photography work on a daily basis to maintain a regular presence and keep your followers intrigued and connected to your evolving portfolio.
                </li>
                <li>
                    Explore the potential of posting during the evening hours to leverage the enchanting ambiance of twilight and dusk. Experiment with capturing the interplay of natural and artificial light to create captivating and atmospheric photographs that resonate with your audience's emotions and experiences.
                </li>
            </ol>
        </section>

        <section className={styles.landing_page__social_media_container}>
            <SocialMediaCard icon={TikTok} image={Sofia} comments="10" likes="50" AIRating="10/10" />
            <SocialMediaCard icon={Instagram} image={Sofia} comments="3" likes="51" AIRating="10/10"/>
            <SocialMediaCard icon={XLogo} image={Sofia} comments="3" likes="52" AIRating="10/10"/>
        </section>
    </div>

    <Footer />
    </>;
}

export { LandingPage };

import { Header } from "../header/header";
import Sofia from '../../assets/images/407224620_893420559116604_8936711427757346525_n.jfif';
import Tomat from '../../assets/images/tomat.jpg';
import HelloKitty from '../../assets/images/zagreb-croatia-november-6-2014-260nw-231255148.png';
import styles from './styles.module.scss';
import { Footer } from "../footer/footer";
import { CgProfile } from "react-icons/cg";

function LandingPage() {
    return <>
    <Header />
    
    <div className={styles.landing_page__container}>
        <section className={styles.landing_page__intro_container}>
            <div className={styles.intro__text_container}>
                <h1 className={styles.intro__title}>
                    PromoPulse
                </h1>

                <h3 className={styles.intro__subtitle}>
                Your pulse of success in the digital world!
                </h3>

                <p className={styles.intro__text}>
                    Створюйте контент, плануйте, захоплюйте! 
                    <br />
                    Вдосконалюйте ваші стратегії у соціальних мережах!
                </p>
                <div className={styles.intro__button_container}>
                    <button className={styles.button_red}>Start now</button>
                    <button className={styles.button_white}>Contact sales</button>
                </div>
            </div>
        </section>

        <section className={styles.landing_page__templates}>
            <div className={styles.landing_page__cards_container}>
                <div className={styles.landing_page__template_card}>
                    <div className={styles.template_card__image_container}>
                        <img src={Tomat} className={styles.template_card__image} />
                    </div>
                    <div className={styles.template_card__content}>
                        <div className={styles.template_card__content_upper_body}>
                            <div className={styles.template_card__avatar_container}>
                                <img src={Sofia} className={styles.template_card__avatar}/>
                            </div>
                            <div className={styles.template_title_container}>
                                <h2 className={styles.template_title}>
                                    TikTok
                                </h2>
                                <p className={styles.template_subtitle}>
                                    Secondary text
                                </p>
                            </div>
                        </div>

                        <p>
                            Greyhound divisively hello coldly wonderfully marginally far upon excluding.
                        </p>

                        <button className={styles.template_card__button_red}>EDIT&nbsp;NOW</button>
                    </div>
                </div>

                <div className={styles.landing_page__template_card}>
                    <div className={styles.template_card__image_container}>
                        <img src={HelloKitty} className={styles.template_card__image} />
                    </div>
                    <div className={styles.template_card__content}>
                        <div className={styles.template_card__content_upper_body}>
                            <div className={styles.template_card__avatar_container}>
                                <img src={Sofia} className={styles.template_card__avatar}/>
                            </div>
                            <div className={styles.template_title_container}>
                                <h2 className={styles.template_title}>
                                    Instagram
                                </h2>
                                <p className={styles.template_subtitle}>
                                    Secondary text
                                </p>
                            </div>
                        </div>

                        <p>
                            Greyhound divisively hello coldly wonderfully marginally far upon excluding.
                        </p>

                        <button className={styles.template_card__button_red}>EDIT&nbsp;NOW</button>
                    </div>
                </div>

                <div className={styles.template_column__container}>
                    <button className={styles.template_column__button_add}>+</button>

                    <div className={styles.template_column__labels_container}>
                    <div className={styles.template_column__label_container}>
                            <CgProfile className={styles.template_column__label_icon} />
                            <p className={styles.template_column__label_text}>Label</p>
                        </div>

                        <div className={styles.template_column__label_container}>
                            <CgProfile className={styles.template_column__label_icon} />
                            <p className={styles.template_column__label_text}>Label</p>
                        </div>

                        <div className={styles.template_column__label_container}>
                            <CgProfile className={styles.template_column__label_icon} />
                            <p className={styles.template_column__label_text}>Label</p>
                        </div>

                        <div className={styles.template_column__label_container}>
                            <CgProfile className={styles.template_column__label_icon} />
                            <p className={styles.template_column__label_text}>Label</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <Footer />
    </>;
}

export { LandingPage };

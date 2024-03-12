import styles from './styles.module.scss';

type Properties = {
    icon: string,
    image: string,
    comments: string,
    likes: string,
    AIRating: string
}

function SocialMediaCard({
    icon,
    image,
    comments,
    likes,
    AIRating
}: Properties) {
    return <div className={styles.social_media_card__container}>
        <div>
            <img src={icon} className={styles.social_media_card__icon}/>
        </div>

        <div className={styles.social_media_card__body_container}>
            <div className={styles.social_media_card__image_container}>
                <img src={image} className={styles.social_media_card__image}/>
            </div>

            <div className={styles.social_media_card__item}>
                <h3 className={styles.social_media_card__item_title}>{comments}</h3>
                <p>Кількість коментів</p>
            </div>

            
            <div className={styles.social_media_card__item}>
                <h3 className={styles.social_media_card__item_title}>{likes}</h3>
                <p>Лайків за тиждень</p>
            </div>

            
            <div className={styles.social_media_card__item}>
                <h3 className={styles.social_media_card__item_title}>{AIRating}</h3>
                <p>Аналітична оцінки від ШІ</p>
            </div>
        </div>
    </div>
}

export { SocialMediaCard };

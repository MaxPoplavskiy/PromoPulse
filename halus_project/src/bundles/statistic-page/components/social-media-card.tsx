import styles from './styles.module.css';

type Properties = {
    Icon: React.ElementType,
    image: string,
    comments: string,
    likes: string,
    AIRating: string
}

function SocialMediaCard({
    Icon,
    image,
    comments,
    likes,
    AIRating
}: Properties) {
    return <div className={styles.social_media_card__container}>
        <div>
            {Icon && <Icon className={styles.social_media_card__icon}/>}
            {/* <img src={icon} className={styles.social_media_card__icon}/> */}
        </div>

        <div className={styles.social_media_card__body_container}>
            <div className={styles.social_media_card__image_container}>
                <img src={image} className={styles.social_media_card__image}/>
            </div>

            <div className={styles.social_media_card__item}>
                <h3 className={styles.social_media_card__item_title}>{comments}</h3>
                <p>Comments</p>
            </div>

            
            <div className={styles.social_media_card__item}>
                <h3 className={styles.social_media_card__item_title}>{likes}</h3>
                <p>Likes this week</p>
            </div>

            
            <div className={styles.social_media_card__item}>
                <h3 className={styles.social_media_card__item_title}>{AIRating}</h3>
                <p>AI analitic score</p>
            </div>
        </div>
    </div>
}

export { SocialMediaCard };

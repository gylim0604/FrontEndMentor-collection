import React from 'react';
import styles from '../styles/Home.module.css';

const Card = ({props}) => {
    const { title, github, vercel, imgUrl } = props;
    return (
        <div className={styles.card}>
            <div className={styles.image_wrapper}>
                <img src={imgUrl} alt='' />
            </div>
            <div className={styles.info}>
                <a href={vercel}>
                    <h4>{title}</h4>
                </a>
                <a href={github}>
                    <img
                        src='/GitHub-Mark/GitHub-Mark-32px.png'
                        alt='Github Logo'
                    />
                </a>
            </div>
        </div>
    );
};

export default Card;

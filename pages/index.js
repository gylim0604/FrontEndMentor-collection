import Head from 'next/head';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';
import { uid } from 'uid';
let data = require('../public/links.json');

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Front End Mentor Challenges</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                {/* <link rel='icon' href='/favicon.ico' /> */}
            </Head>

            <main className={styles.main}>
                <span className={styles.title}>
                    <h1>
                        <a
                            target='_blank'
                            href='https://www.frontendmentor.io/'
                        >
                            Front End Mentor Challenges
                        </a>
                    </h1>
                    <p>By Guang Yi Lim</p>
                </span>

                <h3 className={styles.grid_title}>All Solutions</h3>
                <div className={styles.grid}>
                    {data.map((el) => (
                        <Card key={`card-${uid()}`} props={el} />
                    ))}
                </div>
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
}

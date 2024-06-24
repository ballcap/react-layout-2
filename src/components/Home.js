import style from './Home.module.css';

export default function Home() {
    return(
        <section className={style.section}>
            <div className={style.left}>
                <p>I Really Wanna</p>
            </div>
            <div className={style.right}>
                <p>Tell You Something</p>
            </div>
        </section>
    );
}
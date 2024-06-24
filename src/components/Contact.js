import style from './Contact.module.css';

export default function Contact() {
    return(
        <section className={style.section}>
            <div className={style.top}>
                <div className={style.divleft}>
                    <img className={style.img} src="https://images.unsplash.com/photo-1717501218221-1da14c0f365e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D" alt="Image Placeholder" />
                </div>
                <div className={style.divright}>
                    <h1 className={style.h1}>Western Society Is On A Downfall</h1>
                    <p>Ever since the dawn of time, man has sought to control over what is his and his alone. This definitely can be seen by many and/or the far few however you would see fit. Armed with his trusty pocket knife and binoculars, the legendary soldier Solid Snake goes out into his expedition to bring down the evils of the world.</p>
                </div>
            </div>
            <div className={style.bottom}>
                <p>Finally, the Rock has come back to Toronto ON. If you see anything you like here, feel free to contact us <a href="/">here</a></p>
            </div>
        </section>
    );
}
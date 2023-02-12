import styles from './Footer.module.scss';

function Footer() {
    return (
    <footer className={`${styles.footer} d-flex flex-row align-items-center justify-content-center p-20`}>
        <p> Copyright <i className="fa-regular fa-copyright"></i>  2023 Cookchef Skander, Inc.</p>
    </footer>
    );
}

export default Footer;
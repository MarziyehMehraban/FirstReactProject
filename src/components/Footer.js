import React from 'react';
import styles from "./Footer.module.css"
import img1 from "../images/footer1.jpg";
import img2 from "../images/footer2.jpg";
import img3 from "../images/footer3.jpg";
import Logo from '../images/AlibabaLogo.gif';
import img4 from "../images/img4.png";
import img5 from "../images/img5.svg";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
import img9 from "../images/img9.svg";


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.firstFooter}>
                <div className={styles.container}>
                    <img src={img1}/>
                    <span>
                        <h4>رتبه یک سفر</h4>
                        <p>معتبر ترین عرضه کننده محصولات گردشگری در ایران</p>
                    </span>
                </div>
                <div className={styles.container}>
                    <img src={img2}/>
                    <span>
                        <h4>همسفر هر سفر</h4>
                        <p>اراعه تمامی خدمات سفر پرواز قطار اتوبوس هتل و تور</p>
                    </span>
                </div>
                <div className={styles.container}>
                    <img src={img3}/>
                    <span>
                        <h4>همسفر همه لحظات سفر</h4>
                        <p>پشتیبانی و همراهی ۲۴ ساعته در تمامی مراحل سفر</p>
                    </span>
                </div>
            </div>
            <div className={styles.secondFooter}>
                <div className={styles.secondIn}>
                    <h4>علی بابا</h4>
                    <ul>
                        <li><a href='#'>درباره ما</a></li>
                        <li><a href='#'>تماس با ما</a></li>
                        <li><a href='#'>چرا علی بابا</a></li>
                        <li><a href='#'>علی بابا پلاس</a></li>
                        <li><a href='#'>بیمه مسافرتی</a></li>
                        <li><a href='#'>مجله علی بابا</a></li>
                    </ul>
                </div>
                <div className={styles.secondIn}>
                    <h4>خدمات مشتریان</h4>
                    <ul>
                        <li><a href='#'>مرکز پشتیبانی آنلاین</a></li>
                        <li><a href='#'>راهنمای خرید</a></li>
                        <li><a href='#'>راهنمای استرداد</a></li>
                        <li><a href='#'>قوانین و مقررات</a></li>
                        <li><a href='#'>پرسش و پاسخ</a></li>
                    </ul>
                </div>
                <div className={styles.secondIn}>
                    <h4>اطلاعات تکمیلی</h4>
                    <ul>
                        <li><a href='#'>باشگاه همسفران</a></li>
                        <li><a href='#'>فروش سازمانی</a></li>
                        <li><a href='#'>همکاری با آژانس ها</a></li>
                        <li><a href='#'>فرصت های شغلی</a></li>
                    </ul>
                </div>
                <div className={styles.secondIn2}>
                    <img src={Logo}/>
                    <span>تلفن پشتیبانی:     4390000-021</span>
                    <p>دفتر پشتیبانی: اکباتان نبش اتوبان لشکری کوی بیمه خیابان بیمه چهارمبن بست گلها پلاک 1</p>
                    <div>
                        <img src={img4}/>
                        <img src={img5}/>
                        <img src={img6}/>
                        <img src={img7}/>
                        <img src={img8}/>
                        <img src={img9}/>
                    </div>
                </div>
            </div>
            <div className={styles.thirdFooter}>
                <p>کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به شرکت سفرهای علی‌بابا می‌باشد. (نسخه 2.36.3)</p>
                <div className={styles.socialMedia}>
                    <a className={styles.linkedIn}></a>
                    <a className={styles.insta}></a>
                    <a className={styles.aparat}></a>
                    <a className={styles.youtube}></a>
                    <a className={styles.twitter}></a>
                    <a className={styles.telegram}></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
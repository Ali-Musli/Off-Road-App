import { useState } from "react";
import Popup from "../../Popup/Popup";
import style from "./CatalogItem.module.css";
import Gallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css'

const Car = ({ imgUrl, title, price, mileage, location, horsePower, gas, carData, extras }) => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    const images = [
        {
            original: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_2s.jpg",
            thumbnail: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_2s.jpg",
            description: title,
            originalHeight: "600px",
        },

        {
            original: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_vU.jpg",
            thumbnail: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_vU.jpg",
            description: title,
            originalHeight: "600px"
        },

        {
            original: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_Ee.jpg",
            thumbnail: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_Ee.jpg",
            description: title,
            originalHeight: "600px"
        },

        {
            original: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_8x.jpg",
            thumbnail: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_8x.jpg",
            description: title,
            originalHeight: "600px"
        },

        {
            original: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_nM.jpg",
            thumbnail: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_nM.jpg",
            description: title,
            originalHeight: "600px"
        },
        {
            original: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_IR.jpg",
            thumbnail: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_nM.jpg",
            description: title,
            originalHeight: "600px"
        },
    ];


    const customStyles = {
        // Customize image styles
        galleryImage: {
          objectFit: 'cover',
          height: '400px',
          borderRadius: '8px',
        },
    }
    return (
        <div className={style["item"]}>
            <img className={style["item-img"]} src={imgUrl} alt={title} />
            <div className={style["item-content"]}>
                <h2 className={style["item-content-title"]}>{title}</h2>
                <div className={style["item-content-resume"]}>
                    <div className={style["item-content-resume-item"]}>
                        <i className="fa-solid fa-road"></i>
                        <p>{mileage} km</p>
                    </div>
                    <div className={style["item-content-resume-item"]}>
                        <i className="fa-solid fa-calendar-days"></i>
                        <p>{carData}</p>
                    </div>
                    <div className={style["item-content-resume-item"]}>
                        <i className="fa-solid fa-horse-head"></i>
                        <p>{horsePower} hp</p>
                    </div>
                    <div className={style["item-content-resume-item"]}>
                        <i className="fa-solid fa-gas-pump"></i>
                        <p>{gas}</p>
                    </div>
                </div>
                <div className={style["item-content-extras"]}>
                    {
                        extras.map((item) => {

                            return (
                                <div key={item} className={style["item-content-extras-item"]}>
                                    <p>{item}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={style["item-content-info"]}>
                    <div className={style["item-content-info-location"]}>
                        <div className={style["item-content-info-location-svg"]}>
                            <i className="fa-solid fa-location-dot"></i>
                            <p>Location: </p>
                        </div>
                        <p>{location}</p>
                    </div>
                    <div className={style["item-content-info-price"]}>
                        <p>{price} Lv.</p>
                    </div>
                    <div className={style["item-popup"]}>
                        <button className={style["item-popup-btn"]} onClick={openPopup}>Details</button>
                        <Popup isOpen={isPopupOpen} onClose={closePopup}>
                            <div className={style["item-popup-content"]}>
                                <div className={style["popup-gallery"]}>
                                    <Gallery items={images} showIndex="true" showFullscreenButton={false} />
                                </div>
                                <div className={style["popup-content"]}>
                                    <div className={style['popup-content-description']}>
                                        <h3>Описание</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                    </div>
                                    <div className={style["popup-content-extras"]}>
                                        {
                                            extras.map((extra) => {
                                                return (
                                                    <p>{extra}</p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Car;
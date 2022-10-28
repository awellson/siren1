import React from 'react'
import img from '../../img/banner-img.png'

import './banner.css'

const Banner = () => {
    const badgeLink = 'https://google.com'

    return (
        <div className="banner">
            <div className="container banner__container">
                <div className="banner__wrapper">
                    <div className="banner__title">
                        How <span className="banner__title_ground">Over 410,000 Americans</span> Increased Their Property Value <span className="banner__title_ground"> In Under 6 Hours*</span> With This Simple Upgrade.
                    </div>
                    <div className="banner__text">
                        Ideal for detached and semi-detached homes with sloped roofs.
                    </div>
                </div>
                <div className="banner__img">
                    <a href={badgeLink} target="_blakn"><div className="banner__badge" /></a>
                    <img src={img} alt="banner" />
                </div>
            </div>
        </div>
    )
}

export default Banner;
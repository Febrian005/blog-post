import React from 'react'
import './footer.scss'
import { IcFacebook, IcInstagram, IcMy, IcTiktok } from '../../../assets'


const Icon = ({img}) => {
    return (
        <div className='icon-wrapper'>
            <img src={img} alt='icon' className='icon-medsos' />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div>
                    <img src={IcMy} alt='mylogo' className='logo' />
                </div>
                <div className='social-wrapper'>
                <Icon img={IcFacebook} alt='icfacebook'/>
                <Icon img={IcInstagram} alt='icinstagram'/>
                <Icon img={IcTiktok} alt='ictiktok'/>
                </div>
            </div>
            <div className='copyright'>
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
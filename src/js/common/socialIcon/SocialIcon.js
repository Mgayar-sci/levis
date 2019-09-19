import React from 'react';
import BaseIcon from '../baseIcon/BaseIcon';
import { facebookOfficial } from 'react-icons-kit/fa/facebookOfficial';
import { googlePlus } from 'react-icons-kit/fa/googlePlus';
import { twitter } from 'react-icons-kit/fa/twitter';
import { instagram } from 'react-icons-kit/fa/instagram';

const icons = {
    facebook: facebookOfficial,
    google: googlePlus,
    twitter: twitter,
    instagram: instagram
}

const SocialIcon = ({ type, link }) => {
    return (
        <a href={link} className="social-icon" >
            <BaseIcon icon={icons[type]} color="primary-light" size="md" />
        </a>
    )
}

export default SocialIcon
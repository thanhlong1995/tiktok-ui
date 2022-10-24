import React from 'react';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import * as searchService from '~/Services/searchService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { ShareIcon, MoreIcon, EmbedIcon, FacebookIcon, WhatsAppIcon } from '~/components/Icons';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuProfile from '~/pages/Profile/Menu';

const cx = classNames.bind(styles);

const listApp = [
    {
        title: 'Embed',
        icon: <EmbedIcon />,
        href: '/Embed',
    },
    {
        title: 'Share to Facebook',
        icon: <FacebookIcon />,
        href: '/Embed',
    },
    {
        title: 'Share to WhatsApp',
        icon: <WhatsAppIcon />,
        href: '/Embed',
    },
    {
        title: 'Share to Twitter',
        icon: <WhatsAppIcon />,
        href: '/Embed',
    },
    {
        title: 'Copy Link',
        icon: <WhatsAppIcon />,
        href: '/Embed',
    },
];
const listMoreApp = [
    {
        title: 'Share to LinkedIn',
        icon: <WhatsAppIcon />,
    },
    {
        title: 'Share to Reddit',
        icon: <WhatsAppIcon />,
    },
    {
        title: 'Share to Telegram',
        icon: <WhatsAppIcon />,
    },
    {
        title: 'Share to Email',
        icon: <WhatsAppIcon />,
    },
];
function Profile() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchService.search('hunglam');
            setSearchResult(result);
        };

        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            {searchResult.map((data, index) => (
                <div className={cx('layout-header')}>
                    <div className={cx('div-share-info')}>
                        <div className={cx('div-avatar')}>
                            <Image className={cx('avatar')} src={data.avatar} alt={data.nickName} />
                        </div>
                        <div className={cx('item-info')}>
                            <div className={cx('title-info')}>
                                <h2 className={cx('title')}>{data.full_name}</h2>
                                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                            </div>
                            <h1 className={cx('name')}>{data.nickname}</h1>
                            <Button primary className={cx('btn-follow')}>
                                Follow
                            </Button>
                            <div className={cx('div-icon-function')}>
                                <MenuProfile listApp={listApp} listMoreApp={listMoreApp}>
                                    <button className={cx('btn-icon')}>
                                        <ShareIcon />
                                    </button>
                                </MenuProfile>
                                <Tippy interactive placement="bottom">
                                    <button className={cx('btn-icon')}>
                                        <MoreIcon />
                                    </button>
                                </Tippy>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className={cx('layout-main')}></div>
        </div>
    );
}

export default Profile;

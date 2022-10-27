import React from 'react';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import * as searchService from '~/Services/Service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';
import Image from '~/components/Image';
import {
    ShareIcon,
    MoreIcon,
    EmbedIcon,
    FacebookIcon,
    WhatsAppIcon,
    EditIcon,
    BlockIcon,
    PersonIcon,
} from '~/components/Icons';
import Tippy from '@tippyjs/react';
import MenuProfile from '~/pages/Profile/Menu';
import WrapPopper from './WrapPopper';

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
    const [searchResult, setSearchResult] = useState({});
    const [anchorEl, setAnchorEl] = useState(null);
    const [styleVideo, setStyleVideo] = useState('layout-item-choose');
    const [styleLike, setStyleLike] = useState('');
    const [showMain, setShowMain] = useState(true);
    const [nickName, setNickName] = useState(searchResult.nickname);
    const [currentNickName, setCurrentNickName] = useState('');
    const [classes, setClasses] = useState('');
    const [countBio, setCountBio] = useState(0);
    const [currentBio, setCurrentBio] = useState('');
    const [isNickName, setIsNickName] = useState(false);

    const open = Boolean(anchorEl);
    const id = open ? 'wrap-popper' : undefined;

    const handleOnChangeValueBio = (e) => {
        setClasses('btn-save-disable-bc');
        if (currentBio.length < 80) {
            setCurrentBio(e.target.value);
        }
        setCountBio(currentBio.length);
    };

    useEffect(() => {
        const fetchGetApi = async () => {
            const result = await searchService.getByID(21);
            setSearchResult(result);
        };

        fetchGetApi();
    }, []);

    useEffect(() => {
        const fetchPutApi = async () => {
            const result = await searchService.putByID(21);
            setSearchResult(result);
        };

        fetchPutApi();
    }, []);

    const handleOnclickEditPfrofile = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleClosePopper = () => {
        setAnchorEl(null);
    };

    const handleOnclickLayoutItem = (e) => {
        if (e.currentTarget.id === 'layout-item-like') {
            setStyleLike('layout-item-choose');
            setStyleVideo('');
            setShowMain(false);
        } else {
            setStyleVideo('layout-item-choose');
            setStyleLike('');
            setShowMain(true);
        }
    };

    const handleOnChangeNickName = (e) => {
        console.log(e.target.value);
        setIsNickName(true);
        setCurrentNickName(e.target.value);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('layout-header')}>
                <div className={cx('div-share-info')}>
                    <div className={cx('div-avatar')}>
                        <Image className={cx('avatar')} src={searchResult.avatar} alt={searchResult.nickname} />
                    </div>
                    <div className={cx('item-info')}>
                        <div className={cx('title-info')}>
                            <h2 className={cx('title')}>{searchResult.full_name}</h2>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </div>
                        <h1 className={cx('name')}>{searchResult.nickname}</h1>
                        <Button
                            className={cx('btn-edit-profile')}
                            leftIcon={<EditIcon />}
                            onClick={handleOnclickEditPfrofile}
                        >
                            Edit Profile
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
                <div className={cx('div-info-follow')}>
                    <span className={cx('div-info-item')}>
                        <span className={cx('div-info-item-number')}>{searchResult.followings_count}</span>Following
                    </span>
                    <span className={cx('div-info-item')}>
                        <span className={cx('div-info-item-number')}>{searchResult.followers_count}</span>Follower
                    </span>
                    <span className={cx('div-info-item')}>
                        <span className={cx('div-info-item-number')}>{searchResult.likes_count}</span>Likes
                    </span>
                </div>
            </div>
            <div className={cx('wrapper-layout-main')}>
                <div className={cx('layout-main-header')}>
                    <Button
                        id="layout-item-video"
                        className={cx('layout-item', 'layout-item-video', styleVideo)}
                        onClick={handleOnclickLayoutItem}
                    >
                        Videos
                    </Button>
                    <Button
                        id="layout-item-like"
                        className={cx('layout-item', 'layout-item-like', styleLike)}
                        leftIcon={<BlockIcon className={cx('transform: translateY(2px)')} />}
                        onClick={handleOnclickLayoutItem}
                    >
                        Likes
                    </Button>
                </div>
                <div className={cx('layout-main-content')}>
                    {showMain ? (
                        <div className={cx('content')}>
                            <PersonIcon className={cx('person-icon')} />
                            <h2 className={cx('title')}>Upload your first video</h2>
                            <h4 className={cx('discription')}>Your videos will appear here</h4>
                        </div>
                    ) : (
                        <div className={cx('content')}>
                            <PersonIcon className={cx('person-icon')} />
                            <h2 className={cx('title')}>No liked videos yet</h2>
                            <h4 className={cx('discription')}>Videos you liked will appear here</h4>
                        </div>
                    )}
                </div>
            </div>
            <WrapPopper
                classes
                isDisable
                id={id}
                open={open}
                anchorEl={anchorEl}
                userName={searchResult.full_name}
                nickname={searchResult.nickname}
                currentNickName={currentNickName}
                currentBio={searchResult.bio}
                countBio
                handleClosePopper={handleClosePopper}
                handleOnChangeNickName={handleOnChangeNickName}
                handleOnChangeValueBio
                isNickName={isNickName}
            />
        </div>
    );
}

export default Profile;

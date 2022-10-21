import React from 'react';
import { useState, useEffect } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSpinner,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCoins,
    faSignOut,
    faGear,
    faVideoCamera,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images/index';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { MessageIcon, UploadIcon, InboxIcon, SearchIcon, CloseIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const MENU_ITEM_LOGIN = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/acount_name',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faVideoCamera} />,
        title: 'LIVE Studio',
        to: '/studio',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Logout',
        to: '/setting',
        separate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3, 4, 5]);
        }, 0);
    }, []);

    let menuItemResult = [];
    if (currentUser) {
        menuItemResult = MENU_ITEM_LOGIN;
    } else {
        menuItemResult = MENU_ITEMS;
    }

    // Handle logic
    const handleMenuChange = (menuItem) => {};

    return (
        <header className={cx('wapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <TippyHeadless
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Seach account and videos" />
                        <button className={cx('clear')}>
                            <CloseIcon />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </TippyHeadless>
                <div className={cx('actions')}>
                    <>
                        <Tippy content="Upload" placement="bottom">
                            <Button href="/upload" className={cx('action-btn')}>
                                <UploadIcon />
                            </Button>
                        </Tippy>
                    </>
                    {currentUser ? (
                        <>
                            <Tippy content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={menuItemResult} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://media.vov.vn/sites/default/files/styles/large/public/2022-08/anh-nen-avatar-dep_652403.jpg"
                                alt="avatar"
                                fallback={images.changedImage}
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;

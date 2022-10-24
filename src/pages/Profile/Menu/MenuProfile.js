import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './MenuProfile.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import ItemProfile from './ItemProfile';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuProfile({ children, listApp = [], listMoreApp = [], hideOnClick = false }) {
    const renderItems = () => {
        return listApp.map((item, index) => {
            return <ItemProfile key={index} data={item} />;
        });
    };

    const rederResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <WrapperPopper className={cx('menu-popper')}>{renderItems()}</WrapperPopper>
        </div>
    );

    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 300]}
            offset={[8, 12]}
            render={rederResult}
            hideOnClick={hideOnClick}
        >
            {children}
        </Tippy>
    );
}
MenuProfile.propTypes = {
    children: PropTypes.node.isRequired,
    listApp: PropTypes.array,
    hideOnClick: PropTypes.bool,
    listMoreApp: PropTypes.array,
};
export default MenuProfile;

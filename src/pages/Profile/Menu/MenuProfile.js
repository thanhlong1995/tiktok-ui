import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './MenuProfile.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import ItemProfile from './ItemProfile';
import PropTypes from 'prop-types';
import { DropIcon } from '~/components/Icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuProfile({ children, listApp = [], listMoreApp = [], hideOnClick = false }) {
    const [listItemApp, setListItemApp] = useState(listApp);
    const [mounted, setMounted] = useState(false);

    const renderItems = () => {
        return listItemApp.map((item, index) => {
            return <ItemProfile key={index} data={item} />;
        });
    };

    const handleClickShowMore = () => {
        setListItemApp((prev) => [...prev, ...listMoreApp]);
    };

    const handleOnShow = () => {
        setMounted(true);
        setListItemApp(listApp);
    };

    const rederResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <WrapperPopper className={cx('menu-popper')}>
                {renderItems()}
                {listItemApp.length === listApp.length && (
                    <Button onClick={handleClickShowMore}>
                        <DropIcon />
                    </Button>
                )}
            </WrapperPopper>
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
            onShow={handleOnShow}
            onHidden={() => setMounted(false)}
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

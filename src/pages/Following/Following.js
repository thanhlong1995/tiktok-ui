import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import Popper from '@mui/material/Popper';

const cx = classNames.bind(styles);

function Following() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleHidden = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'main-popper' : undefined;

    return (
        <div>
            <Button aria-describedby={id} className={cx('show-info')} onClick={handleClick}>
                Info
            </Button>
            <Popper id={cx(id)} anchorEl={anchorEl} open={open} transition>
                <div className={cx('popup-content')}>
                    <h1>User info</h1>
                    <Button onClick={handleHidden} className={cx('btn-close')}>
                        Close
                    </Button>
                </div>
            </Popper>
        </div>
    );
}

export default Following;

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wapper')}>
            <h2>side bar</h2>
        </aside>
    );
}

export default Sidebar;

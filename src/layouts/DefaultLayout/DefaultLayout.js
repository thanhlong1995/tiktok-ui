import Header from '~/layouts/conponents/Header/Header';
import Sidebar from './Sidebar/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;

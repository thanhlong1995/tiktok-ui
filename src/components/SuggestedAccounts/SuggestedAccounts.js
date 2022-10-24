import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const listAccountItem = [
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1666598400&x-signature=tvJqDlCMQT4i8rm3KywR5mbK2mY%3D',
        title: 'theanh28entertainment',
        nickName: 'Theanh28 Entertainment',
        iconTick: <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />,
    },
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1666598400&x-signature=KIebdFmuwzqsBe4tIPPicLi9%2F%2FI%3D',
        title: 'tiin.vn',
        nickName: 'Tiin.vn',
        iconTick: '',
    },
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0ba6c8ba9eed06771b9ab7bfb5df5389~c5_100x100.jpeg?x-expires=1666598400&x-signature=EhKpZy4zS666VVVGKCJecMrIv7k%3D',
        title: 'vnnn.official',
        nickName: 'vnnn.official',
        iconTick: <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />,
    },
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9b8ad78bc0695f5969d45fbd89261e29~c5_100x100.jpeg?x-expires=1666598400&x-signature=oeLba3pymo6rdb7%2BaBOgVQgkahQ%3D',
        title: 'Trang.Dang.904',
        nickName: 'Trà Dặng',
        iconTick: '',
    },
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1666598400&x-signature=KIebdFmuwzqsBe4tIPPicLi9%2F%2FI%3D',
        title: 'tiin.vn',
        nickName: 'Tiin.vn',
        iconTick: '',
    },
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0ba6c8ba9eed06771b9ab7bfb5df5389~c5_100x100.jpeg?x-expires=1666598400&x-signature=EhKpZy4zS666VVVGKCJecMrIv7k%3D',
        title: 'vnnn.official',
        nickName: 'vnnn.official',
        iconTick: <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />,
    },
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9b8ad78bc0695f5969d45fbd89261e29~c5_100x100.jpeg?x-expires=1666598400&x-signature=oeLba3pymo6rdb7%2BaBOgVQgkahQ%3D',
        title: 'Trang.Dang.904',
        nickName: 'Trà Dặng',
        iconTick: '',
    },
];

function SuggestedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {listAccountItem.map((account, index) => (
                <AccountItem key={index} data={account} />
            ))}
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;

import classNames from 'classnames/bind';
import styles from './MenuProfile.module.scss';
import Button from '~/components/Button';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function ItemProfile({ data }) {
    return (
        <Button href={data.href} leftIcon={data.icon} className={cx('item-profile-name')} large>
            {data.title}
        </Button>
    );
}
ItemProfile.propTypes = {
    data: PropTypes.object,
};

export default ItemProfile;

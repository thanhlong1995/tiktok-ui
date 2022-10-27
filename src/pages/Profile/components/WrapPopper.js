import { Popper } from '@mui/material';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { CloseIconX, EditAvatarIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function WrapPopper({
    id,
    open,
    anchorEl,
    handleClosePopper,
    handleOnChangeNickName,
    handleOnChangeValueBio,
    userName,
    nickname,
    currentBio,
    countBio,
    classes,
    isDisable,
    currentNickName,
    isNickName,
}) {
    return (
        <Popper id={id} open={open} anchorEl={anchorEl} transition className={cx('wrap-popper')}>
            <div className={cx('div-tiktok-profile')}>
                <div className={cx('edit-profile-popup')}>
                    <div className={cx('edit-profile-header')}>
                        <span className={cx('edit-profile-title')}>Edit profile</span>
                        <span className={cx('edit-profile-title-icon')} onClick={handleClosePopper}>
                            <CloseIconX />
                        </span>
                    </div>
                    <div className={cx('edit-profile-content-container')}>
                        <div className={cx('div-profile-container')}>
                            <div className={cx('edit-profile-photo')}>Profile photo</div>
                            <div className={cx('edit-profile-avatar')}>
                                <div className={cx('container-avatar')}>
                                    <span className={cx('container-style-avatar')}>
                                        <Image
                                            className={cx('tiktok-avatar')}
                                            src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7156441963359633414~c5_100x100.jpeg?x-expires=1666854000&x-signature=OCc9baJC0iYFjL7uFsSoOX8oE%2Fg%3D"
                                            alt="avatar"
                                        />
                                    </span>
                                </div>
                                <div className={cx('tiktok-edit-avatar')}>
                                    <EditAvatarIcon />
                                </div>
                            </div>
                        </div>
                        <div className={cx('div-profile-container')}>
                            <div className={cx('edit-profile-photo')}>Username</div>
                            <div className={cx('edit-profile-username-input')}>
                                <div className={cx('edit-profile-avatar')}>
                                    <input
                                        placeholder={userName}
                                        value={userName}
                                        className={cx('tiktok-input-text')}
                                        readOnly={true}
                                        onChange={(e) => e.target.defaultValue}
                                    />
                                    <p className={cx('edit-profile-username-link')}>www.tiktok.com/@longnt2001</p>
                                    <p className={cx('edit-profile-username-tip')}>
                                        Usernames can only contain letters, numbers, underscores, and periods. Changing
                                        your username will also change your profile link.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('div-profile-container')}>
                            <div className={cx('edit-profile-photo')}>Nik Name</div>
                            <div className={cx('edit-profile-username-input')}>
                                <div className={cx('edit-profile-avatar')}>
                                    <input
                                        className={cx('tiktok-input-text')}
                                        placeholder={nickname}
                                        defaultValue={nickname}
                                        value={isNickName ? currentNickName : nickname}
                                        onChange={(e) => handleOnChangeNickName(e)}
                                    />
                                    <p className={cx('edit-profile-username-link')}>
                                        Your nickname can only be changed once every 7 days.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('div-profile-container')}>
                            <div className={cx('edit-profile-photo')}>Bio</div>
                            <div className={cx('edit-profile-username-input')}>
                                <div className={cx('edit-profile-avatar')}>
                                    <textarea
                                        placeholder="Bio"
                                        value={currentBio}
                                        className={cx('edit-profile-bio-input')}
                                        onChange={(e) => handleOnChangeValueBio}
                                    ></textarea>
                                    <p className={cx('edit-profile-text-count')}>{countBio}/80</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('edit-profile-footer')}>
                        <Button className={cx('edit-profile-cancel')} onClick={handleClosePopper}>
                            Cancel
                        </Button>
                        <Button
                            className={cx('edit-profile-save', classes)}
                            disabled={isDisable}
                            onClick={handleClosePopper}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </Popper>
    );
}

export default WrapPopper;

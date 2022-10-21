import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';
const Image = forwardRef(({ src, atl, fallback: avatarDefauld = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handelError = () => {
        setFallback(avatarDefauld);
    };

    return (
        <img
            //className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            atl={atl}
            {...props}
            onError={handelError}
        />
    );
});

export default Image;

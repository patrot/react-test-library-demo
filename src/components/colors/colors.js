import React, {useState} from 'react';
import styles from './colors.module.scss';

const Colors = () => {
    const [status, setStatus] = useState('Status:');

    const handleGreenButtonClick = () => {
        setStatus ('Status: Green Button Pressed');
    }

    return (
        <div className={styles.body}>
            <div className={styles.body__statusHeader} data-testid='statusHdr'>{status}</div>
            <button className={styles.body__button} data-testid='greenBtn' onClick={handleGreenButtonClick}>Green</button>
        </div>
    );
};

export default Colors;
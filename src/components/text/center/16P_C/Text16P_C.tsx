import React from 'react';
import styles from './Text16P_C.styles';

export default function Text16P_C(props: { text: string; ariaHidden?: boolean }) {
    return (
        <span className={styles.text} aria-hidden={props.ariaHidden}>
            {props.text}
        </span>
    );
}

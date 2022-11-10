import React from 'react';
import styles from './Text26P_C.styles';

export default function Text26P_C(props: { text: string; ariaHidden?: boolean }) {
    return (
        <span className={styles.text} aria-hidden={props.ariaHidden}>
            {props.text}
        </span>
    );
}

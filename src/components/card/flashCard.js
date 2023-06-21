import React from "react";
import styles from "./flashCard.module.css";
import "./flipTransition.css";

function FlashCard(props) {

    const { word, definition, onClick } = props;

    return (
        <div className={styles.flashCard} onClick={onClick}>
            <div className={styles.front}>Word</div>
            <div className={styles.back}>Definition</div>
        </div>
    );
}

export default FlashCard;
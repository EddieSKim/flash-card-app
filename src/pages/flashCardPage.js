import React from "react";
import FlashCard from "../components/card/flashCard";
import FlipCard from "../components/flipCard/flipCard";
import styles from "./flashCardPage.module.css";

function FlashCardPage() {

    return(
        <div className={styles.container}>
            <FlipCard />
        </div>
    );
}

export default FlashCardPage;
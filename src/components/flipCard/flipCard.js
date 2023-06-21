import React, { useState } from "react";
import FlashCard from "../card/flashCard";
import { CSSTransition } from 'react-transition-group';

function FlipCard() {
    const [showFront, setShowFront] = useState(true);

    return (
        <div>
            <CSSTransition in={showFront} timeout={300} classNames="flip">
                <FlashCard onClick={() => {
                    setShowFront((t) => !t);
                }} />
            </CSSTransition>
        </div>
    );
}

export default FlipCard;
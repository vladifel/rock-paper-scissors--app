import React from 'react';
import './LetsPlayButton.css'

interface LetsPlayButtonProps {
    onClick: () => void;
}

const LetsPlayButton: React.FunctionComponent<LetsPlayButtonProps> = (props: LetsPlayButtonProps) => {
    return (
        <button id='lets_play_button'
            onClick={props.onClick}
        >
            Let's Play
        </button>
    )
}

export default LetsPlayButton
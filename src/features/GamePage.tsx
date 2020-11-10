import React from "react";
import rules1 from "../assets/rules1.png";
import CustomIconButton, { IconTypes } from "../helpers/CustomIconButton/CustomIconButton";
import LetsPlayButton from '../helpers/LetsPlayButton/LetsPlayButton';

const styles: any = {
    board: {
        display: 'flex',
        flexGrow: 4
    },
    icon: {
        margin: '0.5rem 0'
    },
    icons: {
        margin: '3rem 2rem 0',
        display: "flex",
        flexDirection: 'column',
    },
    computerIcons: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    playerIcons: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    root: {
        height: '100%',
        width: '100%',
        display: "flex",
        flexDirection: 'row',
        alignItems: 'flex-start',
        cursor: 'default'
    },
};

interface GamePageProps { }

const actionIcon = (type: IconTypes, onClick: () => void, props: GamePageProps) => {
    return (
        <div style={styles.icon}>
            <CustomIconButton
                iconType={type}
                onClick={onClick}
            />
        </div>
    )
}

const playerIcons = (onClick: () => void, props: GamePageProps) => {
    return (
        <div style={styles.icons}>
            {actionIcon(IconTypes.Lizard, onClick, props)}
            {actionIcon(IconTypes.Paper, onClick, props)}
            {actionIcon(IconTypes.Rock, onClick, props)}
            {actionIcon(IconTypes.Scissors, onClick, props)}
            {actionIcon(IconTypes.Spock, onClick, props)}
        </div>
    )
}

const computerIcons = (onClick: () => void, props: GamePageProps) => {
    return (
        <div style={styles.icons}>
            {actionIcon(IconTypes.Lizard, onClick, props)}
            {actionIcon(IconTypes.Paper, onClick, props)}
            {actionIcon(IconTypes.Rock, onClick, props)}
            {actionIcon(IconTypes.Scissors, onClick, props)}
            {actionIcon(IconTypes.Spock, onClick, props)}
        </div>
    )
}

const GamePage: React.FunctionComponent<GamePageProps> = (props: GamePageProps) => {
    const onClick = () => {
        alert("playing")
    }
    return (
        <div style={styles.root}>
            <div style={styles.playerIcons}>
                {playerIcons(onClick, props)}
            </div>
            <div style={styles.board}>

            </div>
            <div style={styles.computerIcons}>
                {computerIcons(onClick, props)}
            </div>
        </div>
    );
};

export default GamePage;
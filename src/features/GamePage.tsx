import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CustomIconButton, { IconTypes } from "../helpers/CustomIconButton/CustomIconButton";
import SmallIIconButton from "../helpers/SmallIconButton/SmallIconButton";

const styles: any = {
    board: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        flexGrow: 4,
        minHeight: '25rem',
        alignItems: 'center',
    },
    boardOutcome: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        flexGrow: 2
    },
    boardScores: {
        display: "flex",
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
    },
    centralContainer: {
        display: 'flex',
        alignItems: 'flex-start',
    },
    computerIcons: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    icon: {
        margin: '0.5rem 0'
    },
    icons: {
        margin: '3rem 2rem 0',
        display: "flex",
        flexDirection: 'column',
    },
    iconSmall: {
        width: '4rem',
        margin: '0.5rem'
    },
    mainContainer: {
        width: '90%',
        display: "flex",
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    outcomeText: {
        color: '#047dab',
        border: '0.5rem solid #54bbb8',
        borderRadius: '0.5rem',
        padding: '1rem 5rem'
    },
    outcomeTextContainer: {
        display: 'flex',
        justifyContent: 'center',

    },
    player: {
        color: '#54bbb8',
    },
    playerIcons: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    root: {
        height: '100%',
        width: '100%',
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'default'
    },
    score: {
        margin: '0 1rem'
    },
    scores: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    scoreSeparator: {
        paddingBottom: '0.5rem'
    },
    topBar: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        paddingRight: '3rem'
    }
};

interface GamePageProps { }

const whoWins = (type: IconTypes, machineNum: number): boolean | undefined => {
    let playerWins: boolean | undefined = undefined;
    if (type === IconTypes.Lizard) {
        (machineNum !== 1 && machineNum !== 4)
            ? machineNum === 0
                ? playerWins = undefined
                : playerWins = false
            : playerWins = true;
    } else if (type === IconTypes.Paper) {
        (machineNum !== 2 && machineNum !== 4)
            ? machineNum === 1
                ? playerWins = undefined
                : playerWins = false
            : playerWins = true;
    } else if (type === IconTypes.Rock) {
        (machineNum !== 0 && machineNum !== 3)
            ? machineNum === 2
                ? playerWins = undefined
                : playerWins = false
            : playerWins = true;
    } else if (type === IconTypes.Scissors) {
        (machineNum !== 0 && machineNum !== 1)
            ? machineNum === 3
                ? playerWins = undefined
                : playerWins = false
            : playerWins = true;
    } else if (type === IconTypes.Spock) {
        (machineNum !== 2 && machineNum !== 3)
            ? machineNum === 4
                ? playerWins = undefined
                : playerWins = false
            : playerWins = true;
    }
    return playerWins;
}

const outcomeText = (type: IconTypes, machineNum: number): string | undefined => {
    let outcome: string | undefined = undefined;
    if (type === machineNum) {
        outcome = undefined;
    } else if (type === 0 || machineNum === 0) {
        (type === 1 || machineNum === 1) && (outcome = 'Lizard eats Paper');
        (type === 2 || machineNum === 2) && (outcome = 'Rock crushes Lizard');
        (type === 3 || machineNum === 3) && (outcome = 'Scissors decapitates Lizard');
        (type === 4 || machineNum === 4) && (outcome = 'Lizard poisons Spock');
    } else if (type === 1 || machineNum === 1) {
        (type === 0 || machineNum === 0) && (outcome = 'Lizard eats Paper');
        (type === 2 || machineNum === 2) && (outcome = 'Paper covers Rock');
        (type === 3 || machineNum === 3) && (outcome = 'Scissors cuts Paper');
        (type === 4 || machineNum === 4) && (outcome = 'Paper disproves Spock');
    } else if (type === 2 || machineNum === 2) {
        (type === 0 || machineNum === 0) && (outcome = 'Rock crushes Lizard');
        (type === 1 || machineNum === 1) && (outcome = 'Paper covers Rock');
        (type === 3 || machineNum === 3) && (outcome = 'Rock crushes Scissors');
        (type === 4 || machineNum === 4) && (outcome = 'Spock vaporizes Rock');
    } else if (type === 3 || machineNum === 3) {
        (type === 0 || machineNum === 0) && (outcome = 'Scissors decapitates Lizard');
        (type === 1 || machineNum === 1) && (outcome = 'Scissors cuts Paper');
        (type === 2 || machineNum === 2) && (outcome = 'Rock crushes Scissors');
        (type === 4 || machineNum === 4) && (outcome = 'Spock smashes Scissors');
    } else if (type === 4 || machineNum === 4) {
        (type === 0 || machineNum === 0) && (outcome = 'Lizard poisons Spock');
        (type === 1 || machineNum === 1) && (outcome = 'Paper disproves Spock');
        (type === 2 || machineNum === 2) && (outcome = 'Spock vaporizes Rock');
        (type === 3 || machineNum === 3) && (outcome = 'Spock smashes Scissors');
    }
    return outcome;
}

const actionIcon = (type: IconTypes, onClick: (type: IconTypes) => void, props: GamePageProps, isSelected?: boolean, side?: 'left' | 'right') => {
    return (
        <div style={styles.icon}>
            <CustomIconButton
                iconType={type}
                onClick={onClick}
                isSelected={isSelected}
                side={side}
            />
        </div>
    )
}

const resetIcon = (onClick: () => void, props: GamePageProps, isSelected?: boolean) => {
    return (
        <div style={styles.iconSmall}>
            <SmallIIconButton
                isInfo={false}
                onClick={onClick}
            />
        </div>
    )
}

const rulesIcon = (onClick: () => void, props: GamePageProps, isSelected?: boolean) => {
    return (
        <div style={styles.iconSmall}>
            <SmallIIconButton
                isInfo={true}
                onClick={onClick}
            />
        </div>
    )
}

const playerIcons = (onClick: (type: IconTypes) => void, props: GamePageProps) => {
    return (
        <div style={styles.icons}>
            {actionIcon(IconTypes.Rock, onClick, props)}
            {actionIcon(IconTypes.Paper, onClick, props)}
            {actionIcon(IconTypes.Scissors, onClick, props)}
            {actionIcon(IconTypes.Lizard, onClick, props)}
            {actionIcon(IconTypes.Spock, onClick, props)}
        </div>
    )
}

const machineIcons = (onClick: () => void, currMachineNum: null | number, props: GamePageProps) => {
    return (
        <div style={styles.icons}>
            {actionIcon(IconTypes.Rock, onClick, props, currMachineNum === IconTypes.Rock)}
            {actionIcon(IconTypes.Paper, onClick, props, currMachineNum === IconTypes.Paper)}
            {actionIcon(IconTypes.Scissors, onClick, props, currMachineNum === IconTypes.Scissors)}
            {actionIcon(IconTypes.Lizard, onClick, props, currMachineNum === IconTypes.Lizard)}
            {actionIcon(IconTypes.Spock, onClick, props, currMachineNum === IconTypes.Spock)}
        </div>
    )
}

const GamePage: React.FunctionComponent<GamePageProps> = (props: GamePageProps) => {
    const [currMachineNum, setMachineNum] = useState<null | number>(null);
    const [currPlayerNum, setPlayerNum] = useState<null | number>(null);
    const [didPlayerWin, setDidPlayerWin] = useState<boolean | null | undefined>(null);
    const [outcome, setOutcome] = useState<string | undefined>(undefined);
    const [playerScore, setPlayerScore] = useState<number>(0);
    const [machineScore, setMachineScore] = useState<number>(0);
    let history = useHistory();

    const onMachineClick = () => {
        console.log("I can decide for myself!!")
    }

    const onResetClick = () => {
        setMachineNum(null);
        setDidPlayerWin(null);
        setOutcome(undefined);
        setPlayerScore(0);
        setMachineScore(0);
    }

    const onInfoClick = () => {
        history.push('/rules')
    }

    const onButtonPressed = (type: IconTypes) => {
        const machineNum = Math.floor(Math.random() * 5);
        setPlayerNum(type);
        Promise.resolve()
            .then(() => delay(200))
            .then(() => setMachineNum(2))
            .then(() => delay(270))
            .then(() => setMachineNum(1))
            .then(() => delay(340))
            .then(() => setMachineNum(3))
            .then(() => delay(410))
            .then(() => setMachineNum(0))
            .then(() => delay(480))
            .then(() => setMachineNum(4))
            .then(() => delay(600))
            .then(() => setMachineNum(machineNum));

        const delay = (duration: number) => {
            return new Promise((resolve) => {
                setTimeout(() => resolve(), duration);
            });
        }

        const playerWins = whoWins(type, machineNum);
        setDidPlayerWin(playerWins);
        if (playerWins) {
            setPlayerScore(playerScore + 1);
        } else if (playerWins === false) {
            setMachineScore(machineScore + 1);
        }
        setOutcome(outcomeText(type, machineNum));
        console.log(type, machineNum, playerWins);
    }
    return (
        <div style={styles.root}>
            <div style={styles.topBar}>
                {rulesIcon(onInfoClick, props)}
                {resetIcon(onResetClick, props)}
            </div>
            <div style={styles.mainContainer}>
                <div style={styles.playerIcons}>
                    {playerIcons(onButtonPressed, props)}
                </div>
                <div>
                    {currPlayerNum && actionIcon(currPlayerNum, onMachineClick, props, true, 'left')}
                </div>
                <div style={styles.board}>
                    <div style={styles.scores}>
                        <h3 style={styles.player}>Player</h3>
                        <h2 style={styles.score}>{playerScore}</h2>
                        <h2 style={styles.scoreSeparator}>:</h2>
                        <h2 style={styles.score}>{machineScore}</h2>
                        <h3 style={styles.player}>Machine</h3>
                    </div>
                    <div style={styles.boardOutcome}>
                        <div style={styles.outcomeTextContainer}>
                            {outcome && <h2 style={styles.outcomeText}>{outcome}</h2>}
                        </div>
                        {didPlayerWin !== null &&
                            <h3>{didPlayerWin === undefined ? "it's a Tie!" : didPlayerWin ? "You Win!!" : "The Machine wins :-("}</h3>}
                    </div>
                </div>
                <div>
                    {currMachineNum && actionIcon(currMachineNum, onMachineClick, props, true, 'right')}
                </div>
                <div style={styles.computerIcons}>
                    {machineIcons(onMachineClick, currMachineNum, props)}
                </div>
            </div>
        </div>
    );
};

export default GamePage;
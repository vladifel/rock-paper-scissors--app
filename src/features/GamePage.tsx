import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CustomIconButton, { IconTypes } from "../helpers/CustomIconButton/CustomIconButton";
import SmallIIconButton from "../helpers/SmallIconButton/SmallIconButton";
import './GamePage.css';

const styles: any = {
    board: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        flexGrow: 4,
        minHeight: '25rem',
        alignItems: 'center',
    },
    boardMobile: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
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
    computerMedia: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        margin: '0.5rem 0'
    },
    icons: {
        margin: '3rem 2rem 0',
        display: "flex",
        flexDirection: 'column',
    },
    iconsMobile: {
        margin: '0 2rem',
        display: "flex",
        flexDirection: 'column',
    },
    mainContainer: {
        width: '100%',
        display: "flex",
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    mainContainerMobile: {
        width: '100%',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center'
    },
    mainContainerTop: {
        display: "flex",
        justifyContent: 'center',
        height: '185px'
    },
    mainContainerBottom: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    outcomeText: {
        color: '#047dab',
        border: '0.5rem solid #54bbb8',
        borderRadius: '0.5rem',
        padding: '1rem 5rem'
    },
    outcomeTextMedia: {
        color: '#047dab',
        border: '0.25rem solid #54bbb8',
        borderRadius: '0.25rem',
        padding: '1rem 2.5rem'
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
    playerMedia: {
        display: 'flex',
        alignItems: 'center',
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
        justifyContent: 'center',
    },
    scoreSeparator: {
        paddingBottom: '0.5rem'
    },
    selectedAction: {
        display: "flex",
        alignItems: 'flex-end',
        minHeight: '30rem',
        minWidth: '8rem'
    },
    selectedActionMedia: {
        display: "flex",
        alignItems: 'flex-end',
        minHeight: '18.1rem',
        minWidth: '4rem'
    },
    selectedActionMobile: {
        display: "flex",
        alignItems: 'flex-end',
        minWidth: '4rem'
    },
    topBar: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //paddingRight: '3rem'
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

const results = (
    type: IconTypes,
    machineNum: number,
    playerScore: number,
    machineScore: number,
    setDidPlayerWin: (playerWins: boolean | undefined) => void,
    setPlayerScore: (playerScore: number) => void,
    setMachineScore: (machineScore: number) => void,
    setOutcome: (playerWins: string | undefined) => void
) => {
    const playerWins = whoWins(type, machineNum);
    setDidPlayerWin(playerWins);
    if (playerWins) {
        setPlayerScore(playerScore + 1);
    } else if (playerWins === false) {
        setMachineScore(machineScore + 1);
    }
    setOutcome(outcomeText(type, machineNum));
}

const actionIcon = (type: IconTypes, onClick: (type: IconTypes) => void, isSelected?: boolean, side?: 'left' | 'right') => {
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

const resetIcon = (onClick: () => void) => {
    return (
        <div >
            <SmallIIconButton
                isInfo={false}
                onClick={onClick}
            />
        </div>
    )
}

const rulesIcon = (onClick: () => void) => {
    return (
        <div >
            <SmallIIconButton
                isInfo={true}
                onClick={onClick}
            />
        </div>
    )
}

const playerIcons = (isMobile: boolean, onClick: (type: IconTypes) => void) => {
    return (
        <div style={isMobile ? styles.iconsMobile : styles.icons}>
            {actionIcon(IconTypes.Rock, onClick)}
            {actionIcon(IconTypes.Paper, onClick)}
            {actionIcon(IconTypes.Scissors, onClick)}
            {actionIcon(IconTypes.Lizard, onClick)}
            {actionIcon(IconTypes.Spock, onClick)}
        </div>
    )
}

const machineIcons = (isMobile: boolean, onClick: () => void, currMachineNum: null | number) => {
    return (
        <div style={isMobile ? styles.iconsMobile : styles.icons}>
            {actionIcon(IconTypes.Rock, onClick, currMachineNum === IconTypes.Rock)}
            {actionIcon(IconTypes.Paper, onClick, currMachineNum === IconTypes.Paper)}
            {actionIcon(IconTypes.Scissors, onClick, currMachineNum === IconTypes.Scissors)}
            {actionIcon(IconTypes.Lizard, onClick, currMachineNum === IconTypes.Lizard)}
            {actionIcon(IconTypes.Spock, onClick, currMachineNum === IconTypes.Spock)}
        </div>
    )
}

const GamePage: React.FunctionComponent<GamePageProps> = (props: GamePageProps) => {
    const [width, setWidth] = useState();
    const [currMachineNum, setMachineNum] = useState<null | number>(null);
    const [selectedMachineNum, setSelectedMachineNum] = useState<null | number>(null);
    const [currPlayerNum, setPlayerNum] = useState<null | number>(null);
    const [didPlayerWin, setDidPlayerWin] = useState<boolean | null | undefined>(null);
    const [outcome, setOutcome] = useState<string | undefined>(undefined);
    const [playerScore, setPlayerScore] = useState<number>(0);
    const [machineScore, setMachineScore] = useState<number>(0);
    let history = useHistory();
    useEffect(() => {
        setWidth(window.innerWidth as any);
        window.addEventListener("resize", () => setWidth(window.innerWidth as any));
    }, []);

    const media = width !== undefined && width! >= 1160 ? false : true;
    const mobile = width !== undefined && width! >= 640 ? false : true;

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
        setOutcome(undefined);
        setDidPlayerWin(null)
        setPlayerNum(null);
        setMachineNum(null);
        setSelectedMachineNum(null);
        const machineNum = Math.floor(Math.random() * 5);
        setPlayerNum(type);
        Promise.resolve()
            .then(() => delay(50))
            .then(() => setMachineNum(2))
            .then(() => delay(100))
            .then(() => setMachineNum(1))
            .then(() => delay(150))
            .then(() => setMachineNum(3))
            .then(() => delay(200))
            .then(() => setMachineNum(0))
            .then(() => delay(250))
            .then(() => setMachineNum(4))
            .then(() => delay(300))
            .then(() => setMachineNum(machineNum))
            .then(() => setSelectedMachineNum(machineNum))
            .then(() => delay(320))
            .then(() => results(type, machineNum, playerScore, machineScore, setDidPlayerWin, setPlayerScore, setMachineScore, setOutcome));

        const delay = (duration: number) => {
            return new Promise((resolve) => {
                setTimeout(() => resolve(), duration);
            });
        }

    }
    return (
        <div style={styles.root}>
            <div style={styles.topBar}>
                {rulesIcon(onInfoClick)}
                <div style={styles.scores}>
                    <h3 style={styles.player}>Player</h3>
                    <h2 style={styles.score}>{playerScore}</h2>
                    <h2 style={styles.scoreSeparator}>:</h2>
                    <h2 style={styles.score}>{machineScore}</h2>
                    <h3 style={styles.player}>Machine</h3>
                </div>
                {resetIcon(onResetClick)}
            </div>
            <div style={styles.mainContainer}>
                {mobile
                    ? <div style={styles.mainContainerMobile}>
                        <div style={styles.mainContainerTop}>
                            <div style={styles.boardMobile}>
                                <div style={styles.boardOutcome}>
                                    <div style={styles.outcomeTextContainer}>
                                        {outcome && <h2 style={media ? styles.outcomeTextMedia : styles.outcomeText}>{outcome}</h2>}
                                    </div>
                                    {didPlayerWin !== null &&
                                        <div id='outcome'>
                                            <h3 >{didPlayerWin === undefined ? "it's a Tie!" : didPlayerWin ? "You Win!!" : "The Machine wins :-("}</h3>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div style={styles.mainContainerBottom}>
                            <div style={styles.playerMedia}>
                                <div style={styles.playerIcons}>
                                    {playerIcons(mobile, onButtonPressed)}
                                </div>
                                <div style={styles.selectedActionMobile}>
                                    {currPlayerNum !== null ? actionIcon(currPlayerNum, onMachineClick, true, 'left') : undefined}
                                </div>
                            </div>
                            <div style={styles.computerMedia}>
                                <div style={styles.selectedActionMobile}>
                                    {selectedMachineNum !== null ? actionIcon(selectedMachineNum, onMachineClick, true, 'right') : undefined}
                                </div>
                                <div style={styles.computerIcons}>
                                    {machineIcons(mobile, onMachineClick, currMachineNum)}
                                </div>
                            </div>
                        </div>
                    </div>
                    : <div style={styles.mainContainer}>
                        <div style={styles.playerIcons}>
                            {playerIcons(false, onButtonPressed)}
                        </div>
                        <div style={media ? styles.selectedActionMedia : styles.selectedAction}>
                            {currPlayerNum !== null ? actionIcon(currPlayerNum, onMachineClick, true, 'left') : undefined}
                        </div>
                        <div style={styles.board}>
                            <div style={styles.boardOutcome}>
                                <div style={styles.outcomeTextContainer}>
                                    {outcome && <h2 style={media ? styles.outcomeTextMedia : styles.outcomeText}>{outcome}</h2>}
                                </div>
                                {didPlayerWin !== null &&
                                    <div id='outcome'>
                                        <h3 >{didPlayerWin === undefined ? "it's a Tie!" : didPlayerWin ? "You Win!!" : "The Machine wins :-("}</h3>
                                    </div>
                                }
                            </div>
                        </div>
                        <div style={media ? styles.selectedActionMedia : styles.selectedAction}>
                            {selectedMachineNum !== null ? actionIcon(selectedMachineNum, onMachineClick, true, 'right') : undefined}
                        </div>
                        <div style={styles.computerIcons}>
                            {machineIcons(false, onMachineClick, currMachineNum)}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default GamePage;
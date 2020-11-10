import React from 'react';
import {
    FaRegHandLizard,
    FaRegHandPaper,
    FaRegHandRock,
    FaRegHandScissors,
    FaRegHandSpock
} from 'react-icons/fa';
import './CustomIconButton.css';

export enum IconTypes {
    Lizard,
    Paper,
    Rock,
    Scissors,
    Spock
}
interface CustomIconButtonProps {
    iconType: IconTypes;

    onClick: () => void;
}

const CustomIconButton: React.FunctionComponent<CustomIconButtonProps> = (props: CustomIconButtonProps) => {
    let icon: JSX.Element | undefined = undefined;
    if (props.iconType === IconTypes.Lizard) {
        icon = <FaRegHandLizard id='inner_icon' />;
    } else if (props.iconType === IconTypes.Paper) {
        icon = <FaRegHandPaper id='inner_icon' />;
    } else if (props.iconType === IconTypes.Rock) {
        icon = <FaRegHandRock id='inner_icon' />;
    } else if (props.iconType === IconTypes.Scissors) {
        icon = <FaRegHandScissors id='inner_icon' />;
    } else if (props.iconType === IconTypes.Spock) {
        icon = <FaRegHandSpock id='inner_icon' />;
    }

    return (
        <button
            id='action_button'
            onClick={props.onClick}>
            {icon}
        </button>
    )
}

export default CustomIconButton
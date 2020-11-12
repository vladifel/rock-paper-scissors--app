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
    isSelected?: boolean;
    side?: 'left' | 'right';
    onClick: (type: IconTypes) => void;
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

    let className = props.isSelected ? 'selected' : 'not_selected';
    props.side && (className = `${className} ${props.side}`);
    return (
        <button
            id={'action_button'}
            className={className}
            onClick={() => props.onClick(props.iconType)}>
            {icon}
        </button>
    )
}

export default CustomIconButton
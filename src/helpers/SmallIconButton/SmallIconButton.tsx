import React from 'react';
import {
    FaInfo,
    FaSync
} from 'react-icons/fa';
import './SmallIconButton.css';

interface SmallIconButtonProps {
    isInfo: boolean;
    onClick: () => void;
}

const SmallIIconButton: React.FunctionComponent<SmallIconButtonProps> = (props: SmallIconButtonProps) => {
    return (
        <button
            id={'small_button'}
            onClick={props.onClick}>
            {props.isInfo
                ? <FaInfo id='inner_small_icon' />
                : <FaSync id='inner_small_icon' className="sync" />
            }
        </button>
    )
}

export default SmallIIconButton
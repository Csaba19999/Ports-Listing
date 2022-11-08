import { ListItem } from '@mui/material';
import {CombindePortType} from '../types/portTypes';

import classes from './PortsListItem.module.css';

type propsType = {
    port: CombindePortType;
};

function PortsListItem(props : propsType){
    return(
        <ListItem>
            <div className={classes.item}>
                <h5>{props.port.name}</h5>
                <ul>
                    {props.port.audios.map((audio) => (
                        <li key={audio.id}>{audio.name}</li>
                    ))}
                </ul>
            </div>
        </ListItem>
    );
}

export default PortsListItem;
import {style} from 'typestyle';

const styles = {
    msgArea: style({
        width: '450px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }),
    buttonArea: style({
        width: '80px',
        gap: '10px',
        padding: '0px',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }),
}

export default styles;
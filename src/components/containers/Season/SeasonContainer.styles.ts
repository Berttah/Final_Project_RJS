import {style} from 'typestyle';

const styles = {
    Container: style({
        width: '100%',
        height: '830px',

        gap: '0px',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    leftArea: style({
        width: '350px',
        height: '100%',

        padding: '100px 0px',
        gap: '30px',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRight: '3px solid #503E34',
        boxShadow: '8px 0px 4px rgba(0, 0, 0, 0.25)'
    }),
    rightArea: style({
        width: '100%',
        height: '100%',

        gap: '40px',
        padding: '50px',

        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    })
}

export default styles;
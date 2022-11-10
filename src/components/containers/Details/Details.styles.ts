import {style} from 'typestyle';

const styles = {
    Container: style({
        width: '100%',
        height: '830px',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    title: style({
        width: '100%',


        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    deets: style({
        width: '100%',

        gap: '20px',
        padding: '100px 0px',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    DeetCard: style({
        width: '1000px',
        gap: '100px',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'start',
        // background:'#d9d9d9'
    }),
}

export default styles;
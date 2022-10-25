import {style} from 'typestyle';

const styles = {
    container: style({
        width: '100%',
        height: '830px',
        gap: '50px',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    cardArea: style({
        width: '100%',
        gap: '20px',
        padding: '0px 45px',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap'
    })
}

export default styles;
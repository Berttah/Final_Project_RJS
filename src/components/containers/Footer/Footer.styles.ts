import {style} from 'typestyle';

const styles = {
    container: style({
        width: '100%',
        height: '62px',
        gap: '10px',

        backgroundColor: '#7f8c8d',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }),
    logo: style({
        height: '50px',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.30))',
    })
}

export default styles;
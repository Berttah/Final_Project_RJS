import {style} from 'typestyle';

const styles = {
    deet: style({
        width: '300px',
        height: '375px',
        padding: '10px',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        background: '#F8F9F9',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)'
    }),
    image: style({
        width: '100%',
        height: '100%'
    })
}

export default styles;
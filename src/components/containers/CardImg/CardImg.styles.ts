import {style} from 'typestyle';

const styles = {
    thin: style({
        width: '160px',
        height: '200px',
        padding: '0px',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        background: '#F8F9F9',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)'
    }),
    product: style({
        width: '200px',
        height: '250px',
        padding: '0px',

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
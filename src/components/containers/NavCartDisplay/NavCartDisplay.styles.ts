import {style} from 'typestyle';

const styles = {
    button: style({
        width: '90px',
        height: '30px',
        gap: '5px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        $nest:{
            '&:hover':{
                cursor: 'pointer'
            }
        }
    })
}

export default styles;
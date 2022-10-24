import {style} from 'typestyle';

const styles = {
    button: style({
        width: '120px',
        height: '82px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        $nest:{
            '&:hover':{
                cursor: 'pointer',
                backgroundColor: '#DAD9D7'
            }
        }
    })
}

export default styles;
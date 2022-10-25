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
                // backgroundColor: '#DAD9D7',
                // background: 'linear-gradient(0deg, #E8D1B5 0%, rgba(248, 255, 244, 0) 10%)'
            }
        }
    })
}

export default styles;
import {style} from 'typestyle';

const styles = {
    icon: style({
        width: '24px',
        height: '24px',

        $nest: {
            '&:hover': {
                cursor: 'pointer'
            }
        }
    }),
}

export default styles;
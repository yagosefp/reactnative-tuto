import { StyleSheet } from 'react-native';
import theme from '../../app/theme';

const styles = StyleSheet.create({
    container: {
        margin: 15,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: 60,
        height: 60
    },
    buttonStyle: {
        backgroundColor: 'transparent'
    },
    buttonTextStyle: {
        color: theme.colors.primary
    }
});

export default styles;
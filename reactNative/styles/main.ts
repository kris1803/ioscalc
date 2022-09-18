import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1c',
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        fontFamily: 'Roboto',
    },
    displayContainer: {
        width: '100%', 
        flex: 1, 
        justifyContent: 'flex-end', 
        alignItems: 'flex-end', 
        paddingHorizontal: '5%'
    },
    whiteText: {
        color: '#fff',
        fontSize: 32,
    },
    blackButtonText: {
        color: '#000',
        fontSize: 32,
    },
    mainText: {
        color: '#fff',
        fontSize: 68,
        fontWeight: '300',
        padding: 0,
        margin: 0
    },
    buttonRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '25%',
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10000,
        width: '100%',
        height: '100%',
        backgroundColor: '#505050'
    },
    buttonWrapperBg: {
        backgroundColor: '#bbb',
        width: '88%',
        height: '88%',
        borderRadius: 10000,
        justifyContent: 'center',
        alignItems: 'center'
    },
    operatorWrapperBg: {
        backgroundColor: '#ffcaaa',
        width: '88%',
        height: '88%',
        borderRadius: 10000,
        justifyContent: 'center',
        alignItems: 'center'
    },
    zeroWrapperBg: {
        backgroundColor: '#bbb',
        borderRadius: 10000,
        width: '88%',
        height: '88%',
    },
    buttonOperator: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10000,
        width: '100%',
        height: '100%',
        backgroundColor: '#ff9500',
    },
    buttonLight: {
        backgroundColor: '#D4D4D2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10000,
        width: '88%',
        height: '88%',
    },
    zeroButton: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10000,
        width: '100%',
        height: '100%',
        paddingHorizontal: '16%',
        backgroundColor: '#505050'
    }
});

export default styles;
import { StyleSheet, Button } from 'react-native';
import DeviceHelper from '../Helper/DeviceHelper';
import ThemeHelper from '../Helper/ThemeHelper';
/* 
C: container
B: Button
BT: buttontext
SC: SubContainer */

const W = DeviceHelper.W;
const H = DeviceHelper.H;
const Colors = ThemeHelper.colors;

export const indexStyle = StyleSheet.create({
    C: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red'
    },
    C2: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoC: {
        borderWidth: 1
    },
    logoC2: {
        position: 'absolute',
        left: DeviceHelper.W(2),
        top: DeviceHelper.W(2),
    },

    topRegion: {
        borderWidth: 1,
        height: 200,
        width: DeviceHelper.w,

    }
});

export const splashStyle = StyleSheet.create({
    C: {//Splash ekranı Container
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    C2: {//anasayfa için splash ekranı container
        position: 'absolute',
        left: W(2),
        top: H(2)
    }
});

export const indexNotesStyle = StyleSheet.create({
    notesC: {//View that has all the notes
        flex: 1
    },
    noteC: {//Note View
        backgroundColor: Colors.c1,
        marginTop: H(1.2),
        marginBottom: H(1.2),
        padding: W(2),
        paddingBottom: W(9)
    },
    noteButtonsC: {//Note Buttons
        flexDirection: 'row',
        position: 'absolute',
        bottom: -10,
        right: -10,
        backgroundColor: Colors.c1,
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 5,
        paddingBottom: 5,
        paddingTop: 5,
        borderWidth: 2,
        borderBottomWidth: 0,
        borderColor: 'white'
    },
    noteButtonsSC: {
        flexDirection: 'row'
    },
    buttonsToggleButton: {
        alignSelf: 'center'
    },
    noteButtonC: {
        marginRight: 3,
        marginLeft: 3
    },
    notePickColor: {
        borderWidth: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: -W(2),
        left: 10,
        maxWidth: W(30),
        backgroundColor: Colors.c1,
        borderRadius: 2,
        borderWidth: 2,
        borderBottomWidth: 0,
        borderColor: 'white',
        paddingTop: 3,
        paddingBottom: 3
    },
    noteColor: {
        width: W(6),
        height: W(6),
        borderRadius: W(3),
        marginRight: 5,
        marginLeft: 5
    }
});

export const indexTopRegionStyle = StyleSheet.create({
    C: {
        minHeight: W(20) + H(4),
        width: W(100),
        backgroundColor: Colors.c1,
        paddingLeft: W(25),
        paddingRight: 15,
        justifyContent: 'center'
    },
    topRegionText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: Colors.c2,
        textAlign: 'right'
    }
});
import { StyleSheet, Button } from 'react-native';
import DeviceHelper from '../Helper/DeviceHelper';
/* 
C: container
B: Button
BT: buttontext
SC: SubContainer */

const W = DeviceHelper.W;
const H = DeviceHelper.H;

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

export const splashS = StyleSheet.create({
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

export const indexTopRegionStyle = StyleSheet.create({
    C: {
        minHeight: W(20) + H(4),
        width: W(100),
        //backgroundColor: Colors.C1,
        paddingLeft: W(25),
        paddingRight: 15,
        justifyContent: 'center'
    },
    topRegionText: {
        fontWeight: 'bold',
        fontSize: 15,
        //color: Colors.r2,
        textAlign: 'right'
    }
});
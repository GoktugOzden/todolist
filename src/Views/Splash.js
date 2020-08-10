import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';

import Resim from '../Components/Resim';

import DeviceHelper from '../Helper/DeviceHelper';

import SplashController from '../Controllers/SplashController';

import { splashStyle as S } from './Style';

class Splash extends React.Component {
    componentDidMount = SplashController.cDMount;
    componentDidUpdate = SplashController.cDUpdate;
    componentWillUnmount = SplashController.cWMount;

    uyelik() {
        return (
            <View style={{ height: 250, borderWidth: 1, borderColor: 'red' }}>
            </View>
        );
    }

    render() {
        const status = SplashController.status;

        let logoH;

        if (status === 0) logoH = 60;
        else if (status === 1) logoH = 35;
        else if (status === 2) logoH = 35;
        else if (status === 3) logoH = 20;

        return (
            <View style={[S.C, status === 3 && S.C2]}>
                <Resim
                    source={require('../../assets/logo.png')}
                    height={DeviceHelper.H(logoH)}
                />

                {status === 1 || status === 2 && this.uyelik()}
            </View>
        )
    }
}

export default observer(Splash);
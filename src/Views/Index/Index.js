import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';

import IndexController from '../../Controllers/Index/IndexController';
import SplashController from '../../Controllers/SplashController';

import { indexStyle as S } from '../Style';

import TopRegion from './TopRegion';
import Splash from '../Splash';


class Index extends React.Component {

    componentDidMount = IndexController.cDMount;
    componentDidUpdate = IndexController.cDUpdate;
    componentWillUnmount = IndexController.cWUnmount;


    render() {
        const splashStatus = SplashController.status;

        return (
            <View style={[S.C, splashStatus && S.C2]}>
                {
                    splashStatus === 3 &&
                    <>
                        <TopRegion />
                    </>

                }
                <Splash />
            </View>
        );
    }
}

export default observer(Index);
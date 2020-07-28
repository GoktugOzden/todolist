import React from 'react';
import { Text, View, Vibration } from 'react-native';
import { observer } from 'mobx-react';

import Controller from '../../Controllers/Index/TopRegionController';

import { indexTopRegionStyle as S } from '../Style';

class TopRegion extends React.Component {
    componentDidMount = Controller.cDMount;
    componentDidUpdate = Controller.cDUpdate;
    componentWillMount = Controller.cWUnmount;

    render() {
        return (
            <View style={S.C}>
                <Text style={S.topRegionText}>lorem ipsum dolar sit amet</Text>
                <Text style={S.topRegionText}>lorem ipsum dolar</Text>
                <Text style={S.topRegionText}>lorem ipsum dolar sit</Text>
            </View>
        )
    }
}

export default observer(TopRegion);
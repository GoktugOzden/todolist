import { observable, action, decorate } from 'mobx';
import { Dimensions, Platform } from 'react-native';


class DeviceHelper {
    w = Dimensions.get('window').width;
    h = Dimensions.get('window').height;

    W = (d) => this.w * d / 100;
    H = (d) => this.h * d / 100;

    android = Platform.OS === 'android';
    ios = Platform.OS === 'ios';

    set = (k, v) => this[k] = v;
}

decorate(
    DeviceHelper,
    {
        w: observable,
        h: observable,

        W: action,
        H: action,

        android: observable,
        ios: observable,

        set: action
    }
)

export default new DeviceHelper();
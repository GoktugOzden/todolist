import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';

class SplashController {

    cDMount = () => {
        setTimeout(() => this.status = 3, 2000);
    }
    cDUpdate = () => {
        LayoutAnimation.configureNext(
            LayoutAnimation.create(
                1500,
                LayoutAnimation.Types.easeInEaseOut,
                LayoutAnimation.Properties.scaleXY
            )
        );
    }
    cWMount = () => {

    }

    set = (k, v) => { this[k] = v }


    status = 0; // 0: Splash, 1: Login, 2: Signup, 3: Index 
}

decorate(
    SplashController,
    {
        cDMount: action,
        cDUpdate: action,
        cWMount: action,

        status: observable,

        set: action
    }
)

export default new SplashController();
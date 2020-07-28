import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';

class IndexController {

    cDMount = () => {
    }

    cDUpdate = () => {
        /* LayoutAnimation.configureNext(
            LayoutAnimation.create(
                1500,
                LayoutAnimation.Types.easeInEaseOut,
                LayoutAnimation.Properties.scaleXY
            )
        ); */
    }

    cWUnmount = () => {

    }

    set = (k, v) => { this[k] = v }
}

decorate(
    IndexController,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        set: action
    }
)

export default new IndexController();
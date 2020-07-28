import { observable, action, decorate } from 'mobx';

class TopRegionController {

    cDMount = () => {

    }
    cDUpdate = () => {

    }
    cWUnmount = () => {

    }

    set = (k, v) => { this[k] = v }
}

decorate(
    TopRegionController,
    {
        cDMount: action,
        cWUnmount: action,
        cWUnmount: action,

        set: action
    }
)

export default new TopRegionController();
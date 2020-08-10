import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';

class NotesController {
    cDMount = () => {

    }

    cDUpdate = () => {
        LayoutAnimation.easeInEaseOut();
    }

    cWUnmount = () => {

    }

    noteButtons = -1;
    noteButtonsDirection = false; //false: default, true: upwards

    toggleNoteButtons = (i) => {
        this.noteButtons = this.noteButtons === i ? -1 : i;
        this.noteButtonsDirection = true;

        setTimeout(() => {
            this.noteButtonsDirection = false;
        }, 250);
    }

    set = (k, v) => { this[k] = v }
}

decorate(
    NotesController,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        noteButtons: observable,
        noteButtonsDirection: observable,
        toggleNoteButtons: action,

        set: action
    }
);

export default new NotesController();
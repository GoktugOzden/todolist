import { observable, action, decorate } from 'mobx';

class ThemeHelper {
    colors = {
        c1: '#e89d43ff',
        c2: '#0d1030ff',
        c3: '#454a6dff',
    };

    noteColors = {
        c1: '#eb4034',
        c2: '#ff7e75',
        c3: '#ffbc75',
        c4: '#ffff75',
        c5: '#d4edbb',
        c6: '#b9fa78',
        c7: '#4bebd3',
        c8: '#9b4beb',
    };
}

decorate(
    ThemeHelper,
    {
        colors: observable,
        noteColors: observable
    }
)

export default new ThemeHelper();
import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import { View as ViewA } from 'react-native-animatable';

import Ikon from '../../Components/Ikon';

import DeviceHelper from '../../Helper/DeviceHelper';

import NotesController from '../../Controllers/Index/NotesController';

import { indexNotesStyle } from '../Style';

import ThemeHelper from '../../Helper/ThemeHelper';

class Notes extends React.Component {
    componentDidMount = NotesController.cDMount;
    componentDidUpdate = NotesController.cDUpdate;
    componentWillUnmount = NotesController.cWUnmount;

    displayNotes = (array) => {
        return array.map((d, i) => this.note(d, i));

    }

    note(d, i) {
        return (
            <ViewA
                key={i}
                animation={'bounceIn'}
                delay={350}
                style={[indexNotesStyle.noteC, { backgroundColor: ThemeHelper.noteColors[d.color] }]}
            >
                <Text>{d.content}</Text>

                {this.noteButtons(d, i)}
                {this.notePickColor(d, i)}
            </ViewA>
        );
    }

    noteButtons(d, i) {
        const buttonsOpen = NotesController.noteButtons === i;

        return (
            <View style={[indexNotesStyle.noteButtonsC, { backgroundColor: ThemeHelper.noteColors[d.color] }]}>
                <TouchableOpacity style={indexNotesStyle.buttonsToggleButton} onPress={() => NotesController.toggleNoteButtons(i)} >
                    <Ikon
                        is={'AntDesign'} // Iconset
                        i={buttonsOpen ? 'right' : 'left'} // Icon name
                        c={'black'} // color
                        s={DeviceHelper.W(7)} // size
                    />
                </TouchableOpacity>
                <View style={[indexNotesStyle.noteButtonsSC, { display: buttonsOpen ? 'flex' : 'none' }]}>
                    {this.noteButton()}
                    {this.noteButton()}
                    {this.noteButton()}
                    {this.noteButton()}
                </View>
            </View>
        )
    }

    noteButton() {
        return (
            <TouchableOpacity style={indexNotesStyle.noteButtonC}>
                <Ikon
                    is={'AntDesign'}
                    i={'delete'}
                    c={ThemeHelper.colors.c2}
                    s={DeviceHelper.W(7)}
                />
            </TouchableOpacity>
        );
    }

    notePickColor(d, i) {
        const buttonsOpen = NotesController.noteButtons === i;

        return (
            <View
                style={[
                    indexNotesStyle.notePickColor,
                    {
                        width: buttonsOpen ? undefined : 0,
                        marginLeft: buttonsOpen ? undefined : -DeviceHelper.W(15),
                        backgroundColor: ThemeHelper.noteColors[d.color]
                    }
                ]}
            >
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity style={[indexNotesStyle.noteColor, { backgroundColor: 'blue' }]} />
                    <TouchableOpacity style={[indexNotesStyle.noteColor, { backgroundColor: 'red' }]} />
                    <TouchableOpacity style={[indexNotesStyle.noteColor, { backgroundColor: 'yellow' }]} />
                    <TouchableOpacity style={[indexNotesStyle.noteColor, { backgroundColor: 'pink' }]} />
                    <TouchableOpacity style={[indexNotesStyle.noteColor, { backgroundColor: 'blue' }]} />
                    <TouchableOpacity style={[indexNotesStyle.noteColor, { backgroundColor: 'red' }]} />
                    <TouchableOpacity style={[indexNotesStyle.noteColor, { backgroundColor: 'yellow' }]} />
                </ScrollView>
            </View>
        );
    }

    render() {
        const notes = [//will come from firebase
            {
                content: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                color: 'c3'
            },
            {
                content: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                color: 'c5'
            },
            {
                content: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                color: 'c7'
            },
            {
                content: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                color: 'c1'
            },
            {
                content: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                color: 'c2'
            },
            {
                content: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                color: 'c4'
            },
            {
                content: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                color: 'c6'
            },
            {
                content: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                color: 'c8'
            },
        ]

        return (
            <View style={indexNotesStyle.notesC}>
                <ScrollView>
                    <View style={{ height: DeviceHelper.H(3) }} />
                    {this.displayNotes(notes)}

                    <View style={{ height: DeviceHelper.H(3) }} />
                </ScrollView>
            </View>
        )
    }
}

export default observer(Notes);
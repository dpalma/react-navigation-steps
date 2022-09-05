import React from 'react';

import {
    StyleSheet,
    View
} from 'react-native';

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        height: 2
    },
    complete: {
        backgroundColor: '#00a651'
    },
    incomplete: {
        backgroundColor: '#e6e7e8'
    }
});

const ProgressBar = ({percentage}) => {
    return (
        <View style={styles.bar}>
            <View
                style={[
                    {width: `${percentage * 100}%`},
                    styles.complete
                ]}
            />
            <View
                style={[
                    {width: `${(1 - percentage) * 100}%`},
                    styles.incomplete
                ]}
            />
        </View>
    )
}

export default ProgressBar;

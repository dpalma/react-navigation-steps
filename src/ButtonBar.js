import React from 'react';

import {
    Button,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderBottomColor: '#dedede',
        borderBottomWidth: 1
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

const ButtonBar = ({state, descriptors, previousStepHandler, nextStepHandler}) => {
    const isFirstStep = state.index === 0;
    const isLastStep = state.index === state.routes.length - 1;

    const route = state.routes[state.index];

    const title = descriptors[route.key].options.title || route.name;

    return (
        <View
            style={styles.container}>
            <Button
                disabled={isFirstStep}
                title='&nbsp; < &nbsp;'
                onPress={previousStepHandler}
            />
            <Text
                style={styles.title}
            >
                {title}
            </Text>
            <Button
                disabled={isLastStep}
                title='&nbsp; > &nbsp;'
                onPress={nextStepHandler}
            />
        </View>
    )
}

export default ButtonBar;

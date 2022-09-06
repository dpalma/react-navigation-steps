import React from 'react';

import {
    View
} from 'react-native';

import {
    createNavigatorFactory,
    useNavigationBuilder
} from '@react-navigation/native';

import ButtonBar from './ButtonBar';
import ProgressBar from './ProgressBar';
import Router from './Router';

const Wizard = ({
    children,
    screenOptions,
    contentStyle,
    renderButtonBar,
    renderIndicator
}) => {
    const {
        state,
        navigation,
        descriptors,
        NavigationContent
    } = useNavigationBuilder(Router, {
        children,
        screenOptions
    });

    const buttonBar = renderButtonBar ? renderButtonBar({
        descriptors,
        navigation,
        state
    }) : <ButtonBar
        state={state}
        descriptors={descriptors}
        navigation={navigation}
    />;

    const indicator = renderIndicator ? renderIndicator({
        numSteps: state.routes.length,
        currentStep: state.index
    }) : <ProgressBar percentage={(state.index + 1) / state.routes.length} />;

    return (
        <NavigationContent>
            {indicator}
            {buttonBar}
            <View style={contentStyle}>
                {state.routes.map((route, i) => {
                    return (
                        <View
                            key={route.key}
                            style={[
                                { display: i === state.index ? 'flex' : 'none' }
                            ]}
                        >
                            {descriptors[route.key].render()}
                        </View>
                    );
                })}
            </View>
        </NavigationContent>
  );
}

export const createWizard = createNavigatorFactory(Wizard);

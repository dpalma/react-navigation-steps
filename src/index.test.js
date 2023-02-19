import '@testing-library/jest-native/extend-expect';

import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import { View } from 'react-native';

import { createSteps } from '.';

const Step = ({route}) => {
    return <View>{route.name}</View>
}

test('prev button is disabled at first step', async () => {
    const Steps = createSteps();

    const { getByText, findByText } = render(
        <NavigationContainer>
            <Steps.Navigator>
                <Steps.Screen name="A" component={Step} />
                <Steps.Screen name="B" component={Step} />
            </Steps.Navigator>
        </NavigationContainer>
    );

    const prevButton = await findByText('<');
    const nextButton = await getByText('>');

    expect(prevButton).toBeDisabled();

    fireEvent(nextButton, 'press');

    expect(prevButton).toBeEnabled();
});

test('next button is disabled at last step', async () => {
    const Steps = createSteps();

    const { findByText } = render(
        <NavigationContainer>
            <Steps.Navigator>
                <Steps.Screen name="A" component={Step} />
                <Steps.Screen name="B" component={Step} />
            </Steps.Navigator>
        </NavigationContainer>
    );

    const nextButton = await findByText('>');

    expect(nextButton).toBeEnabled();

    fireEvent(nextButton, 'press');
    fireEvent(nextButton, 'press');

    expect(nextButton).toBeDisabled();
})

test('calls renderIndicator function if given', async () => {
    const Steps = createSteps();

    const renderIndicator = jest.fn();

    render(
        <NavigationContainer>
            <Steps.Navigator renderIndicator={renderIndicator}>
                <Steps.Screen name="A" component={Step} />
                <Steps.Screen name="B" component={Step} />
            </Steps.Navigator>
        </NavigationContainer>
    );

    expect(renderIndicator).toBeCalledWith({currentStep: 0, numSteps: 2});
})

test('calls renderButtonBar function if given', async () => {
    const Steps = createSteps();

    const renderButtonBar = jest.fn();

    render(
        <NavigationContainer>
            <Steps.Navigator renderButtonBar={renderButtonBar}>
                <Steps.Screen name="A" component={Step} />
                <Steps.Screen name="B" component={Step} />
            </Steps.Navigator>
        </NavigationContainer>
    );

    expect(renderButtonBar).toBeCalled();
})

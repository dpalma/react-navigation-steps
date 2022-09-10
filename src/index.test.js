import '@testing-library/jest-native/extend-expect';

import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import { Text, View } from 'react-native';

import { createWizard } from '.';

const Step = ({route}) => {
    return <View><Text>Step {route.name}</Text></View>
}

test('prev button is disabled at first step', async () => {
    const Wizard = createWizard();

    const { findByText } = render(
        <NavigationContainer>
            <Wizard.Navigator>
                <Wizard.Screen name="A" component={Step} />
                <Wizard.Screen name="B" component={Step} />
            </Wizard.Navigator>
        </NavigationContainer>
    );

    const prevButton = await findByText('<');
    const nextButton = await findByText('>');

    expect(prevButton).toBeDisabled();

    fireEvent(nextButton, 'press');

    expect(prevButton).toBeEnabled();
});

test('next button is disabled at last step', async () => {
    const Wizard = createWizard();

    const { findByText } = render(
        <NavigationContainer>
            <Wizard.Navigator>
                <Wizard.Screen name="A" component={Step} />
                <Wizard.Screen name="B" component={Step} />
            </Wizard.Navigator>
        </NavigationContainer>
    );

    const nextButton = await findByText('>');

    expect(nextButton).toBeEnabled();

    fireEvent(nextButton, 'press');
    fireEvent(nextButton, 'press');

    expect(nextButton).toBeDisabled();
})

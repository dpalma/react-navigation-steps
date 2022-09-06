# React Navigation Wizard

A Wizard component for React Native projects implemented as a custom navigator based on [react-navigation](https://reactnavigation.org/).

## Installation

```shell
$ npm install react-navigation-wizard
```

## Properties

|Property|Description|Required?|
|-|-|-|
|renderButtonBar|A function that renders a button bar with buttons for moving to the next or previous step and the title of the current step. The function takes an object with fields for react-navigation `state`, `navigation`, and `descriptors` as given by [useNavigationBuilder](https://reactnavigation.org/docs/custom-navigators).|No|
|renderIndicator|A function that renders a progress indicator using the current step and the total number of steps.|No|


## Usage

### Basics

```javascript
import { createWizard } from 'react-navigation-wizard';

const Wizard = createWizard();

render() {
	<Wizard.Navigator>
		<Wizard.Screen component={StepOne} name='Step1'></Wizard.Screen>
		<Wizard.Screen component={StepTwo} name='Step2'></Wizard.Screen>
		...
		<Wizard.Screen component={StepN} name='StepN'></Wizard.Screen>
	</Wizard.Navigator>
}
```

### Controlling flow through steps

The default button bar emits events nextPress and prevPress when the next and previous step buttons are pressed. A wizard step may listen for these events by registering an event listener as shown below. By calling `preventDefault` on the event object the step can prevent the wizard from proceeding to the next or previous step. The `navigation` object will have wizard-specific methods `nextStep`, `prevStep`, `firstStep`, and `lastStep` for moving through the steps under the app's control.

```javascript
import { createWizard } from 'react-navigation-wizard';

const Wizard = createWizard();

const StepOne = ({navigation}) => {

	React.useEffect(() => {
        return navigation.addListener('nextPress', event => {
            event.preventDefault();
			submitData(data).then(() => navigation.nextStep());
        });
    }, [navigation]);

    return (
        <View>...<View>
	);
};

render() {
	<Wizard.Navigator>
		<Wizard.Screen component={StepOne} name='Step1'></Wizard.Screen>
		<Wizard.Screen component={StepTwo} name='Step2'></Wizard.Screen>
		...
		<Wizard.Screen component={StepN} name='StepN'></Wizard.Screen>
	</Wizard.Navigator>
}
```

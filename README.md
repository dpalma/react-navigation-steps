# React Navigation Wizard

A Wizard component for React Native projects implemented as a custom navigator based on [react-navigation](https://reactnavigation.org/).

## Installation

```shell
$ npm install react-navigation-wizard
```

## Usage

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

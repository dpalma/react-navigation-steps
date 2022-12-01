# React Navigation Steps

A [react-navigation](https://reactnavigation.org/) custom navigator that can be used to implement a step-by-step wizard component.

## Installation

```shell
$ npm install react-navigation-steps
```

## Properties

|Property|Description|Required?|
|-|-|-|
|renderButtonBar|A function that renders a button bar with buttons for moving to the next or previous step and the title of the current step. The function takes an object with fields for react-navigation `state`, `navigation`, and `descriptors` as given by [useNavigationBuilder](https://reactnavigation.org/docs/custom-navigators).|No|
|renderIndicator|A function that renders a progress indicator using the current step and the total number of steps.|No|


## Events

### prevPress | nextPress

These events are fired before navigating to the previous or next screen.

The default action can be cancelled by calling `event.preventDefault()`. This will force the wizard to remain on the current step.

#### Example
```javascript
React.useEffect(() => {
    return navigation.addListener('nextPress', event => {
        event.preventDefault();
    });
}, [navigation]);
```


## Usage

### Basics

```javascript
import { createSteps } from 'react-navigation-steps';

const Steps = createSteps();

render() {
    <Steps.Navigator>
        <Steps.Screen component={StepOne} name='Step1'></Steps.Screen>
        <Steps.Screen component={StepTwo} name='Step2'></Steps.Screen>
        ...
        <Steps.Screen component={StepN} name='StepN'></Steps.Screen>
    </Steps.Navigator>
}
```

### Controlling flow through steps

The default button bar emits events nextPress and prevPress when the next and previous step buttons are pressed. A step may listen for these events by registering an event listener as shown below. By calling `preventDefault` on the event object the step can prevent the wizard from proceeding to the next or previous step. The `navigation` object will have methods `nextStep`, `prevStep`, `firstStep`, and `lastStep` for moving through the steps under the app's control.

```javascript
import { createSteps } from 'react-navigation-steps';

const Steps = createSteps();

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
    <Steps.Navigator>
        <Steps.Screen component={StepOne} name='Step1'></Steps.Screen>
        <Steps.Screen component={StepTwo} name='Step2'></Steps.Screen>
        ...
        <Steps.Screen component={StepN} name='StepN'></Steps.Screen>
    </Steps.Navigator>
}
```

# API

The Star Rating web component supports four inputs and one output, as follows.

* Page 1: [Installation](../README.md)
* Page 2: [Setup](./setup.md)

## Inputs

### stars

Type ```number```.  Sets the total number of stars used. Default value is 5.

### rating

Type ```number```. Sets the initial rating displayed by the component. Default value is 0.

### color

Type ```string```. Sets the color of the stars. Default value is ```'gold'```.

### size

Type ```number```. Sets the font size of the stars. (For example, an input of 50 will direct an inline style of 50px.) Default value is 25.

## Output

### rated

Event emitted when the user clicks on a star. The type of the ```EventEmitter``` is ```number```. The way you handle this event depends on which framework you are using. See the Setup page.


* Page 1: [Installation](../README.md)
* Page 2: [Setup](./setup.md)

# Star Rating

Star Rating web component. Framework-independent: use with Ionic, Angular, Vue, React, vanilla Javascript, etc. You can choose any color (default is gold), any font size (default is 25px), and any number of stars (default is 5).  Created with Stencil.js.

* Page 2: [Setup](/docs/setup.md)
* Page 3: [API](/docs/api.md)

## Installation

```npm install star-rating-stencil --save ```

## Sample Usage

The following produces a rating component with five gold stars of size 25px:
```
<star-rating (rated)="newRating($event)"></star-rating>
```

The following produces a rating component with four blue stars of size 50px, and starts with a rating of 3.
```
<star-rating color="blue" 
             stars="4" 
             size="50" 
             rating="3"
             (rated)="newRating($event)">
</star-rating>
```

Sample Typescript rating handler:
```
newRating(ratingEvent: CustomEvent) {
    let rating: number = ratingEvent.detail;
    console.log('New rating: ',rating);
}
```

* Page 2: [Setup](/docs/setup.md)
* Page 3: [API](/docs/api.md)

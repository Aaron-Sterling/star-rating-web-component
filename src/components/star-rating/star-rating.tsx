import { Component, State, Prop, EventEmitter, Event } from '@stencil/core';

/*
*
* Star Rating component written with Stencil.js
* by Aaron Sterling
* https://github.com/Aaron-Sterling/star-rating-stencil
*
*/


@Component({
  tag: 'star-rating',
  styleUrl: 'star-rating.scss',
  shadow: true
})
export class StarRating {

  

  @Prop() initialRating: number = 0;
  @Prop() fontSize: number = 25;
  @Prop() stars: number = 5;
  @Prop() color: string = 'gold';
  //
  private _initialRatingOriginal: number;
  private _fontSizeOriginal: number;
  private _colorOriginal: string;
  private _numberOfStarsOriginal: number;
  

  @State() currentRating: number;

  @Event() newRating: EventEmitter<number>; 

  private _fontSizeExpression: string;
  private _starCounter: Array<boolean> = new Array<boolean>();

  constructor() {}

  componentWillLoad() {
    this.firstRun();
  }

  firstRun() {
    this.backupOriginalProps();
    this.initializeInternalState();
    console.log(this.stars);
  }

  backupOriginalProps() {
    this._initialRatingOriginal = this.initialRating;
    this._fontSizeOriginal = this.fontSize;
    this._numberOfStarsOriginal = this.stars;
    this._colorOriginal = this.color;
  }

  initializeInternalState() {
    this._fontSizeExpression = this.fontSize.toString() + 'px';
    this.currentRating = this.initialRating;
    this._starCounter = new Array<boolean>(this.stars).fill(true); 
  }

  propsHaveChanged(): boolean {
    return !(this.initialRating === this._initialRatingOriginal && 
             this.fontSize === this._fontSizeOriginal && 
             this.color === this._colorOriginal &&
             this.stars === this._numberOfStarsOriginal);
  }

  componentDidLoad() {
    if (this.propsHaveChanged) {
      this.firstRun();
    }
  }

  render() {
    return (
      <span>
        {this._starCounter.map((_, currentIndex) => <ion-icon name={this.iconName(currentIndex + 1)} 
                                                              onClick={_ => this.updateRating(currentIndex + 1)}
                                                              style={{'font-size': this._fontSizeExpression, 'color': this.color}}>
                                                    </ion-icon>)}
        
      </span>
    );
  }

  updateRating(rating: number) {
    this.currentRating = rating;
    this.newRating.emit(rating);
  }

  iconName(starNumber: number): string {
    const threshold = this.currentRating - starNumber;
    if (threshold >= 0) { return 'star'}
    else { return 'star-outline' };
  }
}




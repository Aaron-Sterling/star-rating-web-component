# Ionic-Angular setup

This is a two-step process. First we tell the Angular side of things how to use the component. Then we tell the Ionic side of things to include the component when it builds the bundle.

## Step 1: Import into app.module.ts

Modify your ```app.module.ts``` so it imports the schema CUSTOM_ELEMENTS_SCHEMA, as well as star-rating-web-component. Your file should look like this.
```
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // add this import
import 'star-rating-web-component';                     // add this import

@NgModule({
  declarations: [],
  imports: [],
  bootstrap: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // add this line
})
export class AppModule {}
```

**Note:** If you are lazy-loading pages, put these imports into the module of each page where you want to use the Star Rating component, instead of putting them in ```app.module.ts```.

## Step 2: Tell ionic-app-scripts to include the component in the build

Modify your ```copy.config.js``` so it contains additional build instructions. The path to this file will look something like:

```{{ROOT}}\node_modules\@ionic\app-scripts\config\copy.config.js```

Add the instructions shown below.
```
module.exports = {
  copyAssets: {},
  copyIndexContent: {},
  copyFonts: {},
  copyPolyfills: {},
  copySwToolbox: {},
  
  // add these next two build instructions
  
  copyStarRatingWebComponent: {
    src: ['{{ROOT}}/node_modules/star-rating-web-component/dist/star-rating**/*'],
    dest: '{{BUILD}}'
  },
  copyStarIonicons: {
    src: [
           '{{ROOT}}/node_modules/star-rating-web-component/dist/star-rating/svg/md-star-outline.js',
           '{{ROOT}}/node_modules/star-rating-web-component/dist/star-rating/svg/md-star.js',
           '{{ROOT}}/node_modules/star-rating-web-component/dist/star-rating/svg/ios-star-outline.js',
           '{{ROOT}}/node_modules/star-rating-web-component/dist/star-rating/svg/ios-star.js'
         ],
    dest: '{{BUILD}}/star-rating/svg'
  }
}
```

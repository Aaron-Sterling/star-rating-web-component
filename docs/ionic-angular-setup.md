# Ionic-Angular setup

Return to [Setup](./setup.md)

This is a two-step process. First we tell the Angular side of things how to use the component. Then we tell the Ionic side of things to include the component when it builds the bundle. The way we talk to Angular (really Ionic-Angular) depends on whether we are eagerly loading pages, or lazily loading them.

## Step 1: Import into app.module.ts

Add the following to ```app.module.ts```.

### Step 1a: Register the custom component with ```app.module.ts```

```
import 'star-rating-web-component';                        // add this import
```

**Note**: this import statement does not load the entire web component. It only loads a small piece of code that then allows Ionic to load the full web component later when a template requests it.

### Step 1b: When you use the component, tell the Angular compiler to expect a custom component

If you import CUSTOM_ELEMENTS_SCHEMA into one of your page modules, the Angular compiler will accept elements it does not recognize. (Otherwise, it will throw an error.)  If you are lazy loading, you need to import this schema into each page modue where you want to use the web component.  If you are eagerly loading, you only need to import the schema into ```app.module.ts```.  Either way, it looks like this:

```
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // add this import

@NgModule({
  declarations: [],
  imports: [],
  bootstrap: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]                     // add this line
})
export class AppModule {}
```

### Steps 1a and 1b together

When you've performed both steps, your ```app.module.ts``` should look like this if you are eagerly loading.

```
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // add this import
import 'star-rating-web-component';                        // add this import

@NgModule({
  declarations: [],
  imports: [],
  bootstrap: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]                     // add this line
})
export class AppModule {}
```

If you are lazy loading, import just the web component in ```app.module.ts```, and just the schema in the individual lazily loaded modules.

## Step 2: Tell ionic-app-scripts to include the component in the build

Create or modify your ```copy.config.js``` file.  This file can tell ionic app-scripts to include extra content when it builds an Ionic app. If you are creating the file, put it in a folder named ```config``` that is at the same directory level as your ```src``` folder.

Put this inside ```config\copy.config.js```:
```
module.exports = {
    copyTimeAgoWebComponent: {
      src: ['{{ROOT}}/node_modules/time-ago-web-component/dist/time-ago**/*'],
      dest: '{{BUILD}}'
    }
  }
 ```

Now we need to tell app-scripts to use this file.  Add the following field to your ```package.json```:
```
"config": {
    "ionic_copy": "./config/copy.config.js"
  }
```
Once you've made those changes, app-scripts will know how to include the web component in your builds.

Return to [Setup](./setup.md)

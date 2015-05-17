# Karma Mustache Preprocessor

This Karma plugin will render HTML files that use the Mustache templating language.

HTML templates will be fully rendered by the time your tests execute. This allows you to make assertions on the entire 
document object model.

## Prerequisites

* [connect-mustache-middleware](https://www.npmjs.com/package/connect-mustache-middleware)

## Setup

Add the following object to your Karma configuration file and modify to reflect your environment.

Ensure you point `mustacheModule` to the index file of the 
[connect-mustache-middleware](https://www.npmjs.com/package/connect-mustache-middleware) package.

```javascript
"preprocessors": {
  "app/views/**/*.html": ["mustache"]
},
"karmaMustachePreprocessor": {
  "channel": "default",
  "mustacheModule": "lib/connect-mustache-middleware/index",
  "mustacheOpts": {
    "rootDir": "app",
    "dataDir": "mock/data",
    "datafileExt": ".json",
    "templateExt": ".html",
    "exclude": "/file/path/to/exclude/",
    "staticDataTypes": {
      "someKey": "someVar",
      "LABELS": "labels"
    }
  }
}
```
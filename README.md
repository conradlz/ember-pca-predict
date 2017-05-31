# ember-pca-predict

This addon is made to work with [pca-predict](http://www.pcapredict.com/en-us/index/) which is a service that provides useful things like address, email, and password verification as well as other data services.

## Features
This addon provides a way to initialize the pca predict global in a way that is easy and fastboot compatible.

## Configuring
In the parent application's `config/enviroment.js` you can specify:

```
'ember-pca-predict': {
  enabled: true, //this is true by default false prevents the initialization of the pca global
  accountCode: '<account code>', // pca predict account code
  host: '<host>' // pca predict url for host
},
```

## Installation

* `ember install ember-pca-predict`

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)

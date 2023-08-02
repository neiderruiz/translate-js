# Translate js package

## install package

```js
npm i @neiderruiz/translate-js
```

## how to use it?

```js
import { translate } form '@neiderruiz/translate-js'

// parameters in a object
translate("hola mundo","es", "en").then(response => {
    // if there is an error it returns false
    if(response){
        console.log(response) // Hello World
    }
})
```
# Translate js package

## install package

```js
npm i @neidercode/translate-js
```

## how to use it?

```js
import { translate } form '@neidercode/translate-js'

// parameters in a object
translate({
    text: "hola mundo",
    locale: "es", // entry language, default is "es"
    dest: "en" // dest language, default is "en"
}).then(response => {
    // if there is an error it returns false
    if(response){
        console.log(response) // Hello World
    }
})
```
// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import ExampleDex from './example.dex'
import ExampleExample from './example.example'


export default { 
  ExampleDex: load(ExampleDex, 'example.dex'),
  ExampleExample: load(ExampleExample, 'example.example'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}
// the entry point for our code
import {app} from './app.js'
const makeStuffHappen = ()=>{
    console.log(`Main is running`)
    // invoke an imported function
    app()
}

makeStuffHappen()
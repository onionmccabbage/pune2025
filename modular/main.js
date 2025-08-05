// the entry point for our code
// we use {} to import regular stuff
// we dont use {} to import a default export
import app from './app.js'
const makeStuffHappen = ()=>{
    console.log(`Main is running`)
    // invoke an imported function
    app()
}

makeStuffHappen()
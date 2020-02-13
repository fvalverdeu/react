const Emitter = require('./emitter');
const { EventEmitter } = require('events')

// system modules fs, path
// third party -- se descargan con el npm
// own modules


const onSaveEmitter = new EventEmitter();
const onLoadEmitter = new EventEmitter();
const emitter = new EventEmitter();

emitter.on('click', () => {
    console.log('Click 1');
})

emitter.emit('click');

onSaveEmitter.on('save', () => {
    console.log('Im saving 1');
})


onSaveEmitter.on('save', () => {
    console.log('Im saving 2');
})

onLoadEmitter.on('load', () => {
    console.log('Im loading 1');
})

// onSaveEmitter.emit('save')
// onSaveEmitter.emit('load')
// onSaveEmitter.emit('foo')
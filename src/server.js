"use strict";
const Express = require('express');
const TLog = require('./index');
const APP = Express();
APP.get('/', (req, res) => {
    const tlg = new TLog();
    tlg.error('Preset: Error ==> tlg.error( value )');
    tlg.warning('Preset: Warning ==> tlg.warning( value )');
    res.send('check your terminal');
});
APP.listen(6969, () => {
    console.log('connected');
});

"use strict";
class TerminalLogger {
    constructor() {
        console.log('Log your terminal');
        this.colors = 'red';
    }
}
const x = new TerminalLogger();
console.log(x.colors);

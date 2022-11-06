"use strict";
const PREFIX = '\x1b[';
const SUFFIX = 'm';
const colors = {
    black: 0,
    red: 1,
    green: 2,
    yellow: 3,
    blue: 4,
    magenta: 5,
    cyan: 6,
    white: 7
};
class TerminalLogger {
    constructor() {
        console.log('Log your terminal');
        this.colors = 'red';
    }
    reset() {
        return `${PREFIX}0${SUFFIX}`;
    }
}
const x = new TerminalLogger();
console.log(x.colors);

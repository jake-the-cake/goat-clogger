"use strict";
const PREFIX = '\x1b[';
const SUFFIX = 'm';
const groundsOnTerminal = {
    fg: 3,
    bg: 4
};
const colorsOnTerminal = {
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
        this.colors = colorsOnTerminal;
        this.grounds = groundsOnTerminal;
        this.prefix = PREFIX;
        this.suffix = SUFFIX;
    }
    setAttribute(value) {
        return this.prefix + value + SUFFIX;
    }
    setColor({ fg, bg }) {
        // Variables used to build format
        const valueArray = [];
        let value = '';
        // Create array of color codes
        if (fg) {
            valueArray.push(String(this.grounds['fg']) +
                String(this.colors[fg]));
        }
        if (bg) {
            valueArray.push(String(this.grounds['bg']) +
                String(this.colors[bg]));
        }
        // Go through array to string together formatted color codes
        valueArray.forEach(val => {
            value += this.setAttribute(Number(val));
        });
        return value;
    }
    reset() {
        return this.setAttribute(0);
    }
    usePreset(color, value) {
        return this.setColor({
            bg: color.bg,
            fg: color.fg
        }) + value + this.reset();
    }
    error(value) {
        console.log(this.usePreset({
            bg: 'red',
            fg: 'white'
        }, ` * ${value} * `));
    }
    warning(value) {
        console.log(this.usePreset({
            bg: 'yellow',
            fg: 'black'
        }, ` -- ${value} `));
    }
}
module.exports = TerminalLogger;

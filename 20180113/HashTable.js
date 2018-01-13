function HashTable () {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
}
function put (data) {
    let pos = this.betterHash(data);
    this.table[pos] = data;
}
function simpleHash (data) {
    let total = 0;
    for (let i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}
function showDistro () {
    let n = 0;
    for (let i = 0; i < this.table.length; ++i) {
        if (this.table[i] !== undefined) {
            console.log(`${i}: ${this.table[i]}`);
        }
    }
}
function betterHash (string) {
    const H = 7;
    let total = 0;
    for (let i = 0; i < string.length; ++i) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
        total += this.table.length -1;
    }
    return parseInt(total, 10);
}

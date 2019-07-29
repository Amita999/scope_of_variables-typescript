function scopeTest() {
    if (true) {
        var scope = "variable with var";
        var scope1 = "variable with let";
    }
    ;
}
console.log("Output " + scopeTest());

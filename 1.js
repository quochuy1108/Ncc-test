function groupByLength(xs, key) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

console.log(groupByLength(['one', 'two', 'three', 'four', 'five'], 'length'));
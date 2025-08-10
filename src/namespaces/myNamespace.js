// Runtime shim for legacy TypeScript `namespace` when using babel-jest.
// Babel does not compile TS namespaces to runtime JS values, so we expose a
// plain JS object on the global scope that the tests can use.
(function () {
  const ns = (globalThis.myNamespace = globalThis.myNamespace || {});

  ns.twice = function (x) {
    return 2 * x;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ns;
  }
})();

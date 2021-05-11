# AG Grid Snapshot Demo

This is a short demo to highlight difficulties in running test snapshots when using custom cell renderers with AG Grid React.

To try it out:

```
npm ci
```

then:

```
npm test
```

Note that if you uncomment the wait (`await new Promise((r) => setTimeout(r, 1000))`), the test will fail, because the custom cell renderer hasn't actually rendered to the DOM before the snapshot is run.
# ag-grid-snapshot-demo

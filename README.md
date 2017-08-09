Mount your test folder (e.g. `demo`) to `/usr/src/app/` and run the casperjs suite.
```
docker run --rm --volume=$PWD/demo:/usr/src/app/demo martinnowak/phantomcss-tester test demo/testsuite.js
```

# Build

Use the following to build the container.
```
rm -rf node_modules # should not be copied into container
docker build -t martinnowak/phantomcss-tester -t martinnowak/phantomcss-tester:$(git describe) .
```


./node_modules/.bin/tsc
cp src/*.d.ts dist/src
esbuild src/shadow-dom-element.js --outfile=dist/src/shadow-dom-element.js --minify --sourcemap --target=chrome100
web-test-runner --coverage
coverageValue=`grep -oE -m 1 '\s*([0-9]+\%)' coverage/lcov-report/index.html`

sed "s/100%/${coverageValue}/" test/coverage.svg >coverage/coverage.svg

bash ./test.sh

PACKAGE_VERSION=$(node -pe "require('shadow-dom-element/package.json').version")
echo $PACKAGE_VERSION

#mkdir dist/demo
cp -r demo dist/
#cp src/*.d.ts dist/src

## https://kangax.github.io/compat-table/es2016plus/
#esbuild --bundle  src/*.js --minify --sourcemap --target=chrome100 --outdir=dist/src --format=esm
esbuild --bundle  src/*.js --target=chrome100 --outdir=dist/src --format=esm

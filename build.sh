rm -rf dist
bash ./test.sh

PACKAGE_VERSION=$(node -pe "require('shadow-dom-element/package.json').version")
echo $PACKAGE_VERSION

#mkdir dist/demo
cp -r demo dist/
#cp src/*.d.ts dist/src

## https://kangax.github.io/compat-table/es2016plus/
#esbuild src/*.js --minify --sourcemap --target=chrome97,firefox95,safari15,edge96 --outdir=dist

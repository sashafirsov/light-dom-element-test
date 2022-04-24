# as tested sources reside in foreign module, they would be copied into src
# to be treated as internal by test coverage

cd src

rm light-dom-element.d.ts >/dev/null
rm light-dom-element.js >/dev/null
rm shadow-dom-element.d.ts  >/dev/null
rm shadow-dom-element.js  >/dev/null

cp ../node_modules/light-dom-element/light-dom-element.d.ts light-dom-element.d.ts
cp ../node_modules/light-dom-element/light-dom-element.js light-dom-element.js
cp ../node_modules/shadow-dom-element/shadow-dom-element.d.ts shadow-dom-element.d.ts
cp ../node_modules/shadow-dom-element/shadow-dom-element.js shadow-dom-element.js

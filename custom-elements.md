# `src/index.ts`:

## Exports

| Kind | Name                  | Declaration         | Module                   | Package |
| ---- | --------------------- | ------------------- | ------------------------ | ------- |
| `js` | `LightDomElementTest` | LightDomElementTest | ./LightDomElementTest.js |         |

# `src/light-dom-element-test.ts`:

## Exports

| Kind                        | Name                     | Declaration         | Module                      | Package |
| --------------------------- | ------------------------ | ------------------- | --------------------------- | ------- |
| `custom-element-definition` | `light-dom-element-test` | LightDomElementTest | /src/LightDomElementTest.js |         |

# `src/light-dom-element.js`:

## class: `LightDomElement`, `light-dom-element`

### Superclass

| Name               | Module | Package            |
| ------------------ | ------ | ------------------ |
| `ShadowDomElement` |        | shadow-dom-element |

### Fields

| Name      | Privacy | Type | Default | Description | Inherited From   |
| --------- | ------- | ---- | ------- | ----------- | ---------------- |
| `promise` |         |      |         |             | ShadowDomElement |

### Methods

| Name            | Privacy | Description | Parameters | Return | Inherited From   |
| --------------- | ------- | ----------- | ---------- | ------ | ---------------- |
| `applyTemplate` |         |             | `t`        |        | ShadowDomElement |
| `attachShadow`  |         |             |            |        |                  |
| `fetch`         |         |             | `url`      |        | ShadowDomElement |
| `slotsInit`     |         |             |            |        | ShadowDomElement |

<hr/>

## Exports

| Kind                        | Name                | Declaration     | Module                   | Package |
| --------------------------- | ------------------- | --------------- | ------------------------ | ------- |
| `js`                        | `default`           | LightDomElement | src/light-dom-element.js |         |
| `custom-element-definition` | `light-dom-element` | LightDomElement | src/light-dom-element.js |         |

# `src/LightDomElementTest.ts`:

## class: `LightDomElementTest`, `light-dom-element-test`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name      | Privacy | Type     | Default       | Description | Inherited From |
| --------- | ------- | -------- | ------------- | ----------- | -------------- |
| `title`   |         | `string` | `'Hey there'` |             |                |
| `counter` |         | `number` | `5`           |             |                |

### Methods

| Name          | Privacy | Description | Parameters | Return | Inherited From |
| ------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `__increment` |         |             |            |        |                |

### Attributes

| Name      | Field   | Inherited From |
| --------- | ------- | -------------- |
| `title`   | title   |                |
| `counter` | counter |                |

<hr/>

## Exports

| Kind | Name                  | Declaration         | Module                     | Package |
| ---- | --------------------- | ------------------- | -------------------------- | ------- |
| `js` | `LightDomElementTest` | LightDomElementTest | src/LightDomElementTest.ts |         |

# `src/shadow-dom-element.js`:

## class: `ShadowDomElement`, `shadow-dom-element`

### Superclass

| Name          | Module | Package |
| ------------- | ------ | ------- |
| `HTMLElement` |        |         |

### Fields

| Name      | Privacy | Type | Default | Description | Inherited From |
| --------- | ------- | ---- | ------- | ----------- | -------------- |
| `promise` |         |      |         |             |                |

### Methods

| Name            | Privacy | Description | Parameters | Return | Inherited From |
| --------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `fetch`         |         |             | `url`      |        |                |
| `applyTemplate` |         |             | `t`        |        |                |
| `slotsInit`     |         |             |            |        |                |

<hr/>

## Exports

| Kind                        | Name                 | Declaration      | Module                    | Package |
| --------------------------- | -------------------- | ---------------- | ------------------------- | ------- |
| `js`                        | `default`            | ShadowDomElement | src/shadow-dom-element.js |         |
| `custom-element-definition` | `shadow-dom-element` | ShadowDomElement | src/shadow-dom-element.js |         |

# `stories/index.stories.ts`:

## Variables

| Name             | Description | Type |
| ---------------- | ----------- | ---- |
| `Regular`        |             |      |
| `CustomTitle`    |             |      |
| `CustomCounter`  |             |      |
| `SlottedContent` |             |      |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                   | Package |
| ---- | ---------------- | -------------- | ------------------------ | ------- |
| `js` | `default`        |                | stories/index.stories.ts |         |
| `js` | `Regular`        | Regular        | stories/index.stories.ts |         |
| `js` | `CustomTitle`    | CustomTitle    | stories/index.stories.ts |         |
| `js` | `CustomCounter`  | CustomCounter  | stories/index.stories.ts |         |
| `js` | `SlottedContent` | SlottedContent | stories/index.stories.ts |         |

# `dist/src/index.js`:

## Exports

| Kind | Name                  | Declaration         | Module                   | Package |
| ---- | --------------------- | ------------------- | ------------------------ | ------- |
| `js` | `LightDomElementTest` | LightDomElementTest | ./LightDomElementTest.js |         |

# `dist/src/light-dom-element-test.js`:

## Exports

| Kind                        | Name                     | Declaration         | Module                           | Package |
| --------------------------- | ------------------------ | ------------------- | -------------------------------- | ------- |
| `custom-element-definition` | `light-dom-element-test` | LightDomElementTest | /dist/src/LightDomElementTest.js |         |

# `dist/src/light-dom-element.js`:

## Variables

| Name               | Description | Type |
| ------------------ | ----------- | ---- |
| `ShadowDomElement` |             |      |
| `LightDomElement`  |             |      |

<hr/>

## Exports

| Kind                        | Name                 | Declaration      | Module                        | Package |
| --------------------------- | -------------------- | ---------------- | ----------------------------- | ------- |
| `custom-element-definition` | `shadow-dom-element` | ShadowDomElement | dist/src/light-dom-element.js |         |
| `custom-element-definition` | `light-dom-element`  | LightDomElement  | dist/src/light-dom-element.js |         |
| `js`                        | `default`            | LightDomElement  | dist/src/light-dom-element.js |         |

# `dist/src/LightDomElementTest.js`:

## class: `LightDomElementTest`, `light-dom-element-test`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name      | Privacy | Type     | Default       | Description | Inherited From |
| --------- | ------- | -------- | ------------- | ----------- | -------------- |
| `title`   |         | `string` | `'Hey there'` |             |                |
| `counter` |         | `number` | `5`           |             |                |

### Methods

| Name          | Privacy | Description | Parameters | Return | Inherited From |
| ------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `__increment` |         |             |            |        |                |

<hr/>

## Exports

| Kind | Name                  | Declaration         | Module                          | Package |
| ---- | --------------------- | ------------------- | ------------------------------- | ------- |
| `js` | `LightDomElementTest` | LightDomElementTest | dist/src/LightDomElementTest.js |         |

# `dist/src/shadow-dom-element.js`:

## Variables

| Name               | Description | Type |
| ------------------ | ----------- | ---- |
| `ShadowDomElement` |             |      |

<hr/>

## Exports

| Kind                        | Name                 | Declaration      | Module                         | Package |
| --------------------------- | -------------------- | ---------------- | ------------------------------ | ------- |
| `custom-element-definition` | `shadow-dom-element` | ShadowDomElement | dist/src/shadow-dom-element.js |         |
| `js`                        | `default`            | ShadowDomElement | dist/src/shadow-dom-element.js |         |

# `dist/stories/index.stories.js`:

## Variables

| Name             | Description | Type |
| ---------------- | ----------- | ---- |
| `Regular`        |             |      |
| `CustomTitle`    |             |      |
| `CustomCounter`  |             |      |
| `SlottedContent` |             |      |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                        | Package |
| ---- | ---------------- | -------------- | ----------------------------- | ------- |
| `js` | `default`        |                | dist/stories/index.stories.js |         |
| `js` | `Regular`        | Regular        | dist/stories/index.stories.js |         |
| `js` | `CustomTitle`    | CustomTitle    | dist/stories/index.stories.js |         |
| `js` | `CustomCounter`  | CustomCounter  | dist/stories/index.stories.js |         |
| `js` | `SlottedContent` | SlottedContent | dist/stories/index.stories.js |         |

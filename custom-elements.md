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

# `src/light-dom-element.d.ts`:

## class: `LightDomElement`, `light-dom-element`

### Superclass

| Name               | Module                     | Package |
| ------------------ | -------------------------- | ------- |
| `ShadowDomElement` | /src/shadow-dom-element.js |         |

### Fields

| Name      | Privacy | Type            | Default | Description                                          | Inherited From   |
| --------- | ------- | --------------- | ------- | ---------------------------------------------------- | ---------------- |
| `promise` |         | `Promise<this>` |         | resolved when template and slots payload is rendered | ShadowDomElement |

### Methods

| Name            | Privacy | Description                                                                                                                | Parameters                             | Return | Inherited From   |
| --------------- | ------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------ | ---------------- |
| `applyTemplate` |         | Applies template content and renders slots                                                                                 | `templateElement: HTMLTemplateElement` |        | ShadowDomElement |
| `attachShadow`  |         | Overrides HTMLElement {attachShadow} method to prevent shadow creation.&#xA;called from constructor before \`slotsInit()\` | `init: ShadowRootInit`                 |        |                  |
| `slotsInit`     |         | reads payload and template from body or by attributes, apply template and renders slots                                    |                                        |        | ShadowDomElement |

<hr/>

## Exports

| Kind | Name      | Declaration     | Module                     | Package |
| ---- | --------- | --------------- | -------------------------- | ------- |
| `js` | `default` | LightDomElement | src/light-dom-element.d.ts |         |

# `src/light-dom-element.js`:

## class: `LightDomElement`, `light-dom-element`

### Superclass

| Name               | Module                   | Package |
| ------------------ | ------------------------ | ------- |
| `ShadowDomElement` | /src/ShadowDomElement.js |         |

### Fields

| Name      | Privacy | Type            | Default | Description                                          | Inherited From   |
| --------- | ------- | --------------- | ------- | ---------------------------------------------------- | ---------------- |
| `promise` |         | `Promise<this>` |         | resolved when template and slots payload is rendered | ShadowDomElement |

### Methods

| Name            | Privacy | Description                                                                             | Parameters | Return | Inherited From   |
| --------------- | ------- | --------------------------------------------------------------------------------------- | ---------- | ------ | ---------------- |
| `applyTemplate` |         | applies template content and renders slots                                              | `t`        |        | ShadowDomElement |
| `attachShadow`  |         |                                                                                         |            |        |                  |
| `slotsInit`     |         | reads payload and template from body or by attributes, apply template and renders slots |            |        | ShadowDomElement |

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

# `src/shadow-dom-element.d.ts`:

## class: `ShadowDomElement`, `shadow-dom-element`

### Superclass

| Name          | Module | Package |
| ------------- | ------ | ------- |
| `HTMLElement` |        |         |

### Fields

| Name      | Privacy | Type            | Default | Description                                          | Inherited From |
| --------- | ------- | --------------- | ------- | ---------------------------------------------------- | -------------- |
| `promise` |         | `Promise<this>` |         | resolved when template and slots payload is rendered |                |

### Methods

| Name            | Privacy | Description                                                                             | Parameters                             | Return | Inherited From |
| --------------- | ------- | --------------------------------------------------------------------------------------- | -------------------------------------- | ------ | -------------- |
| `applyTemplate` |         | applies template content and renders slots                                              | `templateElement: HTMLTemplateElement` |        |                |
| `slotsInit`     |         | reads payload and template from body or by attributes, apply template and renders slots |                                        |        |                |

<hr/>

## Exports

| Kind | Name      | Declaration      | Module                      | Package |
| ---- | --------- | ---------------- | --------------------------- | ------- |
| `js` | `default` | ShadowDomElement | src/shadow-dom-element.d.ts |         |

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

# `dist/src/index.d.ts`:

## Exports

| Kind | Name                  | Declaration         | Module                   | Package |
| ---- | --------------------- | ------------------- | ------------------------ | ------- |
| `js` | `LightDomElementTest` | LightDomElementTest | ./LightDomElementTest.js |         |

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

# `dist/src/light-dom-element.d.ts`:

## class: `LightDomElement`, `light-dom-element`

### Superclass

| Name               | Module                          | Package |
| ------------------ | ------------------------------- | ------- |
| `ShadowDomElement` | /dist/src/shadow-dom-element.js |         |

### Fields

| Name      | Privacy | Type            | Default | Description                                          | Inherited From   |
| --------- | ------- | --------------- | ------- | ---------------------------------------------------- | ---------------- |
| `promise` |         | `Promise<this>` |         | resolved when template and slots payload is rendered | ShadowDomElement |

### Methods

| Name            | Privacy | Description                                                                                                                | Parameters                             | Return | Inherited From   |
| --------------- | ------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------ | ---------------- |
| `applyTemplate` |         | Applies template content and renders slots                                                                                 | `templateElement: HTMLTemplateElement` |        | ShadowDomElement |
| `attachShadow`  |         | Overrides HTMLElement {attachShadow} method to prevent shadow creation.&#xA;called from constructor before \`slotsInit()\` | `init: ShadowRootInit`                 |        |                  |
| `slotsInit`     |         | reads payload and template from body or by attributes, apply template and renders slots                                    |                                        |        | ShadowDomElement |

<hr/>

## Exports

| Kind | Name      | Declaration     | Module                          | Package |
| ---- | --------- | --------------- | ------------------------------- | ------- |
| `js` | `default` | LightDomElement | dist/src/light-dom-element.d.ts |         |

# `dist/src/light-dom-element.js`:

## class: `LightDomElement`, `light-dom-element`

### Superclass

| Name               | Module                        | Package |
| ------------------ | ----------------------------- | ------- |
| `ShadowDomElement` | /dist/src/ShadowDomElement.js |         |

### Fields

| Name      | Privacy | Type            | Default | Description                                          | Inherited From   |
| --------- | ------- | --------------- | ------- | ---------------------------------------------------- | ---------------- |
| `promise` |         | `Promise<this>` |         | resolved when template and slots payload is rendered | ShadowDomElement |

### Methods

| Name            | Privacy | Description                                                                             | Parameters | Return | Inherited From   |
| --------------- | ------- | --------------------------------------------------------------------------------------- | ---------- | ------ | ---------------- |
| `applyTemplate` |         | applies template content and renders slots                                              | `t`        |        | ShadowDomElement |
| `attachShadow`  |         |                                                                                         |            |        |                  |
| `slotsInit`     |         | reads payload and template from body or by attributes, apply template and renders slots |            |        | ShadowDomElement |

<hr/>

## Exports

| Kind                        | Name                | Declaration     | Module                        | Package |
| --------------------------- | ------------------- | --------------- | ----------------------------- | ------- |
| `js`                        | `default`           | LightDomElement | dist/src/light-dom-element.js |         |
| `custom-element-definition` | `light-dom-element` | LightDomElement | dist/src/light-dom-element.js |         |

# `dist/src/LightDomElementTest.d.ts`:

## class: `LightDomElementTest`, `light-dom-element-test`

### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

### Fields

| Name      | Privacy | Type     | Default | Description | Inherited From |
| --------- | ------- | -------- | ------- | ----------- | -------------- |
| `title`   |         | `string` |         |             |                |
| `counter` |         | `number` |         |             |                |

### Methods

| Name          | Privacy | Description | Parameters | Return | Inherited From |
| ------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `__increment` |         |             |            | `void` |                |

<hr/>

## Exports

| Kind | Name                  | Declaration         | Module                            | Package |
| ---- | --------------------- | ------------------- | --------------------------------- | ------- |
| `js` | `LightDomElementTest` | LightDomElementTest | dist/src/LightDomElementTest.d.ts |         |

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

# `dist/src/shadow-dom-element.d.ts`:

## class: `ShadowDomElement`, `shadow-dom-element`

### Superclass

| Name          | Module | Package |
| ------------- | ------ | ------- |
| `HTMLElement` |        |         |

### Fields

| Name      | Privacy | Type            | Default | Description                                          | Inherited From |
| --------- | ------- | --------------- | ------- | ---------------------------------------------------- | -------------- |
| `promise` |         | `Promise<this>` |         | resolved when template and slots payload is rendered |                |

### Methods

| Name            | Privacy | Description                                                                             | Parameters                             | Return | Inherited From |
| --------------- | ------- | --------------------------------------------------------------------------------------- | -------------------------------------- | ------ | -------------- |
| `applyTemplate` |         | applies template content and renders slots                                              | `templateElement: HTMLTemplateElement` |        |                |
| `slotsInit`     |         | reads payload and template from body or by attributes, apply template and renders slots |                                        |        |                |

<hr/>

## Exports

| Kind | Name      | Declaration      | Module                           | Package |
| ---- | --------- | ---------------- | -------------------------------- | ------- |
| `js` | `default` | ShadowDomElement | dist/src/shadow-dom-element.d.ts |         |

# `dist/src/shadow-dom-element.js`:

## class: `c`, `shadow-dom-element`

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
| `fetch`         |         |             | `e`        |        |                |
| `applyTemplate` |         |             | `e`        |        |                |
| `slotsInit`     |         |             |            |        |                |

<hr/>

## Exports

| Kind                        | Name                 | Declaration | Module                         | Package |
| --------------------------- | -------------------- | ----------- | ------------------------------ | ------- |
| `js`                        | `default`            | c           | dist/src/shadow-dom-element.js |         |
| `custom-element-definition` | `shadow-dom-element` | c           | dist/src/shadow-dom-element.js |         |

# `dist/stories/index.stories.d.ts`:

## Variables

| Name             | Description | Type                                                                                                                                                                                                                                                                  |
| ---------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_default`       |             | `{
    title: string;
    component: string;
    argTypes: {
        title: {
            control: string;
        };
        counter: {
            control: string;
        };
        textColor: {
            control: string;
        };
    };
}` |
| `Regular`        |             | `Story<ArgTypes>`                                                                                                                                                                                                                                                     |
| `CustomTitle`    |             | `Story<ArgTypes>`                                                                                                                                                                                                                                                     |
| `CustomCounter`  |             | `Story<ArgTypes>`                                                                                                                                                                                                                                                     |
| `SlottedContent` |             | `Story<ArgTypes>`                                                                                                                                                                                                                                                     |

<hr/>

## Exports

| Kind | Name             | Declaration    | Module                          | Package |
| ---- | ---------------- | -------------- | ------------------------------- | ------- |
| `js` | `default`        | \_default      | dist/stories/index.stories.d.ts |         |
| `js` | `Regular`        | Regular        | dist/stories/index.stories.d.ts |         |
| `js` | `CustomTitle`    | CustomTitle    | dist/stories/index.stories.d.ts |         |
| `js` | `CustomCounter`  | CustomCounter  | dist/stories/index.stories.d.ts |         |
| `js` | `SlottedContent` | SlottedContent | dist/stories/index.stories.d.ts |         |

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

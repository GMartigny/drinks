# drinks

List of all mankind alcoholic beverages.


## Installation

    npm install drinks


## Usage

```js
import drinks from "drinks";

console.log(drinks());
/*
[
    {
        name: "Beer",
        min: 2,
        max: 12,
    },
    ...
]
*/
```


## Example

```js
import drinks from "drinks";

const liquorsNames = drinks()
    .filter(({ min }) => min > 30)
    .map(({ name }) => name);
```


## License

[MIT](license)

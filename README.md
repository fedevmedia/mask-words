# Example

```shell
$ npm install mask-words
```

```javascript
const { maskWords } = require('mask-words');
// ES2015 modules
import { maskWords } from ('mask-words');

const filtered =
  maskWords('The new Apple Macbook pro has touchbar',
  ["pro", "touchbar"]
);

console.log(filtered);
// The new Apple Macbook ***** has *****
```

# find-html-files

Find all files in a directory that may contain HTML content
---

## GitHub Repository

[find-in-files](https://github.com/kaesetoast/find-in-files)

## Installation

```shell
npm install [-g] find-html-files
```

## Usage

### On Command line:
```shell
findhtml <directory>
```

Output: JSON array of path strings in JSON.

Example command:
```shell
findhtml sites
```
Example result:
```json
[
  "sites/apple.com/index.html",
  "sites/stackoverflow.com/questions/24082810/binary-file-in-npm-package/container.html",
  "sites/stackoverflow.com/questions/24082810/binary-file-in-npm-package/index.html",
  "sites/terrymorse.com/index.html",
  "sites/terrymorse.com/packages/index.html",
  "sites/www.boycottpollution.org/new-diet/index.html",
  "sites/www.nytimes.com/client.html",
  "sites/www.nytimes.com/index.html",
  "sites/www.nytimes.com/pubcid.php",
  "sites/www.nytimes.com/live/2022/02/18/world/russia-ukraine-biden-putin/index.html",
  "sites/www.nytimes.com/live/2022/02/18/world/russia-ukraine-biden-putin/pubcid.php",
  "sites/www.yahoo.com/fc.php",
  "sites/www.yahoo.com/index.html",
  "sites/www.yahoo.com/r-csc.html"
]
```
### From JavaScript

```javascript
import { findHTMLFiles } from 'find-html-files';

findHTMLFiles('./sites')
  .then(foundPaths => {
    // do something with array of found paths
  });
```

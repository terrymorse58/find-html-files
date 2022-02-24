#!/usr/bin/env node

// find recursively all files in a directory that may contain HTML
// Usage: findhtml <directory>

import { findHTMLFiles} from './findhtmlfiles.js';

if (process.argv.length < 3) {
  console.error('Usage: findhtml <directory>');
  process.exit(0);
}

const myPath = process.argv[2];

findHTMLFiles(myPath)
  .then(foundPaths => {
    process.stdout.write(
      JSON.stringify(foundPaths, null, 2) + '\n');
  });


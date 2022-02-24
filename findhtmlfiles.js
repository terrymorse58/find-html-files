// find recursively all files in a directory that may contain HTML
// fyi: the common file extensions for HTML are
//      .html .htm .php .aspx .asp .jsp

import { promises as fsPromises } from 'fs';

const htmlExtensions = ['.html', '.htm', '.php', '.aspx', '.asp', '.jsp'];

/**
 * true if file has one of the extensions in htmlExtensions[]
 * @param {string} name
 * @return {boolean}
 */
function hasHTMLExtension (name) {
  for (const extension of htmlExtensions) {
    if (name.endsWith(extension)) {
      return true;
    }
  }
  return false;
}

/**
 * find array of paths to files that contain HTML
 * @param {String} path
 */
function findHTMLFiles (path) {

  let htmlPaths;

  // remove trailing '/' from path
  if (path.endsWith('/')) {
    path = path.slice(0, path.length - 1);
  }

  return fsPromises.readdir(path, {
    encoding: 'utf8',
    withFileTypes: true
  })

    .then(dirEnts => {
      const subDirs = dirEnts.filter(d => d.isDirectory())
          .map(ent => ent.name),
        htmlFiles = dirEnts.filter(d => d.isFile())
          .map(ent => ent.name)
          .filter(hasHTMLExtension);

      htmlPaths = htmlFiles.map(filename => path + '/' + filename);

      // search every sub-directory
      let subDirPromises = subDirs.map(subDir => {
        return findHTMLFiles(path + '/' + subDir);
      });

      return Promise.all(subDirPromises);
    })

    .then(subDirResults => {
      return htmlPaths.concat(...subDirResults);
    })

    .catch(err => {
      console.error('findHTMLFiles error:', err);
      throw err;
    });
}

export {
  findHTMLFiles
};

function URLify(string) {
  // Trim whitespaces and replace the rest of spaces with %20
  return string.trim().replace(/\s/g,'%20');
}

module.exports = URLify;

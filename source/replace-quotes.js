module.exports = function(string) {
  return string
    .replace(/^"/g, '``')
    .replace(/\s"/g, ' ``')
    .replace('"', '\'\'');
};

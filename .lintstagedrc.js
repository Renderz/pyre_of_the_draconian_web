module.exports = {
  '*.{md,json}': ['prettier --cache --write'],
  '*.{js,jsx}': ['eslint --fix', 'prettier --cache --write'],
  '*.ts?(x)': ['eslint --fix', 'prettier --cache --parser=typescript --write'],
  'package.json': ['prettier --write'],
  '{!(package)*.json,.!(browserslist|npm)*rc}': [
    'prettier --write--parser json',
  ],
};

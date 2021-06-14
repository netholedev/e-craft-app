#!/usr/bin/env node
const chokidar = require('chokidar');
const less = require('less');
const fs = require('fs');

const input = './src/scss/antd.less';
const output = './src/scss/antd.css';

compile(input, output);

chokidar.watch(input).on('change', (path) => compile(path, output));

function compile(path, output) {
  const lessInput = fs.readFileSync(path, 'utf-8');

  less.render(lessInput, { javascriptEnabled: true }).then(
    ({ css }) => fs.writeFileSync(output, css, 'utf-8'),
    (err) => console.log(err),
  );
}

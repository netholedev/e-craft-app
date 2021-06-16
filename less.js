#!/usr/bin/env node
const chokidar = require('chokidar');
const less = require('less');
const fs = require('fs');

const inputLight = './src/scss/antd-light.less';
const inputDark = './src/scss/antd-dark.less';
const outputLight = './public/antd-light.css';
const outputDark = './public/antd-dark.css';

compile(inputLight, outputLight);
compile(inputDark, outputDark);

chokidar.watch(inputLight).on('change', (path) => compile(path, outputLight));
chokidar.watch(inputDark).on('change', (path) => compile(path, outputDark));

function compile(path, output) {
  const lessInput = fs.readFileSync(path, 'utf-8');

  less.render(lessInput, { javascriptEnabled: true }).then(
    ({ css }) => fs.writeFileSync(output, css, 'utf-8'),
    (err) => console.log(err),
  );
}

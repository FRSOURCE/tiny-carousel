// eslint-disable-next-line @typescript-eslint/no-var-requires
const compiler = require('vue-template-compiler');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

fs.readFile('./src/components/TinyCarousel.vue', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  const component = compiler.parseComponent(data);

  fs.writeFile('./dist/index.ts', component.script.content, function () {
    process.exit();
  });
});



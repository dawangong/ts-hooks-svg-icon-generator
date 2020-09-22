const generator = require('../src/index');

const config = {
	svgDir: './test/svg/',
	iconPrint: './test/components/index.tsx'
};
generator(config);

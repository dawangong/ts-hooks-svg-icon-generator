const nunjucks = require('nunjucks');
const path = require('path');
const fs = require('fs');

const getDir = require('./plugin/getDir');
const replaceSvg = require('./plugin/replace');
const { cleanupName, cleanupSvg } = require('./plugin/clean');

// nunjucks 配置
nunjucks.configure({ autoescape: false });

// 默认模版路径
const defaultTemplate = path.join(__dirname, './', 'template');
// 默认注释
const defaultComment = '默认注释';

module.exports = (config) => {
    // 模版
	const template = config.template || defaultTemplate;
    // 模版路径
	const templateFile = path.isAbsolute(template) ? template : path.join(process.cwd(), template);
    // 模版内容
	const templateContent = fs.readFileSync(templateFile).toString();
    // svg文件路径
	const svgDir = path.isAbsolute(config.svgDir) ? config.svgDir : path.join(process.cwd(), config.svgDir);
    // tslint
	const tslintDisable = config.tslintDisable || false;
    // svg文件
	const svgFiles = getDir(svgDir);
    // icon输出设置
	const iconPrint = config.iconPrint || path.join(process.cwd(), 'Icon.react.js');
    // 注释
	const comment = config.comment || defaultComment;
    // svg处理队列
	const svgPromises = svgFiles.map(file => replaceSvg(file, fs.readFileSync(file).toString()));

	return Promise.all(svgPromises)
        .then((results) => {
	const icons = results.map(({ name, svg }) => ({
		name: cleanupName(name),
		svg: cleanupSvg(svg)
	})).sort((a, b) => a.name.localeCompare(b.name));
	fs.writeFileSync(iconPrint, nunjucks.renderString(templateContent, { icons, comment, tslintDisable }));
	console.log('svg-icon生成完毕~');
})
        .catch(error => console.error(error));
};

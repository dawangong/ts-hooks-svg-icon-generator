const path = require('path');

// 冒号后转大写
const toUp = html => html.replace(/:(\w)/g, (match, letter) => letter.toUpperCase());
// 替换path属性中的id
const replacePath = (name, html) => html.replace(/<path [^>]*id=['"]([^'"]+)[^>]*>/gi, match => match.replace(/id=".*"/g, `id="${name}-1"`));
// xlinkHref="#NotifySuccess"
const replaceHref = (name, html) => html.replace(/xlinkHref=".*"/g, `xlinkHref="#${name}-1"`);

// <mask id="mask-2" fill="white">
const replaceMask = (name, html) => html.replace(/<mask [^>]*id=['"]([^'"]+)[^>]*>/gi, match => match.replace(/id=".*"/g, `id="${name}-2"`));

// <rect mask="url(#mask-2)">
const replaceRect = (name, html) => html.replace(/<rect [^>]*mask=['"]([^'"]+)[^>]*>/gi, match => match.replace(/mask=".*"/g, `mask="url(#${name}-2)"`));
// <?xml ?>
const replaceXml = html => html.replace(/<\?.*\?>/, "");
// comment
const replaceComment = html => html.replace(/<!--.*-->/, "");

// all replace
const replaceSvg = (name, html) => replaceRect(name, replaceMask(name, replaceHref(name, replacePath(name, replaceComment(replaceXml(toUp(html)))))));


module.exports = (file, svg) => {
    return new Promise(resolve => {
        const name = path.basename(file, '.svg');
        svg = replaceSvg(name, svg);
        return resolve({
            name,
            svg
        });
    });
};
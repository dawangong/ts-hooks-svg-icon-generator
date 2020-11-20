# ts-hooks-svg-icon-generator

support react hooks + ts project

- api
  - svgDir: svg文件目录
  - comment: 文件注释
  - template: 自定义模版文件
  - iconPrint: icon输出配置
  - tslintDisable: 增加 tslint 在 comment 后面

- example

```javascript
    const generator = require('../src/index');

    const config = {
        svgDir: './svg/',
        destination: './components/index.tsx'
    };
    generator(config);
```

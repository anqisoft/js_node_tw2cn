Created on Wed Jan 10 2024 23:24:00<br>
### Introduce
<ul>
<li><en_us>Translate file content from Traditional Chinese to Simplified Chinese.</en_us></li>
<li><zh_cn>翻译文件中的繁体中文到简体中文。</zh_cn></li>
<li><zh_tw>翻譯文件中的繁體中文到簡體中文。</zh_tw></li>
</ul>

### Usage1
```bash
npm i -g @dishanqian/tw2cn
tw2cn zh_tw.txt zh_cn.txt
```

### Usage2
```bash
npm i @dishanqian/tw2cn
```
```javascript
const { convert } = require('@dishanqian/tw2cn');
// convert('sourceFilename', 'goalFilename');
convert('zh_tw.txt', 'zh_cn.txt');
```

### Develop
```bash
git clone git+ssh://git@github.com/anqisoft/js_node_tw2cn
cd js_node_tw2cn

npm i @dishanqian/cn_and_tw

# test
node test/index.js zh_tw.txt zh_cn.txt
```

## This
### typescript
github: https://github.com/anqisoft/ts_deno_tw2cn
<br>deno: https://deno.land/x/tw2cn

### javascript
github: https://github.com/anqisoft/js_node_tw2cn
<br>npmjs: https://www.npmjs.com/package/@dishanqian/tw2cn

## Base
### typescript
github: https://github.com/anqisoft/ts_cn_and_tw
<br>deno: https://deno.land/x/cn_and_tw

### javascript
github: https://github.com/anqisoft/js_cn_and_tw
<br>npmjs: https://www.npmjs.com/package/@dishanqian/cn_and_tw

## Sibling
### typescript
github: https://github.com/anqisoft/ts_deno_cn2tw
<br>deno: https://deno.land/x/cn2tw

### javascript
github: https://github.com/anqisoft/js_node_cn2tw
<br>npmjs: https://www.npmjs.com/package/@dishanqian/cn2tw

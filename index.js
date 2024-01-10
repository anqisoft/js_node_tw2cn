#!/usr/bin/env node
"use strict";
/*
 * Copyright (c) 2024 anqisoft@gmail.com
 * index.ts
 *
 * Usage: ```bash
npm i -g @dishanqian/tw2cn
tw2cn zh_tw.txt zh_cn.txt
```
 *
 * Usage: ```bash
git clone git+ssh://git@github.com/anqisoft/js_node_tw2cn
cd js_node_tw2cn
npm i @dishanqian/cn_and_tw
node index.js zh_tw.txt zh_cn.txt
```
 *
 * <en_us>
 * Created on Wed Jan 10 2024 20:09:00
 * Feature: Translate file content from Traditional Chinese to Simplified Chinese.</en_us>
 *
 * <zh_cn>
 * 创建：2024年1月10日 20:09:00
 * 功能：翻译文件中的繁体中文到简体中文。
 * </zh_cn>
 *
 * <zh_tw>
 * 創建：2024年1月10日 20:09:00
 * 功能：翻譯文件中的繁體中文到繁體中文。
 * </zh_tw>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;

const fs = require('fs');
const { tw2cn } = require('@dishanqian/cn_and_tw');

/**
 * <en_us>Convert Traditional Chinese to Simplified Chinese in a file</en_us>
 * <zh_cn>转换文件中的繁体中文到简体中文</zh_cn>
 * <zh_tw>轉換檔案中的繁體中文到繁體中文</zh_tw>
 *
 * @param sourceFilename string <en_us>Original document, including Traditional Chinese</en_us><zh_cn>原始文件，含繁体中文</zh_cn><zh_tw>原始文件，含繁體中文</zh_tw>
 * @param goalFilename string <en_us>Target Simplified Chinese file</en_us><zh_cn>目标简体文件</zh_cn><zh_tw>目標繁體文件</zh_tw>
 *
 * @returns boolean <en_us>Conversion is successful or not.</en_us><zh_cn>转换成功与否</zh_cn><zh_tw>轉換成功與否</zh_tw>
 */
function convert(sourceFilename, goalFilename) {
    // https://nodejs.org/api/fs.html
    const FILE_WRITE_MODE = { mode: 0o777 };
    try {
        const SOURCE_CONTENT = fs.readFileSync(sourceFilename).toString();
        // console.log(SOURCE_CONTENT);
        fs.writeFileSync(goalFilename, tw2cn(SOURCE_CONTENT), FILE_WRITE_MODE);
        return true;
    }
    catch (e) {
        console.error(e);
        return false;
    }
}
exports.convert = convert;

(() => {
    const { argv, exit } = require('node:process');
    const args = argv.slice(2);
    let needShowTips = false;
    args.forEach(arg => {
        switch(arg.toLowerCase()) {
            case '/help':
            case '/h':
            case '/?':

            case '-help':
            case '-h':
            case '-?':

            case '--help':
            case '--h':
            case '--?':
                needShowTips = true;
                break;
            case '--v':
            case '--version':
            case '-v':
            case '-version':
            case '/v':
            case '/version':
                console.log('0.0.1');
                exit();
                break;
            default:
                break;
        }
    });
    if(args.length < 2 || needShowTips) {
        console.log('Copyright (c) 2024 anqisoft@gmail.com\n\
            Translate file content from Traditional Chinese to Simplified Chinese.\n\n\
            usage:\n\
            tw2cn sourceFilename goalFilename\n\
            eg:\n\
            tw2cn zh_cn.txt zh_tw.txt\n\n\
            show this tips:\n\
            tw2cn /?|/h|/help|-?|-h|-help|--?|--h|--help\n\
            show version:\n\
            tw2cn /v|/version|-v|-version|--v|--version\n\
        ');
        exit();
    }

    const START_DATE = new Date();
    const [source, goal] = args;
    console.log(convert(source, goal));
    const END_DATE = new Date();
    const USED_MILLISECONDS = END_DATE.getTime() - START_DATE.getTime();
    console.log('Used', USED_MILLISECONDS, 'milliseconds, it is equivalent to ', parseFloat((USED_MILLISECONDS / 1000).toFixed(4)));
})();

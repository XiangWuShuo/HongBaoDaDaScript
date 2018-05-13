# HongBaoDaDaScript

红包大大 Web 端批量创建脚本。

## 环境

- Chrome
- Tampermonkey

## 使用

1. 安装 Chrome;
2. 安装 [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=zh-CN)；
3. 点击 Chrome 右上角扩展栏的 `添加新脚本` 按钮，复制本仓库根目录下 `HongBaoDaDaScript.js` 文件内的全部内容到新增脚本内容区域，然后保存；
4. 根据你的具体需要对脚本中的 `设置文字` 和 `总赏金` 属性进行更改，注意一定要是字符串；
5. 开启 `Tampermonkey` 和刚添加的 `HongBaoDaDaScript` 脚本；
6. 打开「红包大大」的 [“包你拼”红包创建页面](http://pc.hongbaodada.com/bao/My_redPack.html)，脚本就会根据上面设置的参数开始自动创建红包，直到手动关闭 `HongBaoDaDaScript` 脚本或停用 `Tampermonkey` 时停止；
7. 网页报错比如 `账户余额不足` 等导致无法成功创建某红包时会导致脚本循环等待。

## 计划

- [ ] 数量控制   
- [ ] 图片自动导出   

## 作者

EyreFree, eyrefree@xiangwushuo.com

## 协议

<img src='https://www.gnu.org/graphics/gplv3-127x51.png' width='127' height='51'/>

HongBaoDaDaScript 基于 GPLv3 协议进行分发和使用，更多信息参见 [协议文件](/LICENSE)。

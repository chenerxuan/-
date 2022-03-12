//导入node核心模块path
const path = require('path')

// 1 导入html-webpack-plugin插件 得到插件的构造函数
const HtmlPlugin = require('html-webpack-plugin')

// 2 new构造函数 创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    //指定复制的 原文件 的存放路径
    template: './src/index.html',
    //指定生成的文件的存放路径
    filename: './index.html',
})

// 注意 左侧花括号为解构赋值
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 使用Node.js中的导出语法，向外导出一个webpack 的配置对象
module.exports = {
    // 开发调试阶段，将devtool的值设为eval-source-map，定位到具体错误行
    // devtool: 'eval-source-map',
    // 发布时 显示正确行号但不暴露源码
    devtool: 'nosources-source-map',
    //不建议 位置和源码都暴露
    // devtool: 'source-map',

    //代表webpack运行的模式，可选值有两个development 和 production
    mode: 'development',

    // 通过entry节点指定打包的入口 output节点指定打包的出口
    entry: path.join(__dirname, './src/index1.js'),  //打包入口文件的路径
    output: {
        path: path.join(__dirname, './dist'),  //输出文件的存放路径
        filename: 'js/bundle.js'  //输出文件的名称
    },

    // 3 插件的数组 将来webpack运行时会加载并调用这些插件 通过plugins节点，使htmlPlugin插件生效
    plugins: [htmlPlugin, new CleanWebpackPlugin()],

    devServer: {
        //初次打包完成后，自动打开浏览器
        open: true,
        //实时打包所使用的主机地址 指定运行的主机地址
        host: '127.0.0.1',
        //实时打包所使用的端口号 如果端口号为80，则可以被省略
        port: 443,
    },

    //所有第三方文件模块的匹配规则
    module: {
        //文件后缀名的匹配规则 定义不同模块对应的loader
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // 处理less文件的loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // 处理图片文件的loader
            // 在配置url-loader的时候 多个参数之间用&分隔
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=470&outputPath=images' },
            // 使用babel-loader处理高级的JS语法
            // 只需转换自己的代码，排除第三方包中的JS，兼容性不需要程序员关心
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    },

    resolve: {
        alias: {
            //告诉webpack，@表示src目录
            '@': path.join(__dirname, './src/')
        }
    }
}



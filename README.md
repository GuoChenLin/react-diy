#### 记录解决的过程
##### 一、安装相关依赖
1、安装在开发环境的
  使用babel => @babel/core @babel/preset-env @babel/preset-react babel-loader
  编译sass => node-sass sass-loader
  给css加前缀 => autoprefixer postcss-loader
  默认css处理 => css-loader style-loader
  将css变成文件并且压缩 => mini-css-extract-plugin optimize-css-assets-webpack-plugin
  使用webpack => webpack webpack-cli 
  开启本地服务以及本地热更新 webpack-dev-server(全局热更新)
  使用react-hot-loader解决局部热更新
  使用tree shaking 消除没有用的代码
  将jsx代码转换成js代码 => @babel/preset-react
  处理html文件以及html里面的复用组件 => html-webpack-plugin html-loader
  处理图片 => url-loader（一般在生产环境使用） 或者 file-loader（一般在dev使用）
  使用rem px2rem等 => 

2、安装在生产环境的
  使用react => react react-dom
  使用垫片处理Object.values等ES6语法不兼容低版本浏览器问题 => @babel/polyfill
  使用axios => axios
  使用redux => redux react-redux
  使用router => react-router-dom
  处理小图标 => 
  使用svg => 
  
##### 重点难点
webpack5的正确开启热更新的办法
1、在package.json  将browslist这个配置项删除掉,还有在对应的webpack.config.dev.js必须配置target
2、js代码分割、css代码分割达到按需加载的目的
3、使用webpack-merge模块处理

##### webpack的面试考点
###### webpack与grunt、gulp的不同？
###### 与webpack类似的工具还有哪些？谈谈你为什么最终选择（或放弃）使用webpack？
###### 有哪些常见的Loader？他们是解决什么问题的？
###### 有哪些常见的Plugin？他们是解决什么问题的？
###### Loader和Plugin的不同？
###### webpack的构建流程是什么?从读取配置到输出文件这个过程尽量说全
###### 是否写过Loader和Plugin？描述一下编写loader或plugin的思路？
###### webpack的热更新是如何做到的？说明其原理？
###### 如何利用webpack来优化前端性能？（提高性能和体验）
###### 如何提高webpack的构建速度？
###### 怎么配置单页应用？怎么配置多页应用？
###### npm打包时需要注意哪些？如何利用webpack来更好的构建？
###### 如何在vue项目中实现按需加载？
# React实现服装商城项目

**走马灯**

![走马灯][1]

**首页**

![此处输入图片的描述][2]

**类目页**

![类目页][3]

**搜索页**

![搜索页][5]

**商品详情页**

![商品详情页][6]

**购物车**

![购物车][4]

## 技术栈

>  详情可参阅 `package.json`

 - React @15.6.1
 - React Route @4.1.1
 - SemanticUI
 - MockJS
 - Axios
 - Webpack
 - ES6 + Babel
 - Sass

## 快速开始

### 安装

需要安装 `NodeJS` 

在项目根目录按住 `Shift` 键鼠标右键点击，打开命令窗口

在命令窗口输入 `npm install` 安装依赖

### 运行

安装依赖完成后，在命令窗口输入 `npm start` ,稍等片刻等待服务器启动与项目打包

如无意外，默认浏览器就会自动打开 `localhost:8080` ,您立即可以看到项目效果

若浏览器没有自动弹出，则请自行手动访问

## 项目架构
### 目录结构

    .
    ├─ config/            # Webpack 配置目录
    ├─ doc/               # 文档相关目录
    ├─ src/               # 源码目录（开发都在这里进行）
    │   ├─ assets/        # 静态文件目录
    │   │   ├─ font/      # 字体文件
    │   │   ├─ img/       # 图片文件
    │   │   ├─ style/     # 样式文件
    │   ├─ components/    # 组件（COMPONENT）
    │   │   ├─ carousel/  # 走马灯组件
    │   │   ├─ cart/      # 购物车组件
    │   │   ├─ footer/    # 页脚组件
    │   │   ├─ header/    # 页头组件
    │   │   ├─ home/      # 主页组件
    │   │   ├─ main/      # 类目页组件
    │   │   ├─ nav/       # 导航菜单组件
    │   │   ├─ popup/     # 提示框组件
    │   │   ├─ product/   # 详情页组件
    │   │   ├─ scroll/    # 鼠标滑动组件
    │   │   ├─ user/      # 用户信息组件
    │   ├─ data/          # 数据目录
    │   ├─ router/        # 路由（ROUTER）
    │   ├─ utils/         # 工具库（UTIL）
    │   ├─ app.js         # 启动文件
    │   ├─ index.html     # 静态基页
    ├── .babelrc          # Babel 转码配置
    ├── debug.log         # 操作日志文件
    ├── package.json      # npm 配置

### 说明

 - 利用 Webpack 构建工具搭建项目开发环境
 - 利用 React + Babel 开发基于ES6模块化的JavaScript应用
 - 利用 Semantic-ui-React 界面开发框架搭建语义化的架构
 - 利用 Sass 预编译器 编写页面样式
 - 利用 React-Route 实现应用页面的跳转路由
 - 利用 MockJS 随机生成应用数据，模拟前后端交互情景
 - 利用 Axios HTTP库完成数据请求
 - 利用 Ant Motion 实现首页轮播图以及各种动效设计
 - 利用 原生JS中 DOM、BOM  实现顶部工具栏滚动固定以及回到顶部功能

### 技术难题

 1. 用flex布局实现首页热卖品栏目、分类页商品展示栏目、搜索页展示栏目的样式一致，难度不高，但是比较复杂，要顾及到特定的场景
 2. 由route管理的兄弟组件之间的通信（利用route的children属性加载组件）
 3. 跨祖先级的组件间的数据交互（例如详情页添加商品到购物车与购物车页面的商品展示等）
 4. 利用mock随机生成大量数据，并在需要进行数据交互的组件内利用axios进行数据交互，并通过props、state等进行父子组件间数据通信


  [1]: http://wx2.sinaimg.cn/mw690/c0096cf9ly1fhyehc4l5gj214u0lo1kx.jpg
  [2]: http://wx2.sinaimg.cn/mw690/c0096cf9ly1fhyehs8onwj214u0lowlr.jpg
  [3]: http://wx2.sinaimg.cn/mw690/c0096cf9ly1fhyeho2ooyj214u0lomzz.jpg
  [4]: http://wx3.sinaimg.cn/mw690/c0096cf9ly1fhyehkdi8aj214u0lo75w.jpg
  [5]: http://wx2.sinaimg.cn/mw690/c0096cf9ly1fhyeimp3b9j214u0lon0q.jpg
  [6]: http://wx3.sinaimg.cn/mw690/c0096cf9ly1fhyehw4glqj214u0lotc5.jpg
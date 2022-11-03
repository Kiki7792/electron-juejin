## src/renderer/App.vue

是渲染进程的入口组件，这个组件内只有一个用于导航到不同的窗口。

## src/renderer/main.ts

是渲染进程的入口脚本。

## src/renderer/assets

放置字体图标、公共样式、图片等文件。

## src/renderer/Component

放置公共组件，比如标题栏组件、菜单栏组件等

## src/renderer/store

存放Vue项目的数据状态组件，用于在不同的 Vue 组件中共享数据。

## src/renderer/router

存放Vue项目的路由。

## src/renderer/Window

存放不同窗口的入口组件，这些组件是通过vue-router导航的，这个目录下的子目录存放对应窗口的子组件。


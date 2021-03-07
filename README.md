
- [test](#test)
  - [Project setup](#project-setup)
    - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
    - [Compiles and minifies for production](#compiles-and-minifies-for-production)
    - [Lints and fixes files](#lints-and-fixes-files)
    - [Customize configuration](#customize-configuration)
  - [Component](#component)
  - [SPA(Single Page Application)](#spasingle-page-application)
- [Project Initiating Guide](#project-initiating-guide)
  - [Install Vue CLI](#install-vue-cli)
  - [Pick Preset](#pick-preset)
  - [Module Install](#module-install)
  - [Run](#run)
  - [Install Vue CLI](#install-vue-cli-1)
  - [Create Project](#create-project)
  - [Pick Preset](#pick-preset-1)
- [VSCode Extension](#vscode-extension)
- [Install below extensions](#install-below-extensions)
- [Run Vue Server](#run-vue-server)
  - [Run](#run-1)
- [Additional Module Install](#additional-module-install)
  - [Vue router](#vue-router)
  - [Install](#install)
  - [Create Component Folder](#create-component-folder)
  - [Install Bootstrap For Vue](#install-bootstrap-for-vue)
- [With npm](#with-npm)
  - [Add Code below To Main.js](#add-code-below-to-mainjs)
  - [Template](#template)
  - [Script](#script)
- [Vue Lifecycle Diagram](#vue-lifecycle-diagram)

<br/><br/><br/>

# test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<br/>
<br/>
<br/>





~~~
~~~
<br/>

## Component
~~~
- Component 기반의 SPA(Single Page Application)을 구축할 수 있게 해주는 프레임워크
- 웹을 구성하는 로고, 메뉴바, 버튼, Modal창 등 웹 페이지 내의 다양한 UI요소
- 재사용 가능하도록 구조화 한 것
~~~
<br/>

## SPA(Single Page Application)
~~~
1. 단일 페이지 어플리케이션
2. 하나의 페이지 안에서 필요한 영역 부분만 로딩되는 형태
3. 빠른 페이지 변환
4. 적은 트래픽 양
~~~
<br/><br/>

# Project Initiating Guide
~~~
## Install Vue CLI
npm install -g @vue/cli
vue create test

## Pick Preset
Choose basic preset by press Enter Default

## Module Install
npm install vue bootstrap bootstrap-vue
npm install vue-router --save

## Run
cd test
npm run serve
~~~

## Install Vue CLI
~~~
npm install -g @vue/cli
~~~


## Create Project
~~~
vue create test
~~~

## Pick Preset
> Choose basic preset by press Enter Default
~~~
Please pick a preset
~~~


# VSCode Extension
~~~
# Install below extensions
sdras.vue-vscode-snippets
~~~


# Run Vue Server

## Run
~~~
cd test
npm run serve
~~~
![](README/_img/Image%203.png)
<br/>

# Additional Module Install

## Vue router
> Vue 라우팅 기능을 구현할 수 있게 지원해주는 공식 Library
~~~
router In Vue : SPA로드 이후 특정 부분만 화면을 전환시킬때 사용되는 기능
~~~

## Install
~~~
npm install vue-router --save
~~~

![](README/_img/Image%205.png)


<br/>

## Create Component Folder
![](README/_img/Image%206.png)
<br/>

## Install Bootstrap For Vue
> BootStrap-vue.org
~~~
# With npm
npm install vue bootstrap bootstrap-vue
~~~

<br/>

## Add Code below To Main.js
```
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
```

![](_README/_img/_Image%207.png)


## Template
![](README/_img/Image%208.png)

## Script
![](README/_img/Image%209.png)

# Vue Lifecycle Diagram
![](README/_img/lifecycle.png)
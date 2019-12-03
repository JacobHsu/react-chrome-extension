# react-chrome-extension

[create-a-new-react-app](https://zh-hant.reactjs.org/docs/create-a-new-react-app.html)

`npx create-react-app react-ext`

## Sample Extensions

developer.chrome [Sample Extensions](https://developer.chrome.com/extensions/samples)  

### My Bookmarks

`npx create-react-app react-bookmarks`
`cd react-bookmarks`
`yarn start`

### Page Redder

```js
  "browser_action": {
      "default_title": "Hello World",
      "default_icon": "icon32.png",
      "default_popup": "index.html"  有它背景不會生效 "background.js"
  },
```

satendra02/[react-chrome-extension](https://github.com/satendra02/react-chrome-extension)

### A browser action which changes its icon when clicked

chrome.runtime.onInstalled.addListener background.js 才生效 pop.js 無法

### A browser action with a popup that changes the page color

`<div id="red">red</div>` 放App.js

### BrowsingData API: Basics

browsingData.remove

### Extensions

Cookie API Test Extension  
Notification Demo  

## npm 

`react-cookie`  

# note 

使用PropTypes 进行类型检查– React 中文文档v16.6.3

Component `import React, { Component } from 'react';`


Refused to execute inline script because it violates the following Content Security Policy directive: "script-src 'self'". Either the 'unsafe-inline' keyword, a hash ('sha256-P/KdvuJkHQwRCjP3/zvhW4AjD2Jo5r7K5Ra5LETfSAk='), or a nonce ('nonce-...') is required to enable inline execution.

Refused to execute inline script because it violates the following Content Security Policy directive: "script-src 'self' 'sha256-GgRxrVOKNdB4LrRsVPDSbzvfdV4UqglmviH9GoBJ5jk='". Either the 'unsafe-inline' keyword, a hash ('sha256-P/KdvuJkHQwRCjP3/zvhW4AjD2Jo5r7K5Ra5LETfSAk='), or a nonce ('nonce-...') is required to enable inline execution.

把 key 加進 content_security_policy  
```js
{
  "name": "Chrome Todo",
    "version": "1.0",
    "manifest_version": 2,
    "browser_action": {
        "default_popup": "index.html"
    },
    "content_security_policy": "script-src 'self' 'sha256-P/KdvuJkHQwRCjP3/zvhW4AjD2Jo5r7K5Ra5LETfSAk='; object-src 'self'"
}
```

# :octocat: Tool

[Material-UI](https://material-ui.com/zh): A popular React UI framework  
`yarn add @material-ui/core`  

## Samples

[手写chrome extension](https://juejin.im/post/5d3c4dc0f265da1bd2613562)  

## Referneces

[How to build a Chrome Extension using your React App](https://medium.com/@rajithaeye/how-to-build-a-chrome-extension-using-your-reactjs-app-3655dc08fd16)  
[Quickstart a Chrome Extension with create-react-app](https://www.lsenta.io/posts/chrome-extension-react-quickstart/)  

[Web 安全之 CSP（Content Security Policy）](https://kknews.cc/code/abx9ya6.html)  
[Complete list of github markdown emoji markup](https://gist.github.com/rxaviers/7360908)  

[MetaMask Browser Extension](https://github.com/MetaMask/metamask-extension)
[Chrome Extension 開發與實作 30-正式發佈擴充功能](https://ithelp.ithome.com.tw/articles/10188969)  
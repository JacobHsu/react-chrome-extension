# react-chrome-extension

[create-a-new-react-app](https://zh-hant.reactjs.org/docs/create-a-new-react-app.html)

`npx create-react-app react-ext`

# npm 

`react-cookie`  

# note 

使用PropTypes 进行类型检查– React 中文文档v16.6.3

Component `import React, { Component } from 'react';`


Refused to execute inline script because it violates the following Content Security Policy directive: "script-src 'self'". Either the 'unsafe-inline' keyword, a hash ('sha256-P/KdvuJkHQwRCjP3/zvhW4AjD2Jo5r7K5Ra5LETfSAk='), or a nonce ('nonce-...') is required to enable inline execution.

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

# Referneces

[How to build a Chrome Extension using your React App](https://medium.com/@rajithaeye/how-to-build-a-chrome-extension-using-your-reactjs-app-3655dc08fd16)  
[Quickstart a Chrome Extension with create-react-app](https://www.lsenta.io/posts/chrome-extension-react-quickstart/)  

[Web 安全之 CSP（Content Security Policy）](https://kknews.cc/code/abx9ya6.html)  
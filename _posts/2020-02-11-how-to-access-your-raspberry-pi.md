---
layout: post
title: How to access your raspberry pi
image: /img/posts/raspberry.webp
---

There are many of us who  would have spare raspberry pi and would like to access them remotely. If you are using sysb.AI then all you need to do is below. Once you run this command then you will get a TCP host and port which can be accessed as `ssh <TCP Host> -p <TCP Port>` and that it. Now you can access your Raspberry pi remotely

```
ssh -R 0:localhost:22 demo@sysb.ai
```

Please note TCP application is currently in development mode and would be released soon. To get updated information please join our [Google group](https://groups.google.com/forum/#!forum/sysb_ai) 
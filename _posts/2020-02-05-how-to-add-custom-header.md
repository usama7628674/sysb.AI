---
layout: post
title: How to add Host header?
image: /img/portfolio/3
---

In order to run our local web application properly over internet we may require custom `Host:` header to our local web server. We only need to put below in our ssh config file:
1. `export SYSB_SUBDOMAIN=my-awesome-subdomain`
1. ```
Host sysb.ai
  SendEnv SYSB_HOST_HEADER=my_cool_web_app.com
```

then run `ssh -R 0:localhost:8080 demo@sysb.ai` to get the custom `Host:` header.

Alternatively, we can use ssh's command line flag as mentioned below to get custom `Host:` header
1. `export SYSB_SUBDOMAIN=my-awesome-subdomain`
1. `ssh -o SendEnv=SYSB_HOST_HEADER  -R 0:localhost:8080 demo@sysb.ai`
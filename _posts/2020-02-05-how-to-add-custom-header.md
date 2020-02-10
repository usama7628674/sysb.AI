---
layout: post
title: How to add Host header?
image: /img/portfolio/3
---

In order to run our local web application properly over internet we may require custom `Host:` header to our local web server. We only need to put below in our ssh config file:
```
Host sysb.ai
  SetEnv SYSB_HOST_HEADER=my_cool_web_app.com
```
then run `ssh -R 0:localhost:8080 demo@sysb.ai` to get the custom `Host:` header. Alternatively, we can user ssh's command line flag and execute `ssh -o 'SetEnv SYSB_SUBDOMAIN=my_cool_web_app.com' -R 0:localhost:8080 demo@sysb.ai` to get custom `Host:` header.

Though if your ssh client does not support `SetEnv` directive then we can use `SendEnv` directive. First we need to set a environment variable then send it across using `SendEnv` directive. Here is the steps on how to get it done
1. Run below on terminal
1. `export SYSB_SUBDOMAIN=my-awesome-subdomain SYSB_HOST_HEADER=my_cool_web_app.com`
1. Then run `ssh -o SendEnv=SYSB_HOST_HEADER  -R 0:localhost:8080 demo@sysb.ai` to get the custom `Host:` header
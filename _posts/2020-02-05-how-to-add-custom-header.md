---
layout: post
title: How to add Host header?
image: /img/portfolio/3
---

In order to run our local web application properly over internet we may require to send custom `Host:` header to our local web server. By default we send `localhost` as the `Host:` header to local web application. Though, it can be chanaged and do so we need to perform the below steps
1.  We need to export the environment variable and we run the below command on terminal:
```
export SYSB_HOST_HEADER=my_cool_web_app.com
```
1. Then we need to have below entry in `~/.ssh/config`
```
Host sysb.ai
  SendEnv SYSB_HOST_HEADER
```
1. Now all we need to do is to execute below command to get the custom `Host:` header
```
ssh -R 0:localhost:8080 demo@sysb.ai
```

Alternatively, if we prefer ssh's command line flag of `ssh` over config file then we can also get it done as below:
```
export SYSB_HOST_HEADER=my-awesome-subdomain
ssh -o SendEnv=SYSB_HOST_HEADER -R 0:localhost:8080 demo@sysb.ai
```

If you want to send both SYSB_SUBDOMAIN and SYSB_HOST_HEADER then that be done using below steps:
1.
```
export SYSB_SUBDOMAIN=my-awesome-subdomain SYSB_HOST_HEADER=my_cool_web_app.com
```
1.
```
Host sysb.ai
  SendEnv SYSB_SUBDOMAIN SYSB_HOST_HEADER
```
1.
```
ssh -R 0:localhost:8080 demo@sysb.ai
```

Alternatively, if we prefer ssh's command line flag of `ssh` over config file then we can also get it done as below:
- 
```
export SYSB_SUBDOMAIN=my-awesome-subdomain SYSB_HOST_HEADER=my_cool_web_app.com
ssh -o SendEnv=SYSB_SUBDOMAIN SendEnv=SYSB_HOST_HEADER -R 0:localhost:8080 demo@sysb.ai
```
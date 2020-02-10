---
layout: post
title: How can I get static subdomain of sysb.ai?
image: /img/portfolio/2
---

![](/img/portfolio/2.jpg)
## How can I get static subdomain of sysb.ai?
We need to send `SYSB_SUBDOMAIN` environemnt variable via `ssh` to get the static subdomain of sysb.AI.

1. We need to export the environment variable like below:
```
export SYSB_SUBDOMAIN=my-awesome-subdomain
```
1. Then we need to have below entry in `~/.ssh/config`
```
Host sysb.ai
    SendEnv SYSB_SUBDOMAIN
```
1. Now all we need to execute below command to get the custome domain
```
ssh -R 0:localhost:8080 demo@sysb.ai
```

Alternatively, if we prefer ssh's command line flag of `ssh` over config file then we can also get it done as below:
```
export SYSB_SUBDOMAIN=my-awesome-subdomain
ssh -o SendEnv=SYSB_SUBDOMAIN -R 0:localhost:8080 demo@sysb.ai
```

<!-- # Using SetEnv
We may use below config in our `~/.ssh/config` and put value of SYSB_SUBDOMAIN and SYSB_HOST_HEADER accordingly
```
Host sysb.ai
    SetEnv SYSB_SUBDOMAIN=my-awesome-subdomain
```

Then all we need to do is to run the following:
```
ssh -R 0:127.0.0.1:8080 demo@sysb.ai 
```
It will give us requested static subdomain like `https://my-awesome-subdomain.us.sysb.ai`. Alternatively, we can also use the command line flags of ssh to get it done, like below
```
ssh -o 'SetEnv SYSB_SUBDOMAIN=my-awesome-subdomain' -R 0:localhost:8080 demo@sysb.ai
``` -->
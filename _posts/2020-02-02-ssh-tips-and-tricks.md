---
layout: post
title: SSH Tips and Tricks
---
<!-- URLS: https://www.sysb.ai/blog/ssh-tips-and-tricks.html -->
## How can I get static subdomain of sysb.ai?
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
```

- I was informed that some ssh client do not support `SetEnv` directive so in that case we can use `SendEnv` directive to achieve the same. Before we attemtpt to send these environemnt variable via `ssh` we need to set it. We can export the environment variable like below:
```
export SYSB_SUBDOMAIN=my-awesome-subdomain
```
Then we need to have below entry in `~/.ssh/config`
```
Host sysb.ai
    SendEnv SYSB_SUBDOMAIN
```
Now all we need to execute the command `ssh -R 0:localhost:8080 demo@sysb.ai` to get the custome domain

Alternatively, if we prefer ssh's command line flag over config file then we can also get it done as below:
```
ssh -o SendEnv=SYSB_SUBDOMAIN=my-awesome-subdomain -o SendEnv=SYSB_HOST_HEADER -R 0:localhost:8080 demo@sysb.ai
```
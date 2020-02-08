---
layout: post
title: SSH Tips and Tricks
---
<!-- URLS: https://www.sysb.ai/blog/ssh-tips-and-tricks.html -->
&nbsp;
&nbsp;
1. We can also define ssh port number before `@` like below
    1. like this `ssh -R 0:localhost:8080 demo:22@sysb.ai`
1. Evaluating your SSH configuration
    1. Use the `-G` option to ssh. It tells ssh to parse all the configurations for the target host, print out the configuration it is going to use, and immediately exit without connecting.
    1. e.g. `ssh -G -R 0:localhost:8118 demo@sysb.ai`

1. There is a `ssh` prmompt
    1. When logged in as SSH connection then just press `~` then `C` and we will get `ssh>` prompt
    1. `~?` displays a list of all available escape characters
    1. Also we can use `help` to check for the options
```
ssh> help
Commands:
      -L[bind_address:]port:host:hostport    Request local forward
      -R[bind_address:]port:host:hostport    Request remote forward
      -D[bind_address:]port                  Request dynamic forward
      -KL[bind_address:]port                 Cancel local forward
      -KR[bind_address:]port                 Cancel remote forward
      -KD[bind_address:]port                 Cancel dynamic forward
```

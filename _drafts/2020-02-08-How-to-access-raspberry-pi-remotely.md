---
layout: post
title: How to access Raspberry pi remotely
image: /img/portfolio/4
---

Most of us have the small credit card size Raspberry Pi sitting somewhere but in terms of functionality it is not less than a dekstop. We may run a web site for a SMB on it without any issue. Or if you are not at home and due to some reason if you want to access it then it is a pain to do that. As a residential consumer of ISP we do not get static IP and it keeps on changing.

sysb.AI provides a solution to that and all you require is ssh client on your Raspberry Pi which is preinstalled. You can run the below command in your box 

```
ssh -R 0:localhost:22 demo@sysb.ai
```

And it will give 1 TCP, 1 HTTP and 1 HTTPS endpoint. We can use TCP endpoint ( e.g. `tcp://us.sysb.ai:15240` ) to ssh to Raspberry pi remotely.

```
ssh us.sysb.ai -p 15240
```

After that you need to provide credential of Raspberry pi to authenticate

Please note, since we wanted to access `localhost:22` which is TCP application not HTTP so HTTP/HTTPS endpoint will not work as expected. We only need to use TCP endpoint ( e.g. `tcp://us.sysb.ai:15240` )

<!-- We can also use `autossh` to for automatic access which is persistent across the reboot though we need to ensure static subdomain is configured
e.g.
```
/usr/local/bin/autossh -f -M 0 -R 0:localhost:22 demo@sysb.ai
``` -->
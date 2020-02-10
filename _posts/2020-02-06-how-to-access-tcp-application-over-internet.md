---
layout: post
title: How to access my TCP application over internet?
image: /img/portfolio/4
---

## How to access my TCP application over internet?
It is quite possible that you may want to expose some other TCP based application over internet and you just need an endpoint which is accessible publicly. Like you probably just want to have your IoT device like Raspberry PI sshable. It is absolutely simple to do that. All you need to do the following

1. Open the terminal
1. Run the following command
    1. `ssh -R 0:localhost:22 demo@sysb.ai`
1. Above command will give a dynamic URL which can be accessed publicly to ssh your Raspberry PI. Please keep special attention to dynamic port number. You need both public FQDN and port number to access your TCP application like following
    1. After running the above command you may get one of the TCP port forwarding request like `tcp://sysb.ai:28559` and now you can access it as `ssh sysb.ai -p 28559`
---
layout: post
title: What to do for HTTP 502
image: /img/portfolio/6
---

Generally speaking HTTP status code 502 means `Bad Gateway` which simply meant that the application is in the localhost is not responding. When we do remote port forwarding like `0:localhost:8080` then it sysb looks at `0:` and allocate a available remote port and map it to your laptop/desktop's `localhost:8080`.

Once we have next avaialble remote port available due to `0:` on the sysb's side then we again map this on the nginx so that you get access to http and https service.

If you are getting a HTTP 502 status then it means your `localhost:8080` is not responding on port `8080` locally. You need to verify the health of `localhost:8080` we can do following to alleviate the issue.

1. On your localhost verify if local port 8080 is listing while running any of the below commands
    1. `nc -v -z localhost 8080`
    1. `telnet localhost 8080`
    1. `curl localhost:8080`

1. Perhaps, it is possible that it is responding to above TCP check and your local web application is looking for a `Host: ` header in order to function it properly. We do have a functionality to send custom HTTP header while establishing the remote port forwarding. Have a look at "[Place Holder]"
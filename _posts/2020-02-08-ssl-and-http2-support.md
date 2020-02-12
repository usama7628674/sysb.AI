---
layout: post
title: SSL and HTTP2 support
image: /img/portfolio/6
---

Yes, by default it support both secure HTTP and next gen HTTP2 protocol. When we provide HTTPS support then we have provisioned the wild card certificate on the Load balancer and even on the backend we have SSL cert provisioned. So in a gist, end-to-end data flow is secured.

### SSL Support
WIth every port forwarding we provide a HTTP and HTTPS endpoint and either of them can be used to access localhost web application

### HTTP2 Support
We provide HTTP2 functionality which terminates at our external Load balancer
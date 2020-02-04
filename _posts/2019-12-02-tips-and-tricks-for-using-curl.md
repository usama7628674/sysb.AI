---
layout: post
title: Tips and Tricks for using cURL
---

Few tips and tricks of using cURL

- Query using specific TLS protocol
```
curl --tlsv1.0  -v https://www.systembee.io
curl --tlsv1.1  -v https://www.systembee.io
curl --tlsv1.2  -v https://www.systembee.io
```

- Key based authentication
```
curl --cert userbob.pem --key userBob-key.pem  --cacert /path/to/ca.pem  https://k8sServer:6443/api/v1/pods
```
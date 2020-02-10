---
layout: post
title: SSH Tips and Tricks
image: /img/portfolio/5
---

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
1. Get remote ssh server's all hostkey
```
$ssh-keyscan sysb.ai
# sysb.ai:22 SSH-2.0-OpenSSH_7.8 sysb-2020
sysb.ai ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAvJFEhuxfFRxfFoB2CFbEQCBmil7MCZhrAouZfoC9d7
# sysb.ai:22 SSH-2.0-OpenSSH_7.8 sysb-2020
sysb.ai ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC9c7WjXUSsYS3ZvjoLy0RSTLTeq8zt7NOevs/0H28mkOZUffYvsePJPbQBQ2wQVQYPvQ6hcexnMWj9kO3Ns+xppC0GQxwWA4TU+L79mihmIAnm0qVuY8Lr47tS9lcBBrvUlsbGGD4iCvrr9p7IJbJYcsStDyhZtvX+nv4tjfKjvYrITRA1jLDCdekCHQrALtc/weM14Sl4D8bHSRd9KrJ+EEcpWFfYdPwL91sJO8NDnSajYJefpqeguQaoqYt5w1rWBlXfpjTuBvulgXXmyFT4r0V7MFdIi5O3WUmgpqjY+7lwhd9PtxK0p4Dkr1pZJTSgvRVSwOaxmZN09Qwzma1F
# sysb.ai:22 SSH-2.0-OpenSSH_7.8 sysb-2020
sysb.ai ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBGictWp/32RZ2qsaBP2uc6xym0sH/73/ZedmjAvkiHslYllFIO8S9NCkuOYyOTDht9Zai4ZX3N6tOGi3AkC4Bk8=
```
1. How to find which alog and encryption method is supported by remote SSH server
    1. We can use `nmap --script ssh2-enum-algos -Pn -p 22 sysb.ai` command, which gives output as below:
```
$nmap --script ssh2-enum-algos -Pn -p 22 sysb.ai
Starting Nmap 7.70 ( https://nmap.org ) at 2020-02-03 18:29 PST
Nmap scan report for sysb.ai (76.223.67.88)
Host is up (0.017s latency).
Other addresses for sysb.ai (not scanned): 13.248.218.101
rDNS record for 76.223.67.88: af5f474b824bff811.awsglobalaccelerator.com

PORT   STATE SERVICE
22/tcp open  ssh
| ssh2-enum-algos: 
|   kex_algorithms: (10)
|       curve25519-sha256
|       curve25519-sha256@libssh.org
|       ecdh-sha2-nistp256
|       ecdh-sha2-nistp384
|       ecdh-sha2-nistp521
|       diffie-hellman-group-exchange-sha256
|       diffie-hellman-group16-sha512
|       diffie-hellman-group18-sha512
|       diffie-hellman-group14-sha256
|       diffie-hellman-group14-sha1
|   server_host_key_algorithms: (5)
|       rsa-sha2-512
|       rsa-sha2-256
|       ssh-rsa
|       ecdsa-sha2-nistp256
|       ssh-ed25519
|   encryption_algorithms: (9)
|       chacha20-poly1305@openssh.com
|       aes128-ctr
|       aes192-ctr
|       aes256-ctr
|       aes128-gcm@openssh.com
|       aes256-gcm@openssh.com
|       aes128-cbc
|       aes192-cbc
|       aes256-cbc
|   mac_algorithms: (10)
|       umac-64-etm@openssh.com
|       umac-128-etm@openssh.com
|       hmac-sha2-256-etm@openssh.com
|       hmac-sha2-512-etm@openssh.com
|       hmac-sha1-etm@openssh.com
|       umac-64@openssh.com
|       umac-128@openssh.com
|       hmac-sha2-256
|       hmac-sha2-512
|       hmac-sha1
|   compression_algorithms: (2)
|       none
|_      zlib@openssh.com

Nmap done: 1 IP address (1 host up) scanned in 1.15 seconds
```
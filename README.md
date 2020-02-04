# sysb.AI | access your localhost
Front page of [https://www.sysb.ai](https://www.sysb.ai)

## How to access my local web application over internet?

If you have a web application running perfectly in your laptop and now you have a need to have a functionality where you want it to share with someone over internet. Assuming your web application is accessible locally at `http://localhost:8080` then all you need to do is the following

1. Open the terminal
1. Run the following command
    1. `ssh -R 0:localhost:8080 demo@sysb.ai`
    1. Here `-R` is the remote port forwarding flag
    1. `0:` tells to dynamically allocate a remote port in sysb.ai which will have connection to `localhost:8080` locally
        1. There are many folks who use sysb.ai and to ensure that there is no conflict on the assigned remote port then we should get a request for a dynamic port.
        1. Irrespective of any dynamic assigned port on the remote server, You would be able to access your web application over HTTP and HTTPS on port 80 and 443 respectively
    1. `demo` the free user account which allows following entitlements
        1. 1 free tunnel
        1. 1 TCP protocol support
        1. Dynamic SUBDOMAIN to sysb.ai
    1. `sysb.ai` is our intelligent infrastructure which help you to access your localhost
     
1. Above command will give you a dynamic HTTP and HTTPS which you can use to access your local web application over internet

## How can I get static subdomain of sysb.ai?

You can use below config in your `~/.ssh/config` and put value of SYSB_SUBDOMAIN and SYSB_HOST_HEADER accordingly
```bash
Host sysb.ai
    SetEnv SYSB_SUBDOMAIN=my-awesome-subdomain SYSB_HOST_HEADER=my-header
```
also you can use command line flags to get it done, like below
```
ssh -o 'SetEnv SYSB_SUBDOMAIN=my-awesome-subdomain' -R 0:localhost:8080 demo@sysb.ai
```

## How to add `Host:`  header?

It is possible that while using the sysb.AI platform you can customize on which host header should come to your localhost web application. You only need to do the followings
1.`ssh -o 'SetEnv SYSB_HOST_HEADER=my_cool_web_app.com' -R 0:localhost:8080 demo@sysb.ai` 
Or we can do using `~/.ssh/config` file

```
Host sysb.ai
  SetEnv SYSB_HOST_HEADER=my_cool_web_app.com
  ServerAliveInterval 300
  ServerAliveCountMax 3
  ```
Here we also recommened to put the directives like `ServerAliveInterval` and `ServerAliveCountMax` which will protect the idle session from getting disconnected

## How to access my TCP application over internet?

It is quite possible that you may want to expose some other TCP based application over internet and you just need an endpoint which is accessible publicly. Like you probably just want to have your IoT device like Raspberry PI sshable. It is absolutely simple to do that. All you need to do the following

1. Open the terminal
1. Run the following command
    1. `ssh -R 0:localhost:22 demo@sysb.ai`
1. Above command will give a dynamic URL which can be accessed publicly to ssh your Raspberry PI. Please keep special attention to dynamic port number. You need both public FQDN and port number to access your TCP application like following
    1. After running the above command you may get one of the TCP port forwarding request like `tcp://sysb.ai:28559` and now you can access it as `ssh sysb.ai -p 28559`

## Does it support HTTP2 or HTTPS protocol?

Yes, by default it support secure HTTP and next gen HTTP2 protocol.

## SSH Tips and Tricks
1. Evaluating your SSH configuration
    1. Use the `-G` option to ssh. It tells ssh to parse all the configurations for the target host, print out the configuration it is going to use, and immediatly exit without connecting.
    1. e.g. `ssh -G -R 0:localhost:8118 demo@sysb.ai`
1. How find which alog and encryption method is supported by remote SSH server
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

## Here is the list of frequently asked questions

1. How can we report the issue or request for your feature
    1. You can raise a github issue at https://github.com/systembee/sysb.AI/issues to report a issue or request for a feature.
1. I am wondering if there a mailing list which we can join to discuss new features and enhancement?
    1. Yes you can join our [Google group](https://groups.google.com/forum/#!forum/sysb_ai) mailing list to discuss new feature and enhancement
1. Why I am not able to access old URL given by sysb.AI
    1. All the subdomain provided while tunneling is ephermeral which is active till your particular tunneling is active
1. How to stop the port forwarding
    1. If you are using terminal then `ctrl+c` is your friend to stop the port forwarding
1. My internet is damn slow and I am getting frequent disconnection
    1. We advice you to use `-C` in your ssh client flags as it will compress the data being used in the connection. Though, it will only slow down things on fast networks. So I advice to use only when network is damn slow. Syntax is as follows:
        1. `ssh -CR 0:127.0.0.1:8080 demo@sysb.ai`
        1. Keep notice on `-C` flag
1. What kind of environment variables are supported?
Currenly below two environemtn variable is supported though this feature is in development
    1. SYSB_HOST_HEADER
    1. SYSB_SUBDOMAIN
We can use this feature like below:
    1. `export SYSB_HOST_HEADER=demo.sysb.ai`
    1. `export SYSB_SUBDOMAIN=demo.sysb.ai`
        1. `SYSB_SUBDOMAIN` is in development
    1. `ssh -o SendEnv=SYSB_HOST_HEADER -R 0:127.0.0.1:8080 demo@sysb.ai `
1. Does it support windows
    1. Yes, you can use `putty` like ssh client which has option to do remote port forwarding
1. How do we proniciate sysb.ai?
    1. it is 'sisbi dot ai'

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

## How to add `Host:`  header?

It is possible that while using the sysb.AI platform you can customize on which host header should come to your localhost web application. You only need to do the followings
1. `export SYSB_HOST_HEADER=my_cool_web_app.com`
1. `ssh -o SendEnv=SYSB_HOST_HEADER -R 0:127.0.0.1:8080 demo@sysb.ai`
Or we can do using `~/.ssh/config` file
```Host sysb.ai
  SetEnv SYSB_HOST_HEADER=my_cool_web_app
  SendEnv SYSB_HOST_HEADER```

## How to access my TCP application over internet?

It is quite possible that you may want to expose some other TCP based application over internet and you just need an endpoint which is accessible publicly. Like you probably just want to have your IoT device like Raspberry PI sshable. It is absolutely simple to do that. All you need to do the following

1. Open the terminal
1. Run the following command
    1. `ssh -R 0:localhost:22 demo@sysb.ai`
1. Above command will give a dynamic URL which can be accessed publicly to ssh your Raspberry PI. Please keep special attention to dynamic port number. You need both public FQDN and port number to access your TCP application like following
    1. After running the above command you may get one of the TCP port forwarding request like `tcp://sysb.ai:28559` and now you can access it as `ssh sysb.ai -p 28559`

## Does it support HTTP2 or HTTPS protocol?

Yes, by default it support secure HTTP and next gen HTTP2 protocol.

## What is tunneling by the way?

In simple term a connection with a connection or a private connection in the public internet.

## SSH Tips and Tricks

Since we can use native SSH clients preinstalled in Linux, Unix and Mac OS so most of the options of the `ssh` like compression and background processing is supported.

## Here is the list of frequently asked questions

1. How can we report the issue or request for your feature
You can raise a github issue at https://github.com/systembee/sysb.AI/issues to report a issue or request for a feature
1. How can I get static subdomain of sysb.ai?
This feature is in development and yet to be released
1. Why I am not able to access old URL given by sysb.AI
All the subdomain provided while tunneling is ephermeral which is active till your particular tunneling is active
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
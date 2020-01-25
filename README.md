# Welcome
Front page of [https://www.sysb.ai](https://www.sysb.ai)

## Access your localhost

## How to access my local web application over internet?

If we have a web application which needs to be accessed over internet then following needs to be done. Assuming your web application is accessible at `http://localhost:8080` then all you need to do following

1. Open the terminal
1. Run the following command
    1. `ssh -R 0:localhost:8080 demo@sysb.ai`
1. Above command will give you a dynamic HTTP and HTTPS which you can use to access your local web application over internet

## How to access my TCP application over internet?

It is quite possible that you may want to expose some other TCP based application over internet and you just need an endpoint which is accessible publicly. Like you probably just want to have your IoT device like Raspberry PI sshable. It is absolutely simple to do that. All you need to do the following

1. Open the terminal
1. Run the following command
    1. `ssh -R 0:localhost:22 demo@sysb.ai`
1. Above command will give a dynamic URL which can be accessed publicly to ssh your Raspberry PI. Please keep special attention to dynamic port number. You need both public FQDN and port number to access your TCP application 


## Here is the list of frequently asked questions

1. How can we report the issue or request for your feature
1. How can I provide customized `Host:` header while doing port forwarding
1. How can I get static subdomain of sysb.ai?
1. Does it support Secure HTTP ( HTTPS ) protocol?
1. Does it support HTTP2 protocol?
1. Does it support TCP port forwarding?
1. Why I am not able to access old URL given by sysb.AI
1. What kind of environment variables are supported?
    1. SYSB_HOST_HEADER
    1. SYSB_SUBDOMAIN
1. How do we proniciate sysb.ai?
    1. it is 'sisbi dot ai'

# Check IP Akamai EdgeWorkers

- [isss802.link/ip](https://isss802.link/ip)

## get client ip

Variables need to be set in Property

![1](https://user-images.githubusercontent.com/4577575/158518041-354ee1b6-b75e-4e1f-8146-92a10ea5cfe1.png)
![2](https://user-images.githubusercontent.com/4577575/158518085-674dd50b-4dfb-4705-9b5b-869e1d4de77d.png)

Variable Description
https://techdocs.akamai.com/property-mgr/reference/built-in-system-variables

## how to sandbox

```
# compression
tar -czf check_ip.tgz README.md bundle.json main.js

# create sandbox
akamai sandbox create --hostname isss802.link --name sandbox_for_isss802-link
akamai sandbox ls

# get edgeWorkerId
akamai edgeworkers list-ids | grep hisat

# add edgeworker file
akamai sandbox add-edgeworker [edgeWorkerId] check_ip.tgz

# start sandbox
akamai sandbox start

# test
curl -H "Host:isss802.link" "http://127.0.0.1:9550/ip" --verbose
```

using Akamai EdgeWorkers

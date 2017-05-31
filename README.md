# kubernetes-socket-node


Create a redis Pod on kubernetes
```bash
kubectl create -f pods/redis.yaml
```
Setup host and port on `app/server.js`
```js
const redisHost = "host";
const redisPort = "port";
```
Build your own image 
```bash
docker build -t dockerid/name:v1 . 
````



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
Run your image on kubernetes
```bash
kubectl run socket-node --image=dockerid/name:v1 --port=8080
```
Expose your deployment
```bash
kubectl expose deployment socket-node --type="LoadBalancer"
```
Get you IP
```bash
kubectl get services
```
Send a socket with name `msg` and all sockets listening `msg` will receive



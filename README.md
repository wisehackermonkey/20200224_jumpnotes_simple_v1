# 20200224_jumpnotes_simple_v1
jump notes is a simple note keeping app :my second attempt at jumpnotes
[Live demo! (as of 20200516)](http://orancollins.com:4000/)
![](https://i.imgur.com/vbH8SfW.png)
### Run oneliner 
```
>docker run -it --rm --name jumpnote -p 80:3000 wisehackermonkey/jumpnotes:latest
```
### *then visit* 
```
http://localhost:80 or http://localhost
```
### Docker Run longterm 
```
> docker run -d --restart=always --name jumpnote -p 80:3000 wisehackermonkey/jumpnotes:latest
```
### docker build locally
```
>docker build -t jumpnote .
```
### docker run locally
```bash
> docker run -d --name jumpnote -p 80:3000 jumpnote:latest
```

### Setup watch folder nodemon with docker (cmd only) works in bash too( i think)
```
>nodemon -e js,html --watch .compiled  --watch web --exec "docker stop jumpnote & docker rm jumpnote & docker build -t jumpnote . & docker run -d --name jumpnote -p 80:3000 jumpnote:latest"
```


### how to tag
```
>docker tag jumpnote:latest wisehackermonkey/jumpnotes:latest
```
### how to publish
```
>docker push wisehackermonkey/jumpnotes:latest
```

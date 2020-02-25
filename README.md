# 20200224_jumpnotes_simple_v1
jump notes is a simple note keeping app :my second attempt at jumpnotes


docker build locally
>docker build -t jumpnote .
docker run locally
> docker run -d --name jumpnote -p 80:3000 jumpnote:latest

Setup watch folder nodemon with docker (cmd only) works in bash too( i think)
>nodemon -e js,html --watch .compiled  --watch web --exec "docker stop jumpnote & docker rm jumpnote & docker build -t jumpnote . & docker run -d --name jumpnote -p 80:3000 jumpnote:latest"

then visit 
http://localhost:80 or http://localhost

how to tag
>docker tag jumpnote:latest wisehackermonkey/jumpnotes:latest

how to publish
>docker push wisehackermonkey/jumpnotes:latest
how to host 
> docker run -d --name jumpnote -p 80:3000 wisehackermonkey/jumpnotes:latest
```
docker compose -f docker-compose.yml up -d --force-recreate    

docker stop $(docker ps -a -q) 2>/dev/null; docker rm $(docker ps -a -q) 2>/dev/null; docker rmi -f $(docker images -aq) 2>/dev/null; docker system prune -a -f; docker volume prune -a -f   
```

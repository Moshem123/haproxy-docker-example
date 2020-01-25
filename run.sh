#!/bin/bash
[[ -z $1 ]] && compose_file="" || compose_file="-f $1"

for i in docker-compose*;do
  docker-compose -f $i down &>/dev/null & 
done
wait
docker-compose $compose_file up -d

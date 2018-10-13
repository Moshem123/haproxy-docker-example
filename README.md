## HAProxy example with NodeJS application

### Usage
1. Make sure you have docker and docker-compose installed
2. Run `docker-compose up -d`
3. Navigate to [localhost:3000](localhost:3000)
4. Refresh couple of times and see each time we're being serverd by a different server (container)
5. Explore the `haproxy/haproxy.cfg` file and see how the load balancing is configred.

### Excercises
- Add another instance to the loop and make sure the load balancer sends traffic to it.
- Make the session sticky (same user gets responses from the same server) - you can use cookies.

### References
* [Docker node image reference](https://github.com/nodejs/docker-node)
* [HAProxy image with stdout logging](https://github.com/mminks/haproxy-docker-logging)
#!/bin/bash

echo "Deploying My Website..."
npm install
su -c "apt-get install sudo"
sudo apt install docker-ce docker-ce-cli containerd.io
sudo docker run hello-world
echo "INSTALLED DOCKER"

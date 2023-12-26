#!/bin/bash

echo "Deploying My Website..."
npm install
sudo apt install docker-ce docker-ce-cli containerd.io
sudo docker run hello-world
echo "INSTALLED DOCKER"

#### (for ubuntu 17.10) , uninstalling

        sudo apt-get autoremove --purge mongodb
        sudo rm -r /var/log/mongodb
        sudo rm -r /var/lib/mongodb


#### installing, (since ubuntu 17.10 is not LTS version so no mongo repo for this os, using ubuntu 16 repo to instsall mongo)

    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
    echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list

    sudo apt-get update
    sudo apt-get install -y mongodb-org


##### source : mongodb documenatation
##### https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

##### after uninsatlling , if mongo didn't connect to server
##### error : couldn't connect to server 127.0.0.1:27017


    This problem could be solved by the below mentioned 4 steps

        Remove .lock file

            sudo rm /var/lib/mongodb/mongod.lock 

        repair the mongodb

            mongod –repair

        start the mongod server

            sudo service mongod start 

        start the mongo client

            mongo

#### install 

        download community server deb file ubuntu version
        sudo dpkg -i mongodb-org-server_7.0.3_amd64.deb
        check status and enable it
        lenovo@ubuntu:~/Downloads$ sudo systemctl status mongod
                ● mongod.service - MongoDB Database Server
                     Loaded: loaded (/lib/systemd/system/mongod.service; disabled; vendor preset: enabled)
                     Active: inactive (dead)
                       Docs: https://docs.mongodb.org/manual
        # start mongod service
       lenovo@ubuntu:~/Downloads$ sudo systemctl start mongod
       #enable it
       lenovo@ubuntu:~/Downloads$ sudo systemctl status mongod

       # install mongo shell
       sudo dpkg -i mongodb-mongosh_1.10.6_amd64.deb 
        # check using command : mongosh

        # install robo3t , create connection and connect

       follow : https://www.youtube.com/watch?v=HSIh8UswVVY

#### uninstall
        
        Type the following commands one by one to uninstall MongoDB:
        
        Stop MongoDB process:
        
        sudo service mongod stop
        Completely remove the installed MongoDB packages:
        
        sudo apt-get purge mongodb-org*
        Remove the data directories, MongoDB database(s), and log files:
        
        sudo rm -r /var/log/mongodb /var/lib/mongodb
        To check if MongoDB is successfully uninstalled, type:
        
        service mongod status
        

### mongodb
        cross platform, opensource , document oriented db, 

#### NoSQL : not only sql

##### why nosql?
    rdbms : suitable for structured data
    nosql : suitable for unstructured data and huge data

##### features : 
    handles structured , semi structured , unstructured
    high performance, scalability, availabiltiy(replication)
    quick iteration/access(performance : doucment based)
    dynamic schema
    auto sharing(horizontal scaling)
    replication(high availability)


##### types of nosql
    1. key value         :  redis, dynamo , riak
    2. column            :  big table, cassandra, simpleDB
    3. graph oriented    :  orientdb, neo4j, titan
    4. document oriented :  mongodb , couchdb


##### diff between rdbms nosql
        rdbms: joins, schema( create query : design of table)
        nosql : embedded document


#### mongod couldn't connect to server 127.0.0.1:27017

        Start mongod server
        mongod
        Open another terminal window
        Start mongo shell
        mongo
        
#### open mongo shell command prompt windows

        C:\Program Files\MongoDB\Server\4.2\bin>mongo

#### practice

        https://github.com/mongodb-the-definitive-guide-3e/mongodb-the-definitive-guide-3e

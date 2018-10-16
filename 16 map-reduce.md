> Map-reduce is a data processing paradigm for condensing large volumes of data into useful aggregated results. 
  For map-reduce operations, MongoDB provides the mapReduce database command.
  
  
##### reducing active loans of emp id into one document

      inserting sample data to collection name : loanDetails

      db.loanDetails.insertMany([
        {emp_id:101 , loadId: 123, loanAmount:5000, loanStatus: "Active"},
        {emp_id:101 , loadId: 124, loanAmount:6000, loanStatus: "Active"},
        {emp_id:102 , loadId: 1267, loanAmount:15000, loanStatus: "Active"},
        {emp_id:102 , loadId: 1268, loanAmount:25000, loanStatus: "Active"},
        {emp_id:101 , loadId: 125, loanAmount:78000, loanStatus: "Expired"},
        {emp_id:101 , loadId: 126, loanAmount:34000, loanStatus: "Expired"},
        {emp_id:101 , loadId: 127, loanAmount:78000, loanStatus: "Active"},
        {emp_id:102 , loadId: 1269, loanAmount:78000, loanStatus: "Expired"}	
      ])

      about data :
      total active loans : 5
      emp_id : 101: active loans 3
      emp_id : 102: active loans 2

      reducing active loans of emp id into one document

##### query : 
        db.loanDetails.mapReduce(
            function(){ emit( this.emp_id, this.loanAmount );},		
            function(key, values){ return Array.sum(values)},
              {
                query:{loanStatus : "Active"},
                out:"TotalLoan"
              }
          );


##### explain:
          db.loanDetails.mapReduce(
              function(){ emit( this.emp_id, this.loanAmount );},	# map, (required data)
              function(key, values){ return Array.sum(values)},	# reduce (key:empid,values:loanAmt)
                {
                  query:{loanStatus : "Active"},		# query : condition
                  out:"TotalLoan"				# out : map reduce name	
                }
            );



##### output : 
            {
                "result" : "TotalLoan",     #name of map reduce function
                "timeMillis" : 1323.0,			#time took to create map reduce
                "counts" : {
                    "input" : 5,				#number of active loan active 
                    "emit" : 5,				
                    "reduce" : 2,				#number of reduced data
                    "output" : 2
                },...

##### conclusion : 5 documents reduced to 2


##### query created map-reduce : TotalLoan

        db.TotalLoan.find()
        
        output : 
          {
              "_id" : 101.0,
              "value" : 89000.0
          }
          {
              "_id" : 102.0,
              "value" : 40000.0
          }

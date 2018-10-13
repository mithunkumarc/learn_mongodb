##### In the normalized data model, the address documents contain a reference to the patron document.


##### patron Document

        {
           _id: "joe",
           name: "Joe Bookreader"
        }

#### address document 1
        {
           patron_id: "joe",
           street: "123 Fake Street",
           city: "Faketon",
           state: "MA",
           zip: "12345"
        }


#### address document 2
        {
           patron_id: "joe",
           street: "1 Some Other Street",
           city: "Boston",
           state: "MA",
           zip: "12345"
        }
        
        
>   If your application frequently retrieves the address data with the name information, 
then your application needs to issue multiple queries to resolve the references.  
In this case, A more optimal schema would be to embed the address data entities in the patron data. 



        {
                _id: "joe",
                   name: "Joe Bookreader",
                   addresses: [
                                {
                                  street: "123 Fake Street",
                                  city: "Faketon",
                                  state: "MA",
                                  zip: "12345"
                                },
                                {
                                  street: "1 Some Other Street",
                                  city: "Boston",
                                  state: "MA",
                                  zip: "12345"
                                }
                              ]
          }

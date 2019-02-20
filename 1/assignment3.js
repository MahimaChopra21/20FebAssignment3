function parseArray(type="Salary",amount=0)
{   
    var data_array=[{
        "type": "Savings",
        "percentage": 3,},
        
        {"type": "Current",
        "percentage": 4,},
        
        {"type": "Salary",
        "percentage": 5,},
        
        {"type": "Juvenile",
        "percentage": 1,},
        
        {"type": "Retired",
        "percentage": 2,},
    
    
    ]
    for(var i=0;i<data_array.length;i++){
    if(type==data_array[i].type)
    { 
        var percentage=data_array[i].percentage;
        var total_amount=amount;
        var deduced_amount= amount*(percentage/100);
        var net_amount=total_amount-deduced_amount;

       
        


    }
    
}

var a={type,percentage,total_amount,deduced_amount,net_amount};
    console.log(a);
} parseArray("Salary",55)
//Example Call Back

    function getTempCallback (location,callback){
        callback(undefined, 38);
        callback('City not found');
    }

    getTempCallback('London', function(err,temp){
        if(err){
            console.log('error',err);
        } else{
            console.log('success', temp);
        }
    });

//Example Call Back

//Example Promises
    function getTempPromise(location){
        return new Promise(function(resolve, reject) {
            setTimeout(function(){
                resolve(42);
                reject('City not found');
            },1000);
        });
    }

    getTempPromise('Philadelphia').then(function (temp){
        console.log('promise success', temp);
    }, function (err){
        console.log('promise error', err);
    });
//Example Promises

//Challenge Area
    
    function addPromise(a,b){
        return new Promise(function(resolve, reject){
            if (typeof a === 'number' && typeof b === 'number'){
                var sum = a + b;
                resolve(a+" + "+b+" = "+ sum);
            } else {
                reject("a & b needs to be numbers");
            }
        });
    }

    addPromise(25,10).then(function(sum){
        console.log('promise success', sum);
    }, function (err){
        console.log('promise error', err);
    });

    addPromise(25).then(function(sum){
        console.log('promise success', sum);
    }, function (err){
        console.log('promise error', err);
    });
//Challenge Area

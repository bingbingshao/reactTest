import FetchUrl from "./Config";

const FetchNet = {
    jsonToFormdata(obj){
        var  data = new FormData();
        for(var key in obj){
            var value = obj[key];
            data.append(key,value);
        }
        return data;
    },
    fetchPostJson(url,param,success,fail){
        fetch(FetchUrl.baseUrl+url,{ 
            method:'POST',
            body:this.jsonToFormdata(param),
            }).then(response => response.json())
            .then(json => {
                //alert(FetchUrl.baseUrl+url);
               success(json);
            })
            .catch(function(error) {
              // fail(error)
               alert(FetchUrl.baseUrl+url);
            })
    },
    fetchGetJson(url,param,success,fail){
        fetch(FetchUrl.baseUrl+url,{ 
            method:'GET',
            body:this.jsonToFormdata(param),
            }).then(response => response.json())
            .then(json => {
                //alert(FetchUrl.baseUrl+url);
               success(json);
            })
            .catch(function(error) {
              // fail(error)
               alert(FetchUrl.baseUrl+url);
            })
    }
}

export default FetchNet;

function print(n:number):void{
    
    for(var i=1;i<=n;i++){
        var str:string="";
        for(var x=0;x<n-i;x++){
              str +=" ";
        }
       
        for(var y=0;y<i;y++){
            str +="*";

        }
        console.log(str);
        
    }
}

    

window.onload = function( ) {
   print(3);
};
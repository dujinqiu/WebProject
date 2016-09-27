function printpyramid(n:number):void{
    
    for(var i=1;i<=n;i++){
        var currentprint:string="";
        for(var x=0;x<n-i;x++){
              currentprint +=" ";
        }
       
        for(var y=0;y<i;y++){
            currentprint +="*";

        }
        console.log(currentprint);
        
    }
}

    

window.onload = function( ) {
   printpyramid(3);
};
console.log("hey this is akshay");
$.ajax({
    type:"GET",
    dataType:"json",
    url:"https://api.myjson.com/bins/tls49",
    success:function(response){
        //console.log("Data from server",response);
var data=formObject(response);
constructDOM(data);
},
    error:function(err){console.log("error in Get method",err);}
});
function formObject(response){
    var flags=[], categoryObject=[];
    var length=response.length;
    for(i=0;i<length;i++){
var movie=response[i];
//        console.log("movie",movie);
//console.log("language",movie.language);


var index=flags.indexOf(movie.language);
if(index >= 0){
//console.log("hey");
    categoryObject[index].movies.push(movie);


    continue;
}

else
{

flags.push(movie.language);
//   console.log(flags);
//}
//    }
//    console.log("formObject response",response);

}
var objectSchema={
    "category":movie.language,
"movies": []
}
objectSchema.movies.push(movie);
categoryObject.push(objectSchema);
console.log("categoryObject",categoryObject);
}
console.log(flags);
return categoryObject;
}

function constructDOM(data){
    var categoryContent=[];
for(var i=0;i<data.length;i++){

    var objectSchema=data[i];
    var categoryTitle=$('<h3 class="categoryName">'+objectSchema.category+'</h3>');
    console.log("constructorDOM data", objectSchema);

  categoryContent.push(categoryTitle);
//   console.log("final:",categoryContent);
}
$('section.content').html(categoryContent);
}

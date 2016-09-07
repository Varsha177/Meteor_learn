Meteor.startup(function(){
  if(Books.find().count() === 0){
    //Books
  }

  if(Categories.find().count() === 0){
    Categories.insert({name:'Tech'});
  Categories.insert({name:'Design'});
  Categories.insert({name:'Business'});
  Categories.insert({name:'Science'});
  Categories.insert({name:'Scifi'});
  Categories.insert({name:'Psychology'});
  }

});

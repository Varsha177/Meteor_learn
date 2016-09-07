Template.navbar.events({
  'change #exampleInput': function (event, template) {

    //get the value - jquery
    var file = $('exampleInput').get(0).files[0]

    //store file
    fsFile = new FS.File(file);

    fsFile.metadata = {
       ownerId:Meteor.userId(),
       username:Meteor.user().profile.name,
    }

    Pictures.insert(fsFile,function(err,result){
      if(!err){
        console.log(result);
      }
    })

  }
});

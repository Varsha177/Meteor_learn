imageStore = new FS.Store.GridFS("imageStore");
Pictures = new FS.Collection("Pictures", {
  stores: [imageStore],
  filter: {
    maxSize: 10000000, // in bytes (10MB)
    // allow certain extensions
    allow: {
      contentTypes: ['image/*'],
      // Allow these extensions
      extensions: ['png','jpg','gif']
    },
    onInvalid: function () {
      if(Meteor.isClient) {
    alert("Wrong image format. Try using PDF or JPG.");
      } else {
        console.warn("Wrong image format. Try using PDF or JPG.");
      }
    }
  }
});
// Subscribe
if(Meteor.isClient){
  Meteor.subscribe('Pictures');
}

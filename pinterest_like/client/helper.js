Template.categories.helpers({
  Categories:function(){
    return Categories.find();
  }
});

Template.books.helpers({
  catnotselected:function() {
    return Session.equals(‘category’,null);
  },
  category:function() {
    return  Session.get('category');
  }
});

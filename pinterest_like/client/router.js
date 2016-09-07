//specifying a route other that home

Router.configure({
  layoutTemplate: 'layout',
  yieldTemplate: {
    //each yield - different template
    'books':{to:'books'},
    'categories':{to:'categories'}
  }
});


// simple route with
// name 'about' that
// matches '/about' and automatically renders
// template 'about'

// Router.map( function () {
//   this.route('about');
// });

// <nav>
//   <a href="{{ pathFor 'about' }}">About</a>
// </nav>

Router.map(function(){
  this.route('/','layout');
  this.route('books',{
    layoutTemplate : 'layout',
    path: '/:name',
    data: function(){
      console.log(this.params.name);
      Session.set('category', this.params.name);
    },
    tempalte:'layout'
  });
});

Router.map( function () {
  this.route('codeEditor',{
    waitOn: IRLibLoader.load('https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js')
  });
});

PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){

  Template.leaderboard.helpers({
    'player': function(){
        return PlayersList.find()
    },
    'selectedClass': function(){
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer');
      if(playerId == selectedPlayer){
          return "selected"
      }
    }
  });

  Template.leaderboard.events({
    'click .player': function(){
      var playerId = this._id;
      Session.set('selectedPlayer', playerId);
    }
    'click .increment': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      PlayersList.update(selectedPlayer, {score: 5});
    }
  });

  Template.addPlayerForm.events({
    'submit form' : function(event){
      event.preventDefault();
      var playerName = event.target.playerName;

      PlayersList.insert({
        name: playerNameVar,
        score: 0
      });

    }
  })
}

if(Meteor.isServer){
    // this code only runs on the server
}

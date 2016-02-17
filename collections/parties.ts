export var Parties = new Mongo.Collection<Party>('parties');

//security method http://docs.meteor.com/#/full/allow
Parties.allow({
    insert: function() {
        var user = Meteor.user();
        return !!user;
    },
    update: function() {
        var user = Meteor.user();
        return !!user;
    },
    remove: function(){
        var user = Meteor.user();
        return !!user;
    }
});


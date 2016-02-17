import {Parties} from 'collections/parties';

export function loadParties() {
    if (Parties.find().count() === 0) {
        var parties = [
            {
                'name': 'Dubstep-Free Zone',
                'description': 'Can we please just for an evening not listen to dubstep.',
                'location': {
                    name: 'Novara'
                },
                'public': true
            },
            {
                'name': 'All dubstep all the time',
                'description': 'Get it on!',
                'location': {
                    name: 'Novara'
                },
                'public': true
            },
            {
                'name': 'Savage lounging',
                'description': 'Leisure suit required. And only fiercest manners.',
                'location': {
                    name: 'Novara'
                },
                'public': false
            }
        ];

        for(var i = 0; i < parties.length; i++) {
            Parties.insert(parties[i]);
        }
        //for (var i = 0; i < 27; i++) {
        //    Parties.insert({
        //        name: Fake.sentence(10),
        //        location: {
        //            name: Fake.fromArray(['Ragusa', 'Novara', 'Comiso'])
        //        },
        //        description: Fake.sentence(100),
        //        public: true
        //    });
        //}
    }
}
import {Component, View} from 'angular2/core';
import {Parties} from 'collections/parties';
import {PartiesForm} from 'client/parties-form/parties-form';
import {RouterLink} from 'angular2/router';
import {AccountsUI} from 'meteor-accounts-ui';
import {MeteorComponent} from 'angular2-meteor';
import {PaginationService, PaginatePipe, PaginationControlsCpm} from 'ng2-pagination';
import {RsvpPipe} from 'client/lib/pipes';
import {RequireUser, InjectUser} from 'meteor-accounts';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'ng2-google-maps/core';

@Component({
    selector: 'parties-list',
    viewProviders: [PaginationService]
})
@View({
    templateUrl: '/client/parties-list/parties-list.html',
    directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES, PartiesForm, RouterLink, AccountsUI, PaginationControlsCpm],
    pipes: [PaginatePipe, RsvpPipe]
})
@InjectUser()
export class PartiesList extends MeteorComponent {
    //variabili
    parties: Mongo.Cursor<Party>;
    pageSize: number = 10;
    curPage: ReactiveVar<number> = new ReactiveVar<number>(1);
    nameOrder: ReactiveVar<number> = new ReactiveVar<number>(1);
    partiesSize: number = 0;
    location: ReactiveVar<string> = new ReactiveVar<string>(null);
    user: Meteor.User;

    //costruttore
    constructor () {
        super();

        this.autorun(() => {
            let options = {
                limit: this.pageSize,
                skip: (this.curPage.get() - 1) * this.pageSize,
                sort: { name: this.nameOrder.get() }
            };
            this.subscribe('parties', options, this.location.get(), () => {
                this.parties = Parties.find({}, { sort: { name: this.nameOrder.get() } });
            }, true);
        });

        this.autorun(() => {
            this.partiesSize = Counts.get('numberOfParties');
        }, true);
    }
    //metodi

    isOwner(party: Party): boolean {
        if (this.user) {
            return this.user._id === party.owner;
        }

        return false;
    }

    removeParty(party) {
        Parties.remove(party._id);
    }

    search(value: string) {
        this.curPage.set(1);
        this.location.set(value);
    }

    onPageChanged(page: number) {
        console.log("ricevuto evento onPageChange page:%o",page);
        this.curPage.set(page);
    }
    changeSortOrder(nameOrder: string) {
        console.log("ricevuto changeSortOrder %o", nameOrder);
        this.nameOrder.set(parseInt(nameOrder));
    }

}

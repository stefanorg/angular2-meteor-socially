# Angular 2.0 e Meteor

* Tutorial angular2-meteor: http://www.angular-meteor.com/tutorials/socially/angular2/bootstrapping

## Installazione

### System
* npm: installare npm
* meteor: curl https://install.meteor.com/ | sh

```
 npm install typings -g
 typings install meteor --ambient
  
 typings install es6-promise --ambient
 
 typings install es6-shim --ambient
```


### Project
* meteor add urigo:angular2-meteor
* meteor remove blaze-html-templates
* meteor remove ecmascript

* in angular una 'componente' sarebbe una direttiva `directives`
 * `PartiesForm` è un componente custom `<parties-form></parties-form>`
 * lo importo `import ... ` e lo dichiaro come direttiva `directives: [PartiesForm]`
 
```typescript
import {PartiesForm} from 'client/parties-form/parties-form';
 
@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/app.html',
    directives: [PartiesForm] 
})
```
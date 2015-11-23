import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://auto.procontext.ru/v1/common/login');
    xhr.onreadystatechange = handler;
    xhr.responseType = 'json';
    xhr.setRequestHeader('Accept', 'application/json');
    var json = JSON.stringify({username: "kdmatrosov", password: "propil"});
    xhr.send(json);

    function handler() {
      if (this.readyState === this.DONE) {
        if (this.status === 200) {
          console.log(this.responseText);
        } else {
        }
      }
    }

    return this.store.findAll('band');
  }
});

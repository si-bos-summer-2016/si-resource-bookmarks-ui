/**
 * Created by Mike on 7/11/2016.
 */

(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      templateUrl: 'components/home/home.html'
    })
      .Class({
        constructor: function() {
        },
        loadData: function() {
          this.testData = "123";
        }
      });
})(window.app || (window.app = {}));

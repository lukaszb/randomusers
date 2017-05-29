// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRx from 'vue-rx';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import App from './App';
import router from './router';
import store from './store';
import { capfirst } from './utils';

Vue.config.productionTip = false;

Vue.filter('capfirst', capfirst);

Vue.use(VueRx, {
  Observable,
  Subscription,
  Subject,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});

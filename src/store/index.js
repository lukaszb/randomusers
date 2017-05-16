import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import userList from './modules/user-list';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';


const Store = new Vuex.Store({
  modules: { userList },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

export default Store;

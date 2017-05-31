import Vue from 'vue';
import UserItem from '@/components/UserItem';

describe('UserItem.vue', () => {
  const user = {
    picture: {
      medium: '/some/url.jpg',
    },
    name: { first: 'joe', last: 'doe', title: 'designer' },
    email: 'joe@doe.com',
  };

  it('should render correct contents', () => {
    const vm = getVm({ user });
    expect(vm.$el.querySelector('.title').textContent)
      .to.equal('designer Joe Doe');
  });
});

function getVm(propsData) {
  const Constructor = Vue.extend(UserItem);
  const vm = new Constructor({ propsData }).$mount();
  return vm;
}

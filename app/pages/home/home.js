class HomeCtrl {
  constructor() {
    this.content = require('home.json');
  }
}

module.exports = () => {
  require('./home.scss');
  return {
    controller: HomeCtrl,
    controllerAs: 'home',
    template: require('./home.html')
  };
};

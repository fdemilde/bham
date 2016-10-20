class HomeCtrl {
  constructor() {
    this.content = require('home.json');
  }
}

module.exports = () => {
  return {
    controller: HomeCtrl,
    controllerAs: 'home',
  };
};

class MainCtrl {
  constructor() {
    this.content = require('main.json');
  }
}

module.exports = () => {
  require('./main.scss');
  return {
    controller: MainCtrl,
    controllerAs: 'main',
    template: require('./main.html')
  };
};

import alt from 'js/alt';

class NavigationActions {
  updateActive(active) {
    this.dispatch(active);
  }
}

module.exports = alt.createActions(NavigationActions);
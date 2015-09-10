import alt from 'js/alt';
import { createActions } from 'alt/utils/decorators';
var i = 0;
@createActions(alt)
class AuthActions {
  updateUser(user) {
    this.dispatch(user);
  }

  requestUserInfo() {
    window.setInterval(function() {
      this.actions.updateUser({id: ++i})
    }.bind(this), 500)
  }
}

export default AuthActions;
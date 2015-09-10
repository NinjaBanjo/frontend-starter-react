import alt from 'js/alt'
import { createStore } from 'alt/utils/decorators';
import AuthActions from 'js/actions/AuthActions';

export default
@createStore(alt, 'AuthStore')
class AuthStore {
  constructor() {
    this.bindActions({
      onUpdateUser: AuthActions.UPDATE_USER
    });

    this.user = null;
  }

  onUpdateUser(user) {
    this.user = user;
  }


  isLoggedIn() {
    return !!this.user;
  }
}
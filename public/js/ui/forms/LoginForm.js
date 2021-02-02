/**
 * Класс LoginForm управляет формой
 * входа в портал
 * Наследуется от AsyncForm
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit( options ) {
    User.register(options);
    App.setState('user-logged');
    const openModal = document.querySelector('div[style="display: block"]');
    App.getModal(`${openModal.getAttribute('data-modal-id')}`).close(); //unregisterEvents()
  }
}

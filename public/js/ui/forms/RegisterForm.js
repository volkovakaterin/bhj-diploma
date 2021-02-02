/**
 * Класс RegisterForm управляет формой
 * регистрации
 * Наследуется от AsyncForm
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit( options ) {
    User.register(options);
    App.setState('user-logged');
    const openModal = document.querySelector('div[style="display: block"]');
    App.getModal(`${openModal.getAttribute('data-modal-id')}`).close(); //unregisterEvents()
  }
}

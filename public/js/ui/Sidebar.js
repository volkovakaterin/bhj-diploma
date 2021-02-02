/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const skinBlue = document.querySelector('.skin-blue');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    sidebarToggle.onclick = function() {
    skinBlue.classList.toggle("sidebar-open");
    skinBlue.classList.toggle("sidebar-collapse");
}
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const itemRegister = document.querySelector('.menu-item_register');
    const itemLogin = document.querySelector('.menu-item_login');
    const itemLogout = document.querySelector('.menu-item_logout');
    
    itemLogin.onclick = function() {
      App.getModal('login').open();
      const form = document.getElementById( 'login-form' ),
      asyncForm = new AsyncForm( form );
    }
    
    itemRegister.onclick = function(event) {
      App.getModal('register').open();
      const form = document.getElementById( 'register-form' ),
      asyncForm = new AsyncForm( form );
      };

    

    itemLogout.onclick = function(event) {
        User.logout();
      }
    
  }

}

/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
class Modal {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью Modal.registerEvents()
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
this.element = element;
this.registerEvents();
  }

  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents() {
    const btnClose = document.querySelectorAll('button[data-dismiss="modal"]');
    btnClose.forEach(elem => {
elem.addEventListener( "click", () => {
  this.onClose();
})
    })
    
  }

  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (Modal.close())
   * */
  onClose( e ) {
this.close();
  }
  /**
   * Удаляет обработчики событий
   * */
  unregisterEvents() {

  }
  /**
   * Открывает окно: устанавливает CSS-свойство display
   * со значением «block»
   * */
  open() {
//console.log(this.element);
this.element.setAttribute('style', 'display: block');
  }
  /**
   * Закрывает окно: удаляет CSS-свойство display
   * */
  close(){
this.element.style.display = "";
  }
}

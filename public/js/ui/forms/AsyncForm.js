/**
 * Класс AsyncForm управляет всеми формами
 * приложения, которые не должны быть отправлены с
 * перезагрузкой страницы. Вместо этого данные
 * с таких форм собираются и передаются в метод onSubmit
 * для последующей обработки
 * */
class AsyncForm {
  /**
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * Сохраняет переданный элемент и регистрирует события
   * через registerEvents()
   * */
  

  constructor( element ) {
this.element = element;
this.registerEvents();
  }

  /**
   * Необходимо запретить отправку формы. В момент отправки
   * вызывает метод submit()
   * */
  registerEvents() {
    const btnPrimary = document.querySelector('.btn-primary');
    btnPrimary.addEventListener( "click" , (event) => {
event.preventDefault();
console.log("Привет");
const btnClose = document.querySelectorAll('button[data-dismiss="modal"]');
console.log(btnClose);
this.submit();
    }) 
  }

  /**
   * Преобразует данные формы в объект вида
   * {
   *  'название поля формы 1': 'значение поля формы 1',
   *  'название поля формы 2': 'значение поля формы 2'
   * }
   * */
  getData() {
    const formData = new FormData( this.element ),
    entries = formData.entries();
    let dataLogin = {};

for (let item of entries) {
  const key = item[0],
    value = item[1];
  //console.log( `${key}: ${value}` );
  dataLogin[`${key}`] = `${value}`;
  //console.log(dataLogin);
}
  }

  onSubmit( options ) {

  }

  /**
   * Вызывает метод onSubmit и передаёт туда
   * данные, полученные из метода getData()
   * */
  submit() {
    let data = {};
    data["data"] = `${this.getData}`;
    console.log(data);
    
  }
}

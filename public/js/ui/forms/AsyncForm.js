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
this.dataLogin = new function(){};

  }

  /**
   * Необходимо запретить отправку формы. В момент отправки
   * вызывает метод submit()
   * */
  registerEvents() {
    const btnPrimary = document.querySelectorAll('.btn-primary');
    btnPrimary.forEach( elem => {
      elem.addEventListener( "click" , (event) => {
event.preventDefault();
console.log(event.currentTarget); 
console.log("Привет");
this.submit();
    }) 
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

for (let item of entries) {
  const key = item[0],
    value = item[1];
  this.dataLogin[`${key}`] = `${value}`;
  //console.log(this.dataLogin);
}
  }

  onSubmit( options ) {

  }

  /**
   * Вызывает метод onSubmit и передаёт туда
   * данные, полученные из метода getData()
   * */
  submit() {
this.getData();
//console.log(this.dataLogin);
let dataLogin2 = Object.create(this.dataLogin);
//console.log(dataLogin2); 
    let data = new function() {
      this.data = dataLogin2;
    }
    console.log(data.data);
    //console.log(data.data.email);
    this.onSubmit(data);
  }
}

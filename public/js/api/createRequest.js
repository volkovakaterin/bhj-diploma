/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', `${this.URL}`);
    xhr.send(options);
    xhr.onload = () => alert(xhr.response);
    
};
Entity.create(createRequest);
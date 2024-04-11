// let arr = [1,2,3,4,5]
// let total = 0
// arr.forEach((item) => {
//     console.log(item);
//     total += item
// })

// console.log(arr);

// console.log(total);

let password = 7777 
let newPassword
let x 
let lock = 0

do {
    x = +prompt('Введите пароль!').trim()
    if (x === password) {
        console.log('Пароль верный!'); 
    } else if (x !== password) {
        lock++
        if (lock >= 3) {
            alert(`Вы сделали ${lock} ошибки, если забыли пароль вы можете изменить его указав свои данные`)
            let name = prompt('Имя пользователя:').trim().toLowerCase()
            if (name === 'sherzod') {
                let dateBirthday = prompt('Год рождения:').trim()
                if (dateBirthday == '06.03.04') {
                    newPassword = prompt('Введите новый пороль').trim()
                    if (newPassword !== password) {
                        console.log(newPassword);
                        let returnPassword = prompt('Повторите пароль').trim()
                        if (returnPassword === newPassword) {
                            password = newPassword
                            alert('Пароль успешно изменен, теперь попытайтесь зайти новым паролем')
                            do {
                                x = prompt('Выведите пароль!').trim()
                                if ( x === password) {
                                    alert(`Добро пожаловать ${name}`)
                                }else if (x !== password) {
                                    lock++ 
                                    if (lock >= 3) {
                                        alert('Пароль не верный, доступ запрешен')
                                        break;
                                    }
                                }
                            } while (x !== password);
                        } else {
                            alert('Пароль не совпал, за ваш тупойство мы вынуждены запустить бесконечный цыкл:)')
                        }   
                    } else {
                        console.log('Новый пороль должен отличиться от старой:');
                    }
                } else {
                    alert('Ваша дата рождения не совподает:')
                }
            } else {
                alert('Ваша имя не совпадает')
            }
            break;
            
        }
    }
} while (x !== password);

console.log('Не правильные попытки ' + lock);

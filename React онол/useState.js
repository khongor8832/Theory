/*
UseState 

useState гэдэг Hooks болохоороо тхайн state-ын анхны утгыг аргемантаараа авдаг. 
useState хоёр утга буцаадаг. Тэр нь массив байдаг. 
val[0] - жинхэн өгөгдөл байдаг.
val[1] - өгөгдөлийг өөрчлөх функц нь байж байдаг. 

const val = useState(false);
const [a, b] = useState(false); // ES6 advenced түвшинд гарсан массивыг шууд задлаад авчихдаг. 
a - нь манай state болчихно. 
b - нь а өөрчилдөг функц болчихно. а b дурын нэр өгч болно.  

Жн 1: Varable байдлаар useState ашиглах
import React, { useState } from "react";
const BurgerPage = props => {
    const [confirmOrder, setConfirmOrder] = useState(false)
    //   false          - аргемантаар дамжин орж ирж байгаа анхны утга
    //    confirmOrder    - а буюу манай state
    //    setConfirmOrder - b буюу а-г өөрчилдөг функц
return (
    <div>
        <Burger /> // гэх мэт утгууд орж ирнэ.
    </div>
    )
}
BurgerPage маань дотороо confirmOrder гэдэг state-тай болж байна. 

 class component дээр state заавал object байх ёстой.
 тэгвэл useState ашигласнаар Object байж болно энгийн хувьсагч байж болно. 
Жн 2: Object байдлаар useState ашиглах
import React, { useState } from "react";
const BurgerPage = props => {
    const [user, setUser] = useState({name: "", pass: ""})
    setUser({name: "naraa", pass: "123"})
    //  {name: "", pass: ""} - аргемантаар дамжин орж ирж байгаа анхны утга
    //    user - буюу манай state
    //    setUser - user-г өөрчилдөг функц
Зэрэг өөрчлөгдөг state-ыг энэнгээр аваад явж болно. Бусад тохиолдолд хувьсагч зарлаад тус тусад нь хадгалаад явсан дээр 
return (
    <div>
        <Burger /> // гэх мэт утгууд орж ирнэ.
    </div>
    )
}*/
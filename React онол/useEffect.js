/*
 useEffect
 
1. useEffect(effect, cause)
effect - Үр дагавар - функц
cause - Учир шалтгаан - өөрчлөгдөж болзошгүй зүйлүүдийг бичнэ. 

2. useEffect(effect)
useEffect функцыг ганцхан effect дамжуулвал: component-ыг render хийгдэх  болгонд энэ функц ажиллана. Өөрөөр хэлбэл шалтгаан дамжуулаагүй учир бүх зүйл шалтгаан болж байна. Энэ нь класс компонент дээр байдаг componentDidUpdate ижил зүйл юм. component render хийгдэх болгоны дараа componentDidUpdate заавалчгүй ажилдаг функц байж байгаа. 
useEffect(effect) ===> componentDidUpdate

3. useEffect(effect, [])
хэрвээ шалтгаан руу нь хоосон массив дамжуулвал effect нь хамгийн анхны удаа render хийгдсний дараа л нэг удаа effect ажилдаг. Тэрний дараа хэдэн удаа ч render хийгдэж байсан ажилладггүй. 
class component-ын componentDidMount ижил
useEffect(effect) ===> componentDidMount

4. useEffect(effect, [cause1, cause2, cause3]) 
cause1, cause2, cause3 ===> объектууд байдаг. 
энэ 3 аль нэг объект өөрчлөгдөх л юм бол effect өөрчлөгдөнө. өөрчлөгдөөгүй үед ажиллахгүй 
class component-ын componentShouldUpdate ижил
useEffect(effect) ===> componentShouldUpdate

useEffect(() => {
    console.log("effect....");
    return () => {
    //Энд байгаа код компонентийг DOМ -оос устгахад ажиллана. (ө.х алга болоход)
    console.log("ComponentWillUnmount...");
    }
})*/
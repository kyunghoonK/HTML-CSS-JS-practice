
function makeBurger(menu,size,num){
    console.log("빵깔기")
    console.log("야채넣기")
    if(num < 1){
        return"버거 개수가 0개 입니다."
    }
    if(menu == "불고기버거"){
        console.log("고기 패티 넣기")
    } else if(menu == "새우버거"){
        console.log("새우 패티 넣기")
    }

    console.log("빵 덮기")
    console.log(menu,size,"사이즈",num,"개 준비완료")

    return "완료 되었습니다."
}


function serveFrenchFries(){
    console.log("감자튀김 박스 선택")
    console.log("감튀 담기")  
  }
  
  function serveCoke(){
    console.log("콜라컵 선택")
    console.log("콜라 담기")
  }

  let result = makeBurger("불고기","L",0)
  console.log("버거 프로세스 결과",result)

  makeBurger("새우버거","L",3)
// 음수 양수 판별 프로그램을 만드세요.
let number = 0

if(number<0){
  console.log("음수 입니다.")
}else if(number>0){
  console.log("양수 입니다.")
}else{
  console.log("0 입니다.")
}


//나는 대학교 교수다. 레포트 점수에따라 등급을 매기는 프로그램을 만드시오.
//(90 ~ 100 : A / 80 ~ 89 : B / 70 ~ 79 : C / 60 ~ 69 : D / less than 59 : F)
let score = 83
let grade = ''

if(90<=score && score<=100){
  grade = "A"
}else if(80<=score && score<=89){
  grade = "B"
}else if(70<=score && score<=79){
  grade = "C"
}else if(60<=score && score<=69){
  grade = "D"
}else if(0<=score && score<=59){
  grade = "F"
}else {
  console.log("입력값이 올바르지 않습니다.")
}
console.log(grade)

//한 지원자가 우리회사에 지원을했다. 지원자가 사용가능한 스킬은 배열에 제공이 된다
//let skills = ["HTML","CSS","Javascript","React"]
//Javascript와 React 둘다 할줄 안다면 “합격!” Javascript와 React 둘중 하나만 할줄 안다면 “예비”, 두 스킬이 없다면 “탈락” 을 보여주는 프로그램을 짜시오

let skills = ["HTML", "CSS", "Javascript", "React"]

if(skills.includes("Javascript") && skills.includes("React")){
  console.log("축하합니다. 합격입니다.")
}else if(skills.includes("Javascript") || skills.include("React")){
  console.log("귀하는 예비 6번 입니다.")
}else{
  console.log("불합격 입니다.")
}
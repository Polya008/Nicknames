export default class Validator {
	constructor(name){
		this.name = name;
		}
	
	validateUsername(){
		
    const onlyLettersNumbersSymbols = /^[\w-]*$/.test(this.name); 
    const exeptThreeNumbersInRow = !/(\d{4,})+/g.test(this.name); 
    const edgeCheck = /^[^\d-_].*[^\d-_]$/.test(this.name); 
    const result =
      onlyLettersNumbersSymbols && exeptThreeNumbersInRow && edgeCheck;
    return result;
  }
	}







import { once } from 'helpful-decorators';
class DateClass{
    private timeZone:string;
    constructor(timeZone:string){
        this.timeZone = timeZone;
    }
    @once
    getTime(){
        let d = new Date();
        console.log("logg")
        return d.getTime();
    }

    getMonth(){
        var d = new Date();
        return d.getMonth()
    }

    expensiveOperations(){

        const startTime = new Date().getTime();
        let ctr = 0;

        for(let i = 0; i<100000000; i++){
            ctr++;
        }
        console.log(ctr);
        const endTime = new Date().getTime();

        console.log(endTime-startTime)
    }

    getTimezone(){
        return this.timeZone;
    }

}

const dateObject = new DateClass("IND");

const response = dateObject.getTime();
dateObject.getTime();
dateObject.getTime();

dateObject.expensiveOperations();

console.log(response);
import { DefaultService } from "./generated";

async function main(){
    const response = await DefaultService.getUsers("234");
    console.log(response);
}

main();
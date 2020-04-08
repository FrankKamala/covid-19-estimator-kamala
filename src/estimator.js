const covid19ImpactEstimator = (data) => {
//initial

const input = data;
let periodDays = 0;
let estimateNumber = currentlyInfected*1024;
impact.currentlyInfected = data.reported*10;
severeImpact.currentlyInfected = data.reported*50;

impact.infectionsByRequestedTime = impact.currentlyInfected;
severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected;

//estimate ==currentlyInfected x (2 to the power of *factor*) where factor is 10 for a 30 day
//duration (there are 10 sets of 3 days in a perioid of 30 days)

return {
    data: input,
    impact: {},
    severeImpact: {}
};


};

export default covid19ImpactEstimator;

const covid19ImpactEstimator = (data) => {
//initial To estimate the number of infected people 30 days from now, note that currentlyInfected doubles
//every 3 days, so you'd have to multiply it by a factor of 2.

const input = data;
let periodDays = 0;
let estimateNumber = currentlyInfected*1024;
impact.currentlyInfected = data.reported*10;
severeImpact.currentlyInfected = data.reported*50;

impact.infectionsByRequestedTime = impact.currentlyInfected*estimateNumber;
severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected*estimateNumber;

//estimate ==currentlyInfected x (2 to the power of *factor*) where factor is 10 for a 30 day
//duration (there are 10 sets of 3 days in a perioid of 30 days)

return {
    data: input,
    impact: {},
    severeImpact: {}
};


};

export default covid19ImpactEstimator;

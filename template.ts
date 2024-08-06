interface Soil {
    name: string;
    type?: string;
    description?: string;
}

interface Plant extends Soil {}

interface LocationInterface {
    longitude: string;
    latitude: string;
    country: string;
    state: string;
    county: string;
    city: string;
}

interface AnalyticalMethod {
    name: string;
    analyticalMethodType?: string;
}

interface TimePeriod {
    startDate: Date;
    endDate: Date;
    period: string;
}

interface Result {
    analysisMethod: AnalyticalMethod;
    location: LocationInterface;
    timePeriod: TimePeriod;
    rep: string;
    sample: string;
}



interface PlantResult extends Result {
    plant: Plant;
};

interface SoilResult extends Result {
    soil: Soil;
}

const analysisMethod = {
    name: "ICP",
};



// const plantResult = {

// }

const soil: Soil = {
    name: "Coloma",
    type: "Sandy",
    description: ""
};

const plant: Plant = {
    name: "Corn",
    type: "Type A",
    description: ""
};


const plants: Plant[] = [
    {
        name: "Corn",
        type: "Type A",
    },
    {
        name: "Soybean",
        type: "Type A",
        description: ""
    },
    {
        name: "Alfalfa",
        type: "Type B",
        description: "",
    },
]



// const soils_first: Soil[] = [
    
// ]



const locationFirst: LocationInterface = {
    longitude: "",
    latitude: "",
    country: "USA",
    state: "Wisconsin",
    county: "",
    city: "Belleville"
};

const timePeriod: TimePeriod = {
    startDate: new Date,
    endDate: new Date,
    period: "Period AB"
};

const plantResult: PlantResult = {
    plant,
    analysisMethod,
    location: locationFirst,
    timePeriod,
    rep: "S1",
    sample: "220"
};

const soil_result = {
    soil,
    analysisMethod,
    location,
    timePeriod
};




const resultObject: Result = {
    analysisMethod,
    location: locationFirst,
    timePeriod,
    rep: "S1",
    sample: "220"
}

const plantObject: PlantResult = {
    ...resultObject,
    plant,
}

const soilObject: SoilResult = {
    ...resultObject,
    soil,
}

const plantNames = ["Corn", "Alfalfa", "Cocoa", "Coffee", "Soybean"];

function plantCreator(name, type, description) {

    return {
        name,
        type,
        description,
    }
}

const plantsArray: Plant[] = plantNames.map((plantName) => plantCreator(plantName, "", ""));


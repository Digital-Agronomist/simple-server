const analyticalMethods = [
    { name: "Mass Spectrometry (MS)", analyticalMethodType: "Inductively Coupled Plasma (ICP)" },
    { name: "Optical Emission Spectrometry (OES)", analyticalMethodType: "Inductively Coupled Plasma (ICP)" },
    { name: "Handheld / Portable X-ray Fluorescent", analyticalMethodType: "X-ray Fluorescence (XRF)" },
    { name: "Micro X-ray Fluorescence Spectrometry", analyticalMethodType: "X-ray Fluorescence (XRF)" },
    { name: "Total reflection X-ray Fluorescence", analyticalMethodType: "X-ray Fluorescence (XRF)" },
];

const timePeriods = [
    { startDate: new Date("2019-10-01"), endDate: new Date("2019-10-31"), period: "test" },
];

const locations = [
    { longitude: "42.885583", latitude: "-89.499431", country: "United States", state: "Wisconsin", county: "Dane", city: "Belleville" },
    { longitude: "42.860542", latitude: "-89.504357", country: "United States", state: "Wisconsin", county: "Dane", city: "Belleville" },
    { longitude: "42.879866", latitude: "-89.504933", country: "United States", state: "Wisconsin", county: "Dane", city: "Belleville" },
    { longitude: "42.887706", latitude: "-89.510033", country: "United States", state: "Wisconsin", county: "Dane", city: "Belleville" },
    { longitude: "42.871349", latitude: "-89.509177", country: "United States", state: "Wisconsin", county: "Dane", city: "Belleville" },
];

const soils = [
    { name: "Coloma", type: "Sandy", description: "A sandy soil found in various regions." },
];

const plants = [
    { name: "Corn", type: "Field Corn", description: "Field Corn is primarily used for animal feed, ethanol production, and manufactured goods." },
    { name: "CO Cassava", type: "Cassava", description: "Cassava Ciat Pamira Colombia October, 2019" },
];

const plantResults = [
    {
        plant: { name: "Corn", type: "Field Corn", description: "Field Corn is primarily used for animal feed, ethanol production, and manufactured goods." },
        analysisMethod: { name: "Optical Emission Spectrometry (OES)", analyticalMethodType: "Inductively Coupled Plasma (ICP)" },
        location: { longitude: "42.885583", latitude: "-89.499431", country: "United States", state: "Wisconsin", county: "Dane", city: "Belleville" },
        timePeriod: { startDate: new Date("2019-10-01"), endDate: new Date("2019-10-31"), period: "test" },
        rep: "0",
        sample: "201"
    },
    {
        plant: { name: "Corn", type: "Field Corn", description: "Field Corn is primarily used for animal feed, ethanol production, and manufactured goods." },
        analysisMethod: { name: "Optical Emission Spectrometry (OES)", analyticalMethodType: "Inductively Coupled Plasma (ICP)" },
        location: { longitude: "42.885583", latitude: "-89.499431", country: "United States", state: "Wisconsin", county: "Dane", city: "Belleville" },
        timePeriod: { startDate: new Date("2019-10-01"), endDate: new Date("2019-10-31"), period: "test" },
        rep: "1",
        sample: "202"
    },
];

const plantResultObject = {
    plant: { name: "Corn", type: "Field Corn", description: "Field Corn is primarily used for animal feed, ethanol production, and manufactured goods." },
    analysisMethod: { name: "Optical Emission Spectrometry (OES)", analyticalMethodType: "Inductively Coupled Plasma (ICP)" },
    location: { longitude: "42.885583", latitude: "-89.499431", country: "United States", state: "Wisconsin", county: "Dane", city: "Belleville" },
    timePeriod: { startDate: new Date("2019-10-01"), endDate: new Date("2019-10-31"), period: "test" },
    rep: "0",
    sample: "201"
};

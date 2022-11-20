import axios from "axios"

const apiKey = process.env.API_KEY || "d548c5ed24604be6a9dd0d989631f783"

const checkTimezone = async(city, country) => {
    try {
        const fetchGeoAPI = await axios.get(
            `https://api.geoapify.com/v1/geocode/search?city=${city}
            &country=${country}&format=json&apiKey=${apiKey}`
        )
        const { name, offset_STD } = fetchGeoAPI.data.results[0].timezone
        const locationTimezone = { name, offset: offset_STD }
        return locationTimezone
    }
    catch(err) { throw new Error(err) }
}

export default checkTimezone
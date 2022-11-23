import { config } from "dotenv"
import axios from "axios"

config({ path: "../.env" })

const checkTimezone = async(city, country) => {
    try {
        const fetchGeoAPI = await axios.get(
            `${process.env.GEO_API || "https://api.geoapify.com/v1/geocode"}/search?city=${city}
            &country=${country}&format=json&apiKey=${process.env.GEO_API_KEY || "d548c5ed24604be6a9dd0d989631f783"}`
        )
        const { name, offset_STD } = fetchGeoAPI.data.results[0].timezone
        const locationTimezone = { name, offset: offset_STD }
        return locationTimezone
    }
    catch(err) { throw new Error(err) }
}

export default checkTimezone
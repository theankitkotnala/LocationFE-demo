/** Required Modules */
import { ApiConfig } from './../config/api.config';

export default {
    /** api url for getting all the users in range */
    fetchAllUsersWithinRage : (lat , long, range) => `${ApiConfig.DEV_API_BASE_URL}/location/${lat}/${long}/${range}`
}
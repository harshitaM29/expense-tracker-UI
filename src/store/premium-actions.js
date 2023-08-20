import { premiumActions } from "./premium";
import axios from "axios";
export const fetchPremiumLeaderboardData = (tokenId) => {
    return async(dispatch) => {
       
        try {
            const response = await axios.get(`http://16.171.194.246:4000/premium/showLeaderBoard`, { headers: {"Authorization" : tokenId } });
            dispatch(premiumActions.replaceItems({
                items: response.data || []
            }))
            
        }
    catch(error) {
            throw new Error(error);
            
        };
    };
}

export const fetchDownloadedData = (tokenId) => {
    return async(dispatch) => {
       
        try {
            const response = await axios.get(`http://16.171.194.246:4000/user/getfilesdownloaded`, { headers: {"Authorization" : tokenId } });
            
            dispatch(premiumActions.replaceDownloadedItems({
                downloadedData:response.data || []
            }))
            
        }
    catch(error) {
        throw new Error(error);
        };
    };
}
import axios from axios;
const baseURL = "https://musicbrainz.org/ws/2/";

export const fetchReleasesByArtistId = () => {
    return axios.get(`${baseURL}?artist=859d0860-d480-4efd-970c-c05d5f1776b8&inc=recordings&fmt=json`).then(({data}) => {
        console.log(data.releases)
        return data.releases;
    })
}
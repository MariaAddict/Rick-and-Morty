const BASE_URL = "https://rickandmortyapi.com/api/episode";


const handleResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res.status);
}

class EpisodesApi {
    constructor(url, { headers }) {
        this._url = url;
        this._headers = headers;
    }

    getEpisodes() {
        return fetch(this._url, {
            method: 'GET',
        })
            .then(handleResponse)
    }

}

const apiEpisodes = new EpisodesApi(BASE_URL, {
    headers: {
        'Content-Type': 'application/json',
    }
});

export default apiEpisodes;

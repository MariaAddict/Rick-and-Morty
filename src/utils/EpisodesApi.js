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

    _getEpisodesPageOne() {
        return fetch(this._url, {
            method: 'GET',
        })
            .then(handleResponse)
    }

    _getEpisodesPageTwo() {
        return fetch(`${this._url}?page=2`, {
            method: 'GET',
        })
            .then(handleResponse)
    }

    _getEpisodesPageThree() {
        return fetch(`${this._url}?page=3`, {
            method: 'GET',
        })
            .then(handleResponse)
    }

    getEpisodes() {
        return Promise.all([this._getEpisodesPageOne(), this._getEpisodesPageTwo(), this._getEpisodesPageThree()]);
    }

}

const apiEpisodes = new EpisodesApi(BASE_URL, {
    headers: {
        'Content-Type': 'application/json',
    }
});

export default apiEpisodes;

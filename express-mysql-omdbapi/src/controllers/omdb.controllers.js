const omdbConfig = require("../config/omdb.config");
const got = require("got");
const {pipeline} = require("stream");
const axios = require("axios")
const { createLog } = require("../services/api_log.services");
const { title } = require("process");

exports.searchOmdbController = async (req, res) => {
    try {
        const { search, page=1 } = req.query;
        const params = `?apikey=${omdbConfig.apiKey}&s=${search}&page=${page}`;
        const omdbUrl = omdbConfig.url+params;
        const { data } = await axios.get(omdbUrl);
        const logInput = { 
            endpoint: omdbConfig.url,
            params,
        }
        await createLog(logInput);
        if (data.Response === 'False') return res.send({message: data.Error})
        return res.send(data);
    } catch (err) {
        return res.status(500).send({
            message:
              err.message || "Some error occurred while searching movies."
          });
    }
}

exports.getDetailOmdbController = async (req, res) => {
    try {
        const { id } = req.query;
        const params = `?apikey=${omdbConfig.apiKey}&i=${id}`
        const omdbUrl = omdbConfig.url+params
        const { data } = await axios.get(omdbUrl);
        const logInput = { 
            endpoint: omdbConfig.url,
            params,
        }
        await createLog(logInput);
        if (data.Response === 'False') return res.send({message: data.Error})
        return res.send(data);
    } catch (err) {
        return res.status(500).send({
            message:
              err.message || "Some error occurred while get movie detail."
          });
    }
}
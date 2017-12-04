import FetchService from "./FetchService";
import Series from "../entities/Series";

export default class DataService {
    constructor(){

        this.fetchService = new FetchService();
    }
    
        getAllSeries(success, failure){
            this.fetchService.getAll(
                seriesData => {
                    const series = seriesData.data.map( show => new Series(show));
                    success(series);
                },
                error => failure(error)
            );
        }
    }


import TableCovid19 from "./TableCovid19"
import useFetch from "../Customize/fetch"
const Covid = () => {
    //https://static.pipezero.com/covid/data.json
    const { data: dataCovid, loading } = useFetch('https://static.pipezero.com/covid/data.json')
    console.log('check data covid19:', dataCovid);
    return(
        <div className="covid-container">
            <div className="covid-table-status">
                <TableCovid19
                dataCovid = {dataCovid}
                loading = {loading}
                />
            </div>
        </div>
    )
}

export default Covid
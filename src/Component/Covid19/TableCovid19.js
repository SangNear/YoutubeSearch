import "./TableCovid19.scss"
const TableCovid19 = (props) => {

    let { dataCovid, loading } = props
    let data = dataCovid.locations
    return (
        <table id="customers">
            <tr>
                <th>Thành Phố</th>
                <th>Ca nhiễm</th>
                <th>Tử vong</th>
                <th>Điều trị</th>
                <th>Hồi phục</th>
            </tr>
            {loading == false && data && data.length > 0
                && data.map((item) => {
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.cases}</td>
                            <td>{item.death}</td>
                            <td>{item.treating}</td>
                            <td>{item.recovered}</td>
                        </tr>
                    )

                })
            }
            {loading === true &&
                <tr>
                    <td colSpan='5' style={{ 'textAlign': 'center' }}>Loading...</td>
                </tr>

            }



        </table >
    )
}

export default TableCovid19
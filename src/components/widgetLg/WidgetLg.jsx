import "./widgetLg.css";

export default function WidgetLg({data}) {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  let counter = 1;
  return (
    
    <div className="widgetLg">
      
      <h3 className="widgetLgTitle">Latest Data</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">ID</th>
          <th className="widgetLgTh">Temperature(°C)</th>
          <th className="widgetLgTh">Humidity(%)</th>
          <th className="widgetLgTh">GasLevel(kPa)</th>
          <th className="widgetLgTh">Date And Time</th>
        </tr>
        {data.slice(0,10).map((val,key) => {
        return(<tr className="widgetLgTr" key={key}>
          <td className="widgetLgDate">{counter++}</td>
          <td className="widgetLgDate">{val.temperature}</td>
          <td className="widgetLgAmount">{val.humidity}</td>
          <td className="widgetLgDate">
            {val.gasLevel}
          </td>
          <td className="widgetLgDate">{new Date(val.createdAt).toDateString()}</td>

        </tr>)
        })}
        

        {/* <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr> */}
      </table>
    </div>
  );
}

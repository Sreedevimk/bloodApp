import moment from "moment";
import Header from "../../components/reuse/Layout/Header";
import { useEffect } from "react";
import Api from "../../services/Api";
import { useState } from "react";


const Analytics = () => {
    const [data, setData] = useState([]);
    const [inventoryData, setInventoryData] = useState([]);
    const colors = [
    //   "#884A39",
    //   "#C38154",
    //   "#FFC26F",
    //   "#4F709C",
    //   "#4942E4",
    //   "#0079FF",
    //   "#FF0060",
    //   "#22A699",

    '#E8BCB9','#E8BCB9','#E8BCB9','#E8BCB9','#E8BCB9','#E8BCB9','#E8BCB9','#E8BCB9',
    ];
    //GET BLOOD GROUP DATA
    const getBloodGroupData = async () => {
      try {
        const { data } = await Api.get("/analytics/bloodGroups-data");
        if (data?.success) {
          setData(data?.bloodGroupData);
          // console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    //lifrecycle method
    useEffect(() => {
      getBloodGroupData();
    }, []);
  
    //get function
    const getBloodRecords = async () => {
      try {
        const { data } = await Api.get("/inventory/get-recent-inventory");
        if (data?.success) {
          setInventoryData(data?.inventory);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getBloodRecords();
    }, []);
    return (
      <>
        <Header />
        <div className="d-flex flex-row flex-wrap  " style={{marginLeft:"7%",marginTop:"4%"}}>
          {data?.map((record, i) => (
            <div
              className="card m-2 p-1"
              key={i}
              style={{ width: "18rem" ,   backgroundColor: `${colors[i]}` }}
            >
              <div className="card-body">
                <h1 className="card-title bg-light text-danger text-center mb-3">
                  {record.bloodGroup}
                </h1>
                <p className="card-text">
                  Total In : <b>{record.totalIn}</b> (ML)
                </p>
                <p className="card-text">
                  Total Out : <b>{record.totalOut}</b> (ML)
                </p>
              </div>
              <div className="card-footer text-light bg-dark text-center">
                Total Available : <b>{record.availabeBlood}</b> (ML)
              </div>
            </div>
          ))}
        </div>
        <div className="container my-3"> 
          <h1 className="my-3">Recent Blood Transactions</h1>
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Blood Group</th>
                <th scope="col">Inventory Type</th>
                <th scope="col">Unit</th>
                <th scope="col">Donor Email</th>
                <th scope="col">TIme & Date</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData?.map((record) => (
                <tr key={record._id}>
                  <td>{record.bloodGroup}</td>
                  <td>{record.inventoryType}</td>
                  <td>{record.unit} (ML)</td>
                  <td>{record.email}</td>
                  <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };
  
  export default Analytics;
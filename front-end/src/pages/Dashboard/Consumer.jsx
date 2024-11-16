import { useEffect, useState } from "react";
import Layout from "../../components/reuse/Layout/Layout";
import Api from "../../services/Api";
import { useSelector } from "react-redux";
import moment from "moment";

const Consumer = () => {
    const { user } = useSelector((state) => state.auth);
    const [data, setData] = useState([]);
    //find donar records
    const getDonors = async () => {
      try {
        const { data } = await Api.post("/inventory/get-inventory-hospital", {
          filters: {
            inventoryType: "out",
            hospital: user?._id,
          },
        });
        if (data?.success) {
          setData(data?.inventory);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getDonors();
    }, []);
  
    return (
      <Layout>
        <div className="container mt-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Blood Group</th>
                <th scope="col">Inventory TYpe</th>
                <th scope="col">Unit</th>
                <th scope="col">Email</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((record) => (
                <tr key={record._id}>
                  <td>{record.bloodGroup}</td>
                  <td>{record.inventoryType}</td>
                  <td>{record.unit}</td>
                  <td>{record.email}</td>
                  <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    );
  };
  
  export default Consumer;
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import mock from "../mock/patient.json";
import { Layout } from "antd";
import { Col, Divider, Row } from "antd";
import moment from "moment";

const { Content } = Layout;

function PatientDetail(id) {
  const { patient_id } = useParams();

  const { isLoading, isError, data } = useQuery(["patient", patient_id], () =>
    mock.find((item) => {
      return item.Id == patient_id;
    }),
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <Layout>
        <Content style={{ margin: 10 }}>
          <Divider orientation="center">
            {data.Name} {data.Surname}
          </Divider>
          <Row
            justify="center"
            style={{
              padding: 10,
              flexFlow: "wrap",
              justifyContent: "left",
            }}
          >
            <Col xs={24} md={12} lg={8} xl={8} className="ant-card-bordered">
              <div className="personal">
                <div className="content">
                  <h2>Personal</h2>
                  <div>
                    <span style={{ fontWeight: "bold" }}>Gender: </span>
                    <span>{data.Gender}</span>
                  </div>
                  <div>
                    <span style={{ fontWeight: "bold" }}>Date Of Birth: </span>
                    <span>{moment(data.DateOfBirth).format("DD.MM.YYYY")}</span>
                  </div>
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                      Contact Number 1:
                    </span>
                    <span>{data.ContactNumber1}</span>
                  </div>
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                      Contact Number 2:
                    </span>
                    <span>{data.ContactNumber2}</span>
                  </div>
                  <div>
                    <span style={{ fontWeight: "bold" }}>Postcode: </span>
                    <span>{data.Postcode}</span>
                  </div>
                  <div>
                    <span style={{ fontWeight: "bold" }}>Address: </span>
                    <span>{data.Address}</span>
                  </div>
                  <div>
                    <span style={{ fontWeight: "bold" }}>Id Card: </span>
                    <span>{data.IdCard}</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12} lg={8} xl={8} className="ant-card-bordered">
              <div className="medical">
                <div className="content">
                  <h2>Medical</h2>
                  <div>
                    <h3>Alergies</h3>
                    {data.Medical.Alergies.map((item, key) => (
                      <div key={key}>
                        <ul>
                          <li>
                            <span style={{ fontWeight: "bold" }}>Name: </span>
                            <span>{item.Name}</span>
                          </li>
                          <li>
                            <span style={{ fontWeight: "bold" }}>Notes: </span>
                            <span>{item.Notes}</span>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h3>Contitions</h3>
                    {data.Medical.Conditions.map((item, key) => (
                      <div key={key}>
                        <ul>
                          <li>
                            <span style={{ fontWeight: "bold" }}>Names: </span>
                            <span>{item.Name}</span>
                          </li>
                          <li>
                            <span style={{ fontWeight: "bold" }}>Notes: </span>
                            <span>{item.Notes}</span>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h3>Medication</h3>
                    {data.Medical.Medication.map((item, key) => (
                      <div key={key}>
                        <ul>
                          <li>
                            <span style={{ fontWeight: "bold" }}>Names: </span>
                            <span>{item.Name}</span>
                          </li>
                          <li>
                            <span style={{ fontWeight: "bold" }}>Notes: </span>
                            <span>{item.Notes}</span>
                          </li>
                          <li>
                            <span style={{ fontWeight: "bold" }}>
                              Start Date:
                            </span>
                            <span>
                              {moment(item.StartDate).format("DD.MM.YYYY")}
                            </span>
                          </li>
                          <li>
                            <span style={{ fontWeight: "bold" }}>
                              End Date:
                            </span>
                            <span>
                              {moment(item.EndDate).format("DD.MM.YYYY")}
                            </span>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12} lg={8} xl={8} className="ant-card-bordered">
              <div className="nextOfKin">
                <div className="content">
                  <h2>Next Of Kin</h2>
                  <div>
                    {data.NextOfKin.map((item, key) => (
                      <div key={key}>
                        <div style={{ marginTop: 10 }}>
                          <span style={{ fontWeight: "bold" }}>Fullname: </span>
                          <span>
                            {item.Name} {item.Surname}
                          </span>
                        </div>
                        <div>
                          <span style={{ fontWeight: "bold" }}>
                            Contact Number 1:
                          </span>
                          <span>{data.ContactNumber1}</span>
                        </div>
                        <div>
                          <span style={{ fontWeight: "bold" }}>
                            Contact Number 2:
                          </span>
                          <span>{data.ContactNumber2}</span>
                        </div>
                        <div>
                          <span style={{ fontWeight: "bold" }}>Id Card: </span>
                          <span>{item.IdCard}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

export default PatientDetail;

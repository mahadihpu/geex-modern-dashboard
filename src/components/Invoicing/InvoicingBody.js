import {
  Card,
  FormControl,
  Grid,
  IconButton,
  Table,
  TableBody,
  NativeSelect,
  InputLabel,
  TextField
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import ErrorOutlineSharpIcon from "@material-ui/icons/ErrorOutlineSharp";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import "./InvoicingBody.moudule.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import PrintOutlinedIcon from "@material-ui/icons/PrintOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import LinkOutlinedIcon from "@material-ui/icons/LinkOutlined";
import { TableHead } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { TableContainer } from "@material-ui/core";

const InvoicingBody = () => {
  const invoiceData = [
    {
      number: "#INV-0020200200",
      recipient: "Samuel",
      date: "Thu 1/7/2021 5.24 AM",
      amount: 549.09,
      status: "paid",
    },
    {
      number: "#INV-0020200211",
      recipient: "Bella",
      date: "Thu 1/7/2021 5.24 AM",
      amount: 823.09,
      status: "pending",
    },
    {
      number: "#INV-0020200212",
      recipient: "Dejon",
      date: "Thu 1/7/2021 5.24 AM",
      amount: 146.09,
      status: "unpaid",
    },
    {
      number: "#INV-0020200233",
      recipient: "William",
      date: "Thu 1/7/2021 5.24 AM",
      amount: 181.76,
      status: "paid",
    },
    {
      number: "#INV-0020200345",
      recipient: "Lurine",
      date: "Thu 1/7/2021 5.24 AM",
      amount: 167.35,
      status: "pending",
    }
  ];
  return (
    <div className="invoice__body">
      <h2>Invoicing</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      <Grid container>
        <Grid xs={5}>
          <Grid container>
            <Grid xs={6}>
              <Card
                className="invoice__card"
                style={{ backgroundColor: "#ab53db" }}
              >
                <Grid container>
                  <Grid xs={8}>
                    <h3 style={{ color: "#fff", marginLeft: "20px" }}>982</h3>
                    <p style={{ color: "#fff", marginLeft: "20px" }}>
                      Invoice sent
                    </p>
                  </Grid>
                  <Grid xs={4}>
                    <DoneAllIcon className="invoicecard__icon" />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid xs={6}>
              <Card
                className="invoice__card"
                style={{ backgroundColor: "#ff5b5a" }}
              >
                <Grid container>
                  <Grid xs={8}>
                    <h3 style={{ color: "#fff", marginLeft: "20px" }}>45</h3>
                    <p style={{ color: "#fff", marginLeft: "20px" }}>
                      Pending Invoice
                    </p>
                  </Grid>
                  <Grid xs={4}>
                    <HelpOutlineIcon className="invoicecard__icon" />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={6}>
              <Card
                className="invoice__card"
                style={{ backgroundColor: "#00a28a" }}
              >
                <Grid container>
                  <Grid xs={8}>
                    <h3 style={{ color: "#fff", marginLeft: "20px" }}>73</h3>
                    <p style={{ color: "#fff", marginLeft: "20px" }}>
                      Paid Invoice
                    </p>
                  </Grid>
                  <Grid xs={4}>
                    <CheckCircleOutlineIcon className="invoicecard__icon" />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid xs={6}>
              <Card
                className="invoice__card"
                style={{ backgroundColor: "#ffbc54" }}
              >
                <Grid container>
                  <Grid xs={8}>
                    <h3 style={{ color: "#fff", marginLeft: "20px" }}>168</h3>
                    <p style={{ color: "#fff", marginLeft: "20px" }}>
                      Unpaid Invoices
                    </p>
                  </Grid>
                  <Grid xs={4}>
                    <ErrorOutlineSharpIcon className="invoicecard__icon" />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={7}>
          <Card className="balance__card">
            <div className="balance__cardContainer">
              <Grid container style={{ paddingTop: "15px", zIndex: "999" }}>
                <Grid xs={8}>
                  <h4 style={{ color: "#fff" }}>Balance</h4>
                </Grid>
                <Grid xs={4}>
                  <IconButton aria-label="settings">
                    <MoreVertIcon
                      style={{
                        marginTop: "15px",
                        color: "#fff",
                        marginLeft: "100%",
                      }}
                    />
                  </IconButton>
                </Grid>
              </Grid>
              <h1 style={{ color: "#fff", marginTop: "-20px" }}>$245.708,65</h1>
              <p>Tuesday, February 2nd 2021,8.24 pm</p>
              <button className="balance__button">
                <AccountBalanceWalletOutlinedIcon
                  style={{ marginTop: "7px" }}
                />
                <p>Main Wallet</p>
              </button>
            </div>
          </Card>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={9}>
          <Grid container>
            <Grid xs={8}>
              <h3>Invoice List</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </Grid>
            <Grid xs={4}>
              <div className="invoice__listContainer">
                <button className="expand__button">
                  <p style={{ color: "#000" }}>Recent</p>
                  <ExpandMoreIcon
                    style={{ marginTop: "9px", marginLeft: "5px" }}
                  />
                </button>
                <DashboardOutlinedIcon
                  style={{ marginTop: "25px", marginLeft: "30px" }}
                />
                <DashboardOutlinedIcon
                  style={{ marginTop: "25px", marginLeft: "5px" }}
                />
              </div>
            </Grid>
          </Grid>
          <Card className="invoice__tableCard">
            <TableContainer>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <input type="checkbox" name="" id="" />
                    </TableCell>
                    <TableCell align="right">Invoice Number</TableCell>
                    <TableCell align="right">Recipient</TableCell>
                    <TableCell align="right">Date</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {invoiceData.map((data, i) => (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        <input type="checkbox" name="" id="" />
                      </TableCell>
                      <TableCell align="right">{data.number}</TableCell>
                      <TableCell align="right">{data.recipient}</TableCell>
                      <TableCell align="right">{data.date}</TableCell>
                      <TableCell align="right">${data.amount}</TableCell>
                      <TableCell align="right">
                        {data.status === "paid" ? (
                          <button className="status__button status__paid">
                            <Grid container>
                              <Grid xs={6}>
                                <CheckCircleOutlineIcon className="status__icon" />
                              </Grid>
                              <Grid xs={6}>Paid</Grid>
                            </Grid>
                          </button>
                        ) : data.status === "unpaid" ? (
                          <button className="status__button status__unpaid">
                            <Grid container>
                              <Grid xs={6}>
                                <HighlightOffIcon className="status__icon" />
                              </Grid>
                              <Grid xs={6}>unpaid</Grid>
                            </Grid>
                          </button>
                        ) : (
                          <button className="status__button status__pending">
                            <Grid container>
                              <Grid xs={4}>
                                <MoreHorizOutlinedIcon className="status__icon" />
                              </Grid>
                              <Grid xs={8}>pending</Grid>
                            </Grid>
                          </button>
                        )}
                      </TableCell>
                      <TableCell align="right" style={{ color: "#c4c4c4" }}>
                        <LinkOutlinedIcon />
                        <PrintOutlinedIcon />
                        <MoreHorizOutlinedIcon />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
        <Grid xs={3}>
          <h3>Send Invoices</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <Card style={{ margin: "10px", padding: "15px",borderRadius: "15px"}}>
            <p>Choose Recipient</p>
            <Grid container>
              <Grid xs={4}>
                <div className="recipient__box"></div>
                <h5 style={{ textAlign: "center", marginTop: "0px" }}>Dave</h5>
              </Grid>
              <Grid xs={4}>
                <div className="recipient__box"></div>
                <h5 style={{ textAlign: "center", marginTop: "0px" }}>
                  Ismael
                </h5>
              </Grid>
              <Grid xs={4}>
                <div className="recipient__box"></div>
                <h5 style={{ textAlign: "center", marginTop: "0px" }}>Dinda</h5>
              </Grid>
            </Grid>
            <p>Choose Services</p>
            <FormControl className="service__options">
              <InputLabel>Maintenance Services</InputLabel>
              <NativeSelect>
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </NativeSelect>
            </FormControl>
            <p>Label</p>
            <form>
              <TextField
                id="insert-amount"
                label="insert Amount"
                variant="outlined"
              />
            </form>
            <button className="send__invoiceButton">Send Invoices</button>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default InvoicingBody;

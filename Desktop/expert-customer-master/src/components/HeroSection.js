// import consulting from "../assets/images/1.jpg";
// import {
//   CButton,
//   CForm,
// } from "@coreui/react";
// import { useMediaQuery } from "react-responsive";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import axios from "axios";
// import React, { Component } from "react";
// import "react-calendar/dist/Calendar.css";
// import TextField from "@material-ui/core/TextField";
// import { apiEndpoint as API_ENDPOINT } from "../config";
// window.city="";
// window.specialization="";
// const Desktop = ({ children }) => {
//   const isDesktop = useMediaQuery({ minWidth: 992 })
//   return isDesktop ? children : null
// }
// const Tablet = ({ children }) => {
//   const isTablet = useMediaQuery({ minWidth: 200, maxWidth: 992 })
//   return isTablet ? children : null
// }
// export default class HeroSection extends Component{
//   constructor(props) {
//     super();
//     this.state = {
//       search_value: "Expert",
//       experts: [],
//       org: [],
//       firstname: "",
//       expertName: "",
//       location: "",
//       specialization: [],
//       date: new Date(),
//       slot: null,
//       selectedDate: null,
//       wait: true,
//       texthide: true,
//       desc: "",
//       startTime: "",
//       endTime: "",
//       expertId: "",
//       succsess: false,
//       subSpec: [],
//       full_info: null,
//       middle:null,
//     };
//   }
//   x;
//   y;
//   expertName = "";
//   city = "";
//   specialization = "";
//   subSpecialization = "";
  // location = [
  //   {
  //     city: "Mumbai",
  //   },
  //   {
  //     city: "Ahemdabad",
  //   },
  //   {
  //     city: "Kolkata",
  //   },
  //   {
  //     city: "Jaipur",
  //   },
  //   {
  //     city: "Chennai",
  //   },
  //   {
  //     city: "Delhi",
  //   },
  // ];

//   componentDidMount() {
//     if (this.state.search_value === "Expert") {
//       this.setState({ wait: true });
//       axios
//         .get(API_ENDPOINT + "api/v1/user/getexperts", {
//           headers: {
//             "Authorization":
//               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDgwMzYwMDZ9.cyyjrNvlotCxdtVWSIiiOIohaqTga5v0t2RA6E0S5R0",
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//           },
//         })
//         .then((res) => {
//           console.log(res.data.data);
//           console.log("Status", res.data.data.verified);
//           this.setState({ wait: false });
//           let expertData = res.data.data.map((item) => {
//             console.log("Status: ", item.verified);
//             if (item.verified) {
//               return {
//                 expertName: item.personalDetails.firstname,
//                 location: item.addressDetails.city,
//                 expertType: item.professionalDetails.specialization,
//                 experience: item.professionalDetails.yearOfExperience,
//                 firmName: item.professionalDetails.nameOfCurrentOrgBusiness,
//               };
//             }
//           });
//           this.setState((prevState) => {
//             return {
//               ...prevState,
//               experts: expertData,
//             };
//           });
//         });

//       axios
//         .get(API_ENDPOINT + "api/v1/user/getexpertspec", {
//           headers: {
//             Authorization:
//               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDgwMzYwMDZ9.cyyjrNvlotCxdtVWSIiiOIohaqTga5v0t2RA6E0S5R0",
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//         })
//         .then((res) => {
//           console.log(res);
//           let spec = res.data.data.map((item) => {
//             return {
//               specialization: item.specialization,
//               subSpecialization: item.subSpecializations,
//             };
//           });
//           this.setState((prevState) => {
//             return {
//               ...prevState,
//               specialization: spec,
//             };
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//         });

//       let x = this.state.specialization.map((i) => i.subSpecialization);
//       console.log("Initial: ", x);
//       x.forEach((i) => {
//         console.log(i);
//         this.setState({ subSpec: [...i] });
//       });
//     }
//     let config = {
//       headers: {
//         "Authorization":
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiI5MTkwNzQ0MTU5MTMiLCJpYXQiOjE2MDgxMDgwNjV9.wTRWekTz-yUKSSYhsOSPG08XnCh9vsEsAwDN2PxOqVM",
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//       },
//     };

//     axios
//       .get(
//         "http://35.223.86.66:3000/api/v1/expert/organization?orgName=",
//         config
//       )
//       .then((res) => {
//         this.setState({ org: res.data });
//       });
//   }
//   handleBooking = (e) => {
//     this.setState({ succsess: false });
//     var id = e.target.value;
//     console.log(id);
//     this.setState({ modal: true });
//     this.setState({ expertId: id });

//     //console.log(e.target.value)
//     axios
//       .get(
//         "http://35.223.86.66:3000/api/v1/user/appointment?expertId=5fd0cacd624f32f0f38ae11e",
//         {
//           headers: {
//             Authorization:
//               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIrOTE3MDIwNjY2NzQ2IiwiaWF0IjoxNjA5MjI2NTE2fQ.kiIcrLT9XoIUCVkx9B8xY6gK3uQalhxjLkDvFGbJA2g",
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//         }
//       )
//       .then((res) => {
//         console.log(res.data);
//         this.setState({ slot: res.data });
//       })
//       .catch((err) => {
//         console.log(err.body);
//       });
//   };
//   closeModal = () => {
//     this.setState({ modal: false });
//   };
//   dateChanger = (date) => {
//     this.setState({ date: date });
//     console.log(this.state.date);
//   };

//   gettime = (e) => {
//     /*put data by axios*/
//     this.setState({ texthide: false });
//     var string = e.target.value;
//     string = string.split(" ");
//     var stringArray = new Array();
//     for (var i = 0; i < string.length; i++) {
//       stringArray.push(string[i]);
//     }
//     this.setState({ startTime: stringArray[0] });
//     this.setState({ endTime: stringArray[1] });
//   };

//   desHandler = (e) => {
//     var text = e.target.value;
//     this.setState({ desc: text });
//   };
//   bookApppintment = () => {
//     var dd = String(this.state.date.getDate()).padStart(2, "0");
//     var mm = String(this.state.date.getMonth() + 1).padStart(2, "0"); //January is 0!
//     var yyyy = this.state.date.getFullYear();
//     var strdate = dd + "-" + mm + "-" + yyyy;
//     var data = {
//       expertId: "5ff2fcf79e43c8692bf44b9a",
//       customerId: "5fc8f2c6f16be46a84fd6f1f",
//       date: strdate,
//       slotTime: this.state.startTime,
//       startTime: this.state.startTime,
//       endTime: this.state.endTime,
//       description: this.state.desc,
//       status: "actives",
//       followUp: "taken",
//     };
//     this.setState({ wait: true });
//     axios
//       .post(API_ENDPOINT + "api/v1/user/bookappointment", data, {
//         headers: {
//           Authorization:
//             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiI5MTk4OTM5MTg5MDciLCJpYXQiOjE2MDk1MjIyMTJ9.YnIVgjj0aiMMXz-OHhjFETXXFZJoFqciULt2Blf6-eU",
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       })
//       .then((res) => {
//         this.setState({ wait: false, succsess: true, texthide: true });
//         setInterval(() => {
//           this.setState({ succsess: true });
//         }, 1000);
//         this.setState({ succsess: false });
//         this.closeModal();
//         console.log(res);
//       });
//   };
  // searchExpert = () => {
  //   //console.log('Parameters: ',this.expertName, this.city, this.specialization);
  //   axios
  //     .get(
  //       API_ENDPOINT +
  //         `api/v1/user/findExpert?firstname=${this.expertName}&city=${this.city}&specialization=${this.specialization}&subSpecialization=${this.subSpecialization}`,
  //       {
  //         headers: {
  //           "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDgwMzYwMDZ9.cyyjrNvlotCxdtVWSIiiOIohaqTga5v0t2RA6E0S5R0",
  //           "Content-Type": "application/json",
  //           "Accept": "application/json",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       setTimeout(() => {
  //         window.location.href = "/experts";
  //       }, 3000);
  //       let expData = res.data.message.map((item) => {
  //         return {
  //           expertName: item.personalDetails.firstname,
  //           location: item.addressDetails.city,
  //           expertType: item.professionalDetails.specialization,
  //           experience: item.professionalDetails.yearOfExperience,
  //           firmName: item.professionalDetails.nameOfCurrentOrgBusiness,
  //         };
  //       });
  //       this.setState((prevState) => {
  //         return {
  //           ...prevState,
  //           experts: expData,
  //         };
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
  // };
//   searchOrg = (e) => {
//     console.log(e.target.value);
//     let config = {
//       headers: {
//         Authorization:
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiI5MTkwNzQ0MTU5MTMiLCJpYXQiOjE2MDgxMDgwNjV9.wTRWekTz-yUKSSYhsOSPG08XnCh9vsEsAwDN2PxOqVM",
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     };

//     axios
//       .get(
//         "http://35.223.86.66:3000/api/v1/user/organization-by-name?orgName=" +
//           e.target.value,
//         config
//       )
//       .then((res) => {
//         this.setState({ org: res.data }, () => {
//           console.log(this.state.org);
//         });
//       });
//   };
//   get12hTime = (str) => {
//     var h = str.substring(0, 3);
//     var amorpm = parseInt(h) > 12 ? "pm" : "am";
//     var hou = parseInt(h) % 12 || 12;
//     var time = "" + hou + ":" + str.substring(3, 5) + "" + amorpm;
//     //console.log(time)
//     return time;
//   };
//   capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };
//   search_value_fun = (e) => {
//     this.setState({ search_value: e.target.value }, () => {
//       console.log(this.state.search_value);
//     });
//   };
//   handleClick = (e) => {
//     console.log(e.target.value);
//     this.setState({ full_info: e.target.value });
//   };
//   handleSubmit = () => {
//     if(this.city.length !== 0 || this.specialization.length !== 0){
//       this.searchExpert();

//     }
//   }
//   render(){
//     console.log(this.state);
    // var old = (
    //   <>
    //   <div className="container-fluid bg-main">
    //   <div className="row">
    //     <div className=" col-md-6 col-sm-6 col-lg-6 p-0">
    //       <img
    //         src={consulting}
    //         alt="consulting"
    //         className="hero-image"
    //         style={{ height: "auto", width: "100%" }}
    //       />
    //     </div>
    //     <div className="col-md-6 col-sm-6 col-lg-6 text-left hero-info text-white">
    //       <h1 className="hero-title">
    //         Fexperts <br /> Coming Soon
    //       </h1>
    //       <p>Stay tuned</p>
    //       <div className="row mt-6">
    //         <div className="col">
    //           <form className="d-flex">
    //             <input
    //               className="form-control me-1 col-md-4  brad-0"
    //               type="search"
    //               autoComplete="l ocation"
    //               placeholder="Location"
    //               aria-label="Search"
    //             />
    //             <input
    //               className="form-control col-md-6 brad-0"
    //               type="search"
    //               placeholder="Search"
    //               aria-label="Search"
    //             />
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //   </>
    // )
  //   var list1 = (
  //     <>
  //     <div className="container-fluid bg-main">
  //     <div className="row">
  //       <div className=" col-md-6 col-sm-6 col-lg-6 p-0">
  //         <img
  //           src={consulting}
  //           alt="consulting"
  //           className="hero-image"
  //           style={{ height: "auto", width: "100%" }}
  //         />
  //       </div>
  //       <div className="col-md-6 col-sm-6 col-lg-6 text-left hero-info text-white">
  //         <h1 className="hero-title">
  //           Fexperts <br /> Coming Soon
  //         </h1>
  //         <p>Stay tuned</p>
  //         <div className="row mt-6">
  //           <div className="col justify-content-flex-start">
  //             <CForm className="d-flex" >
  //             <Autocomplete
  //                   disableClearable
  //                   freeSolo
  //                   clearOnEscape
  //                   className="form-control me-1 col-md-4  brad-0"
  //                   id="location"
  //                   name="location"
  //                   style={{ padding:"0px", height:48, color:"#17345f"}}
  //                   //onChange={(event, value) => this.searchExpert(event, value)}
  //                   onChange={(event, value) => {
  //                     this.city = value.city;
  //                     this.searchExpert();
  //                   }}
  //                   options={this.location}
  //                   getOptionLabel={(option) => option.city}
  //                   renderInput={(params) => (
  //                     <div>
  //                     <TextField
  //                       {...params}
  //                       name="location"
  //                       margin="none"
  //                       size="small"
  //                       className="mb-3 lg={6}"
  //                       label="Location"
  //                       onChange={(event) => {
  //                         this.city = event.target.value;
  //                         console.log('This is it location '+this.city.length == 0);
  //                       }}
  //                       variant="filled"

  //                     />
  //                     </div>
  //                   )}
  //                 />
  //                 <Autocomplete
  //                   disableClearable
  //                   freeSolo
  //                   clearOnEscape
  //                   className="form-control col-md-6 brad-0"
  //                   id="specialization"
  //                   name="specialization"
                    
  //                   style={{ padding:"0px", height:48, color:"#17345f" }}
  //                   //onChange={(event, value) => this.searchExpert(event, value)}
  //                   onChange={(event, value) => {
  //                     //console.log('SPec: ', value)
  //                     this.specialization = value;
  //                     this.searchExpert();

  //                     this.y = this.state.specialization
  //                       .filter(
  //                         (item) => this.specialization === item.specialization
  //                       )
  //                       .map((item) =>
  //                         item.subSpecialization.map((i) => i.subSpecialization)
  //                       );

  //                     // console.log("Changed: ", this.y);

  //                     this.setState({ subSpec: [].concat.apply([], this.y) });
  //                   }}
  //                   options={this.state.specialization.map(
  //                     (item) => item.specialization
  //                   )}
                    
  //                   renderInput={(params) => (
  //                     <div className="">
  //                     <TextField
  //                       {...params}
  //                       size="small"
  //                       margin="none"
  //                       name="specialization"
  //                       label="Search"
  //                       onChange={(event) => {
  //                         this.specialization = event.target.value;
  //                       }}
  //                       variant="filled"
  //                       className="h-25 d-inline-block mb-3 lg={6}"
  //                       classes={{  width: "100%",height:"1px",color:"white", backgroundColor: "white"  }}
                        
  //                     />
  //                     </div>
  //                   )}
  //                 />
  //                  { console.log('This is it specialization '+this.specialization.length === 0) }
  //               <CButton
  //                 block         
  //                 onClick={this.handleSubmit}

  //                 style={{ height:48, width:"15%", marginLeft:10, backgroundColor:"white"  }}                 
  //                 type = "submit"           
  //               >
  //               Search  
  //               </CButton>
  //             </CForm>
  //           </div>
  //          </div>
  //         </div>
  //       </div>
  //   </div>
  //     </>
  //   );
  // return list1}
// }
import consulting from "../assets/images/1.jpg";
import {
  CButton,
  CForm,
} from "@coreui/react";
import { useMediaQuery } from "react-responsive";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";
import React, { Component } from "react";
import "react-calendar/dist/Calendar.css";
import TextField from "@material-ui/core/TextField";
import { apiEndpoint as API_ENDPOINT } from "../config";
import ExpertSection from "../components/ExpertSection";
window.city="";
window.special="";
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 200, maxWidth: 991 })
  return isTablet ? children : null
}
export default class HeroSection extends Component{
  constructor(props){
    super(props);
    this.state={
            location: "",
            specialization: [],
            expertId: "",
            success:false
    }
  }
  city="";
  special="";
  specialization = [
    {
      special: "Loan",
    },
    {
      special: "Insurance",
    },
    {
      special: "Intern",
    },
    {
      special: "Lawyer",
    },
    {
      special: "FreeLancer",
    },
    {
      special: "Entrepreneur",
    },
  ];
  location = [
    {
      city: "Mumbai",
    },
    {
      city: "Ahemdabad",
    },
    {
      city: "Kolkata",
    },
    {
      city: "Jaipur",
    },
    {
      city: "Chennai",
    },
    {
      city: "Delhi",
    },
  ];
  componentDidMount() {

  }
  searchExpert=()=>{
    if(sessionStorage.getItem("city").length !== 0 || sessionStorage.getItem("special").length !== 0 )
    {
      (setTimeout(() => {
      window.location.href = "/experts";}, 300))
    }
    // axios.get(
    //   API_ENDPOINT + `api/v1/user/findExpert?city=${this.city}&specialization=${this.city}`,
    //   {
    //     headers: {
    //       "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDgwMzYwMDZ9.cyyjrNvlotCxdtVWSIiiOIohaqTga5v0t2RA6E0S5R0",
    //       "Content-Type": "application/json",
    //       "Accept": "application/json",
    //     },
    //   }
    // ).then((res) => {
    //   console.log(res);
    //   let expData = res.data.message.map((item) => {
    //     return {
    //       location: item.addressDetails.city,
    //       expertType: item.professionalDetails.specialization,
    //     };
    //   });
    //   this.setState((prevState) => {
    //     return {
    //       ...prevState,
    //       experts: expData,
    //     };
    //   });
    // })
    // .catch((err) => {
    //   console.log(err.response);
    // });
  }
  render(){
    var list1 = (
      <>
      <Desktop>
      <div className="container-fluid bg-main">
      <div className="row">
        <div className=" col-md-6 col-sm-6 col-lg-6 p-0">
          <img
            src={consulting}
            alt="consulting"
            className="hero-image"
            style={{ height: "auto", width: "100%" }}
          />
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 text-left hero-info text-white">
          <h1 className="hero-title">
            Fexperts <br /> Coming Soon
          </h1>
          <p>Stay tuned</p>
          <div className="row mt-6">
            <div className="col justify-content-flex-start">
              <CForm className="d-flex" >
              <Autocomplete
                    disableClearable
                    freeSolo
                    clearOnEscape
                    className="form-control me-1 col-md-4  brad-0"
                    id="location"
                    name="location"
                    style={{ padding:"0px", height:48, color:"#17345f", width:"30%"}}
                    //onChange={(event, value) => this.searchExpert(event, value)}
                    onChange={(event, value) => {
                      this.city = value.city;
                      sessionStorage.setItem("city", value.city);
                      window.city=value.city;
                      console.log("this is the location assigned "+window.city);
                    }}
                    options={this.location}
                    getOptionLabel={(option) => option.city}
                    renderInput={(params) => (
                      <div>
                      <TextField
                        {...params}
                        name="location"
                        margin="none"
                        size="small"
                        className="mb-3 lg={6}"
                        style={{ width: "100%"}}
                        label="Location"
                        onChange={(event) => {
                          this.city = event.target.value;
                          sessionStorage.setItem("city", event.target.value);
                          window.city=event.target.value;
                          this.state.location=event.target.value;
                          console.log("this is the location assigned "+window.city);
                        }}
                        variant="filled"

                      />
                      </div>
                    )}
                  />
                  <Autocomplete
                    disableClearable
                    freeSolo
                    clearOnEscape
                    className="form-control me-1 col-md-6"
                    id="specialization"
                    name="specialization"
                    style={{ padding:"0px", height:48, color:"#17345f", width: "100%"}}
                    //onChange={(event, value) => this.searchExpert(event, value)}
                    onChange={(event, value) => {
                      this.special = value.special;
                      sessionStorage.setItem("special", value.special);
                      window.special=value.special;
                      console.log("this is the specialization assigned "+window.special);
                    }}
                    options={this.specialization}
                    getOptionLabel={(option) => option.special}
                    renderInput={(params) => (
                      <div>
                      <TextField
                        {...params}
                        name="specialization"
                        margin="none"
                        size="small"
                        className="mb-3 lg={6}"
                        label="Search"
                        style={{ padding:"0px", height:48, color:"#17345f", width: "100%"}}
                        onChange={(event) => {
                          this.special = event.target.value;  
                          sessionStorage.setItem("special", event.target.value);
                          window.special=event.target.value;
                          console.log("this is the specialization assigned "+window.special);
                        }}
                        variant="filled"

                      />
                      </div>
                    )}
                  />
                <CButton
                  block         
                  onClick={this.searchExpert}
                  style={{ height:48, width:"15%", marginLeft:10, backgroundColor:"white"  }}                 
                  type = "submit"           
                >
                Search  
                </CButton>
              </CForm>
            </div>
           </div>
          </div>
        </div>
    </div>
    </Desktop>
      </>
    );
    var list2=(
      <>
      <Tablet>
      <div className="container-fluid bg-main">
      <div className="row">
        <div className=" col-md-6 col-sm-6 col-lg-6 p-0">
          <img
            src={consulting}
            alt="consulting"
            className="hero-image"
            style={{ height: "auto", width: "100%" }}
          />
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 text-left hero-info text-white">
          <h1 className="hero-title">
            Fexperts <br /> Coming Soon
          </h1>
          <p>Stay tuned</p>
          <div className="row mt-6">
            <div className="col justify-content-flex-start">
              <CForm className="d-row justify-content-center text-center" >
              <Autocomplete
                    disableClearable
                    freeSolo
                    clearOnEscape
                    className="form-control me-1 col-md-12  brad-0"
                    id="location"
                    name="location"
                    style={{ padding:"0px", height:48, color:"#17345f"}}
                    //onChange={(event, value) => this.searchExpert(event, value)}
                    onChange={(event, value) => {
                      this.city = value.city;
                      sessionStorage.setItem("city", value.city);
                      window.city=value.city;
                      console.log("this is the location assigned "+window.city);
                    }}
                    options={this.location}
                    getOptionLabel={(option) => option.city}
                    renderInput={(params) => (
                      <div>
                      <TextField
                        {...params}
                        name="location"
                        margin="none"
                        size="small"
                        className="mb-3 lg={6}"
                        label="Location"
                        onChange={(event) => {
                          this.city = event.target.value;
                          sessionStorage.setItem("city", event.target.value);
                          window.city=event.target.value;
                          this.state.location=event.target.value;
                          console.log("this is the location assigned "+window.city);
                        }}
                        variant="filled"

                      />
                      </div>
                    )}
                  />
                  <br />
                  <Autocomplete
                    disableClearable
                    freeSolo
                    clearOnEscape
                    className="form-control me-1 col-md-12  brad-0"
                    id="specialization"
                    name="specialization"
                    style={{ padding:"0px",width:"100%",height:48, color:"#17345f"}}
                    //onChange={(event, value) => this.searchExpert(event, value)}
                    onChange={(event, value) => {
                      this.special = value.special;
                      sessionStorage.setItem("special", value.special);
                      window.special=value.special;
                      console.log("this is the specialization assigned "+window.special);
                    }}
                    options={this.specialization}
                    getOptionLabel={(option) => option.special}
                    renderInput={(params) => (
                      <div>
                      <TextField
                        {...params}
                        name="specialization"
                        margin="none"
                        size="small"
                        className="mb-5 lg={6}"
                        label="Search"
                        onChange={(event) => {
                          this.special = event.target.value;  
                          sessionStorage.setItem("special", event.target.value);
                          window.special=event.target.value;
                          console.log("this is the specialization assigned "+window.special);
                        }}
                        variant="filled"

                      />
                      </div>
                    )}
                  />
                <CButton
                  block         
                  onClick={this.searchExpert}
                  className="px-4 mt-4 bg-main"
                  style={{ marginTop:"1%",backgroundColor:"white", color:"#17345f" }}                 
                  type = "submit"           
                >
                Search  
                </CButton>
              </CForm>
            </div>
           </div>
          </div>
        </div>
    </div>
    </Tablet>
      </>
    );
  return (
    <>
    {list1}
    {list2}
    </>
  )
  }
} 
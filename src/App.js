//libraries
import React, { useState, useEffect } from "react";

//components
import TroonForm from "./components/TroonForm";
import Header from "./components/Header";
import Toast, { notfiFail, notifySuccess } from "./utils/Toast";
//style
import "bootstrap/dist/css/bootstrap.min.css";
import useForm from "./utils/useForm";
import saveForm from "./apis/save-form";
import Footer from "./components/Footer";
import "./assets/css/screen.css";

function App() {
  //initial state of form
  const initialState = {
    name: "",
    companyName: "",
    linkedInUrl: "",
    websiteUrl: "",
    email: "",
  };
  const initailError = {
    name: true,
    companyName: true,
    linkedInUrl: true,
    websiteUrl: true,
    email: true,
    // interestErr: true,
    // blockChainTechErr: true,
    // fileErr: true,
  };

  //useStates
  const [interest, setInterest] = useState([]);
  const [blockChainTech, setblockChainTech] = useState([]);
  const [projectSpecsStatus, setprojectSpecsStatus] = useState("");
  const [file, setfile] = useState({});
  const [showErr, setshowErr] = useState(false);
  const [loading, setloading] = useState("");

  //hook for onChange , show error message and clear form
  const { form, error, resetForm, setError, handleChange } = useForm(
    initialState,
    initailError
  );

  //error validaion for interest, blockchain and project selection
  // useEffect(() => {
  //   // valiation check for interest
  //   if (interest.length > 0) {
  //     setError({
  //       ...error,
  //       interestErr: false,
  //     });
  //   }
  //   // valiation check for blockchain interest
  //   if (blockChainTech.length > 0) {
  //     setError({
  //       ...error,
  //       blockChainTechErr: false,
  //     });
  //   }
  //   // valiation check for file interest
  //   if (Object.keys(file).length > 0) {
  //     setError({
  //       ...error,
  //       fileErr: false,
  //     });
  //   }
  // }, [interest, blockChainTech, file, projectSpecsStatus]);

  // handle functionalities for checboxes
  const handleCheckBoxes = (e, type) => {
    switch (type) {
      case "interest":
        if (e.target.checked) {
          if (!interest.includes(e.target.value)) {
            // ✅ only runs if value not in array
            setInterest([...interest, e.target.value]);
          }
        } else {
          let arr = interest.filter(function (item) {
            return item !== e.target.value;
          });
          setInterest(arr);
        }

        break;
      case "blockchain":
        if (e.target.checked) {
          if (!blockChainTech.includes(e.target.value)) {
            // ✅ only runs if value not in array
            setblockChainTech([...blockChainTech, e.target.value]);
          }
        } else {
          let arr = blockChainTech.filter(function (item) {
            return item !== e.target.value;
          });
          setblockChainTech(arr);
        }
        break;
      case "project":
        setprojectSpecsStatus(e.target.value);
      default:
        break;
    }
  };

  //clear form
  const clearForm = () => {
    resetForm(initialState, initailError);
    setInterest([]);
    setblockChainTech([]);
    setprojectSpecsStatus("");
    setfile("");
    setshowErr(false);
  };

  //upload file
  const handleFile = (e) => {
    if (e.target.files.length === 0) {
      return;
    }
    setfile(e.target.files[0]);
  };

  //return form data
  const buildFormData = (formData, data, parentKey) => {
    if (
      data &&
      typeof data === "object" &&
      !(data instanceof Date) &&
      !(data instanceof File)
    ) {
      Object.keys(data).forEach((key) => {
        buildFormData(
          formData,
          data[key],
          parentKey ? `${parentKey}[${key}]` : key
        );
      });
    } else {
      const value = data == null ? "" : data;
      formData.append(parentKey, value);
    }
  };

  // convert json to form data
  const jsonToFormData = (data) => {
    const formData = new FormData();
    buildFormData(formData, data);
    return formData;
  };

  // Save form details
  const submitForm = async (e) => {
    e.preventDefault();
    let err = false;
    const body = {
      ...form,
      interest,
      blockChainTech,
      projectSpecsStatus,
      file,
    };
    Object.values(error).map((item) => {
      if (item) {
        err = true;
      }
      return 0;
    });

    if (err) {
      setshowErr(true);
      return;
    }
    setshowErr(false);

    const myData = jsonToFormData(body);
    try {
      setloading(true);
      const response = await saveForm(myData);
      console.log("response", response);
      if (response) {
        setloading(false);
        notifySuccess(response?.message);
        clearForm();
      }
    } catch (error) {
      setloading(false);
    }
  };

  return (
    <>
      <Toast />
      <Header />
      <TroonForm
        form={form}
        handleChange={handleChange}
        error={error}
        resetForm={resetForm}
        initialState={initialState}
        handleCheckBoxes={handleCheckBoxes}
        interest={interest}
        clearForm={clearForm}
        submitForm={submitForm}
        showErr={showErr}
        file={file}
        handleFile={handleFile}
        projectSpecsStatus={projectSpecsStatus}
        blockChainTech={blockChainTech}
        loading={loading}
      />
      <Footer />
    </>
  );
}

export default App;

import { useState } from "react";
import MyTypography from "./components/MyTypography";
import MUIButton from "./components/MUIButton";
import MUITextField from "./components/MUITextField";
import MUISelect from './components/MUISelect';
import MUIRadioButton from "./components/MUIRadioButton";
import MUICheckBox from "./components/MUICheckBox";

function App() {
  return (
    <div className="App">
      {/* <MyTypography />
      <MUIButton/>
      <MUITextField/> 
      <MUISelect/> 
      <MUIRadioButton/>  */}

      <MUICheckBox/>
    </div>
  );
}

export default App;

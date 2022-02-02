import Button from "@mui/material/Button";
import Person from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from '@mui/icons-material/Save';
import { IconButton } from "@mui/material";
import { LoadingButton } from "@mui/lab";

function App() {
  return (
    <div className="App">
      <Button variant="text">Basic Button</Button>
      <Button variant="contained">Basic Button</Button>
      <Button variant="outlined">Basic Button</Button>
      <Button disabled>Disabled</Button>
      <Button variant="contained" color="primary">
        PRIMARY
      </Button>
      <Button variant="contained" color="success">
        SUCCESS
      </Button>
      <Button variant="contained" color="error">
        ERROR
      </Button>
      <Button variant="contained" color="success" size="small">
        Small Button
      </Button>
      <Button variant="contained" color="error" size="medium">
        Medium Button
      </Button>
      <Button variant="contained" color="success" size="large">
        Large Button
      </Button>
      <Button variant="contained" startIcon={<Person />}>
        Button with icon with Start
      </Button>
      <Button variant="contained" endIcon={<DeleteIcon />}>
        Button with icon with End
      </Button>
      <IconButton
        onClick={() => {
          alert("icon button is clicked!");
        }}
      >
        <Person />
      </IconButton>
      <Button
        variant="contained"
        sx={{ backgroundColor: "purple", color: "white" }}
      >
        Custom Button using "sx" prop
      </Button>
      <LoadingButton loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined">
        Save
      </LoadingButton>
    </div>
  );
}

export default App;

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
			width: '100%',
			display:'flex',
			'& > *': {
				margin: theme.spacing(1),
			},
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '50%',
    },
  }));


function Todo() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <span>
        <TextField
          id="standard-full-width"
          label="오늘 할 공부!"
          style={{ margin: 8 }}
          placeholder="입력하세요"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </span>
			<span>
      <Button variant="contained" color="primary">
        공부하자
      </Button>
			</span>
    </div>
  );
  }
  
  export default Todo;
  
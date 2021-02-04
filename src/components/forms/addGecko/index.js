import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { isDate } from 'date-fns';
import styled from 'styled-components';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { addGecko } from 'redux/actions/geckoActions';
import { setAfterTemplateIsOpen } from 'redux/actions/uiActions';

const StyledAddGeckoForm = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    width: 100%;
    max-width: 400px;
  }
`;

const StyledConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
    errors.nameErr = true;
  } else if (values.name.length < 3) {
    errors.name = 'Must be 3 characters or more';
    errors.nameErr = true;
  }

  if (values.morph.length > 0 && values.morph.length < 3) {
    errors.morph = 'Must be 3 characters or more';
    errors.morphErr = true;
  }

  if (values.birth != null) {
    if (isDate(Date.parse(values.birth))) {
      errors.birth = 'Must be Date format';
      errors.birthErr = true;
    }
  }
  if (values.buy != null) {
    if (isDate(Date.parse(values.buy))) {
      errors.buy = 'Must be Date format';
      errors.buyErr = true;
    }
  }

  return errors;
};

const AddGeckoForm = ({ addGecko, setAfterTemplateIsOpen }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      morph: '',
      birth: null,
      buy: null,
    },
    validate,
    onSubmit: (values) => {
      addGecko(values);
      setAfterTemplateIsOpen(false);
    },
  });

  return (
    <StyledAddGeckoForm>
      <h3>AddGeckoForm</h3>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <StyledConteiner>
            <TextField
              error={formik.errors.nameErr}
              helperText={formik.errors.name}
              type="text"
              required
              id="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              label="Name"
            />
            <TextField
              error={formik.errors.morphErr}
              helperText={formik.errors.morph}
              type="text"
              id="morph"
              onChange={formik.handleChange}
              value={formik.values.morph}
              label="Morph"
            />
            <KeyboardDatePicker
              error={formik.errors.birthErr}
              helperText={formik.errors.birth}
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="birth"
              label="Date of birth"
              value={formik.values.birth}
              onChange={(val) => {
                formik.setFieldValue('birth', val);
              }}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardDatePicker
              error={formik.errors.buyErr}
              helperText={formik.errors.buy}
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="buy"
              label="Date of buy"
              value={formik.values.buy}
              onChange={(val) => {
                formik.setFieldValue('buy', val);
              }}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <button type="submit">Submit</button>
          </StyledConteiner>
        </form>
      </MuiPickersUtilsProvider>
    </StyledAddGeckoForm>
  );
};

export default connect(null, { addGecko, setAfterTemplateIsOpen })(AddGeckoForm);

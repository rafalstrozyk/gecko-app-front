import { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { isDate } from 'date-fns';
import styled from 'styled-components';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import List from 'components/lists/list';

const StyledAddEating = styled.div`
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
  if (!values.eatType) {
    errors.eatType = 'Required';
    errors.eatTypeErr = true;
  } else if (values.eatType.length < 3) {
    errors.eatType = 'Must be 3 characters or more';
    errors.eatTypeErr = true;
  }

  if (!values.eatingDate) {
    errors.eatingDate = 'Required';
    errors.eatingDateErr = true;
    if (isDate(Date.parse(values.eatingDate))) {
      errors.eatingDate = 'Must be Date format';
      errors.eatingDateErr = true;
    }
  }
  return errors;
};

const AddEatingForm = ({ data, eatingList }) => {
  const formik = useFormik({
    initialValues: {
      eatType: '',
      eatingDate: null,
      geckos: [],
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    formik.values.geckos = eatingList;
  }, [eatingList, formik.values]);

  return (
    <StyledAddEating>
      <h3>AddEatingForm</h3>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <StyledConteiner>
            <TextField
              error={formik.errors.eatTypeErr}
              helperText={formik.errors.eatType}
              type="text"
              required
              id="eatType"
              onChange={formik.handleChange}
              value={formik.values.eatType}
              label="Eat Type"
            />
            <KeyboardDatePicker
              error={formik.errors.eatingDateErr}
              helperText={formik.errors.eatingDate}
              required
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="eatingDate"
              label="Date of eatingDate"
              value={formik.values.eatingDate}
              onChange={(val) => {
                formik.setFieldValue('eatingDate', val);
              }}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />

            <List width="100%" height="200px" data={data} itemType="eating" />

            <button type="submit">Submit</button>
          </StyledConteiner>
        </form>
      </MuiPickersUtilsProvider>
    </StyledAddEating>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.geckos.data,
    eatingList: state.geckos.eating_list,
  };
};

export default connect(mapStateToProps)(AddEatingForm);

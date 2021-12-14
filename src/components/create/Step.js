import { useFormik } from 'formik'
import TextField from '@mui/material/TextField'

import './Step.css'

let ChangeHandler;

const validate = (values) => {
  ChangeHandler(values)
}

const Step = (props) => {
  ChangeHandler = props.onChange

  const formik = useFormik({
    initialValues: {
      id: props.item.id,
      title: props.item.title,
      desc: props.item.desc
    },
    validateOnChange: true,
    validate: validate
  })

  return (
    <form className="stepForm">
      <TextField className="title"
        id="title"
        label="Title"
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      <TextField className="desc"
        id="desc"
        multiline
        rows={4}
        label="Description"
        value={formik.values.desc}
        onChange={formik.handleChange}
      />
    </form>
  )
}

export default Step
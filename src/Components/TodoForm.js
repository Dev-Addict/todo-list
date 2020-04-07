import React, {Component, createRef} from "react";
import {Field, reduxForm} from "redux-form";

import '../style/Components/TodoForm.css';

export const formName = 'TODO_FORM';
export const formFields = {
    title: 'TITLE'
};

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.renderInput = this.renderInput.bind(this);
        this.renderError = this.renderError.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.titleRef = createRef();
        this.meta = {};
    }

    renderInput({input, label, meta}) {
        this.meta = meta;
        return (
            <input {...input} className="todo-form-input" placeholder={label} ref={this.titleRef}/>
        );
    }

    renderError() {
        return (
            <div className="todo-form-input-error">
                {this.meta.touched && !this.meta.active ? this.meta.error : ''}
            </div>
        );
    }

    onSubmit(formValue) {
        this.props.reset();
    }

    render() {
        return (
            <form className="todo-form-container" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name={formFields.title} component={this.renderInput}/>
                <button className="todo-form-submit" type="submit">Create</button>
                {this.renderError()}
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues[formFields.title]) {
        errors[formFields.title] = `You Must Enter Valid ${formFields.title}.`;
    }

    return errors;
};

export default reduxForm({
    form: formName,
    validate
})(TodoForm);
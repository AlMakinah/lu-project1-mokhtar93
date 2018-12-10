import React, {Component} from 'react';
import PropTypes from 'prop-types';


class FormField extends Component {

    static propTypes = {
        name: PropTypes.string,
        type : PropTypes.string,
        form: PropTypes.object
    };

    static defaultProps = {
        type:'text',
        
    };




    render(){

        const {name , type, form} = this.props;
        return (
                <>
                  <div className="form-field">
                  <label className="form-field__label-container">
                    <div className="form-field__label-text">{name}</div>
                    <div className="form-field__input-container">
                      <input
                        name={name}
                        value={form.getFieldValue(name)}
                        onChange={form.getFieldOnChange(name)}
                        type={type}
                      />
                    </div>
                  </label>
                  <div className="form-field__error-message">
                    {form.getFieldError(name)}
                  </div>
                </div>
                    </>
        )
    }
}

export default FormField;
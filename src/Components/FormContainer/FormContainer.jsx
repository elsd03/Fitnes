import "./FormContainer.css";

const FormContainer = () => {
    return (
    <div className="main-page-form-container">
        <b>FEELING <i>Motivated?</i>
            <br/>
            GET IN TOUCH
        </b>
        <div className="main-page-form-block" id="formAnchor">
            <form action="#" encType="multipart/form-data">
                <div className="form-input-container">
                    <div className="form-input-block">
                        <label htmlFor="fName">First Name *
                            <input type="text" name="fName" tabIndex="1" required/>
                        </label>
                        <label htmlFor="eMail">Email *
                            <input type="email" name="eMail" tabIndex="3" required/>
                        </label>
                    </div>
                    <div className="form-input-block">
                        <label htmlFor="lastName">
                            Last Name *
                            <input type="text" name="lastName" tabIndex="2" required/>
                        </label>
                        <label htmlFor="subject">Subject
                            <input type="text" name="subject" tabIndex="4"/>
                        </label>
                    </div>
                </div>
                <label htmlFor="text">
                    <textarea name="text" id="textArea" tabIndex="5" placeholder="Leave us a message..."/>
                </label>
                <button type="submit" tabIndex="6">Submit</button>
            </form>
        </div>
    </div>
    )
}
export default FormContainer;
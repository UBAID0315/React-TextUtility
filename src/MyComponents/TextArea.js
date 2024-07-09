import { useState } from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';

export default function TextArea(props) {
    const [text, setText] = useState('');
    const [showAlert, setShowAlert] = useState({ message: '', style: '' });

    const closeAlert = () => {
        setTimeout(() => {
            setShowAlert({ status: false });
        }, 2500);
    };

    // ----------------------------------------------------( Button Functions )-----------------------------------------------------------------

    const changeToUpperCase = () => {
        if (text) {
            setText(text.toUpperCase());
            setShowAlert({ message: 'Text changed into UpperCase', style: "success" });
        } else {
            setShowAlert({ message: "Write something first!", style: "danger" })
        }
        closeAlert()
    };

    const changeToLowerCase = () => {
        console.log("The button is clicked!");

        if (text) {
            setText(text.toLowerCase());
            setShowAlert({ message: 'Text changed into LowerCase', style: "success" });
        } else {
            setShowAlert({ message: "Write something first!", style: "danger" })
        }
        closeAlert()
    };
    const RemoveExSpaces = () => {
        if (text) {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            setShowAlert({ message: "Spaces has been removed!", style: "success" })
        }
        else {
            setShowAlert({ message: "Write something first!", style: "danger" })
        }
        closeAlert()
    }

    const CopyText = async () => {
        if (text) {
            try {
                await navigator.clipboard.writeText(text);
                setShowAlert({ message: "Text has been copied successfully!", style: "success" })    
            }
            catch (error) {
                setShowAlert({ message: "Error while copying text", style: "danger" })
                console.log(error)
            }
        }
        else {
            setShowAlert({ message: "Write something first!", style: "danger" })
        }
        closeAlert()
    }

    // ---------------------------------------------------------------------------------------------------------------------

    const countWords = (text) => {

        if (!text) {
            return { words: 0, characters: 0 };
        } else {
            const words = text.split(' ').filter((word) => word !== '').length;
            const characters = text.replace(/[^\w]/g, '').length;
            return { words, characters };
        }
    };

    const onChange = (event) => {
        setText(event.target.value);
    };

    const { words, characters } = countWords(text);

    return (
        <>
            <div className="container mt-5">
                <h1 className='text-center heading' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Text Enhancer</h1>
                <div className="mt-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                    <h1>Enter related text here!</h1>
                    <textarea
                        className="form-control"
                        value={text}
                        placeholder="Enter your text here!"
                        onChange={onChange}
                        id="exampleFormControlTextarea1"
                        rows="8"
                        style={{ color: props.mode === 'light' ? 'black' : 'white', background: props.mode === 'light' ? 'white' : 'black' }}
                    />
                    <button onClick={changeToUpperCase} className="btn mt-3 btn-sm mx-1 btn-primary">
                        Uppercase on Click
                    </button>
                    <button onClick={changeToLowerCase} className="btn mt-3 btn-sm mx-1 btn-primary">
                        Lowercase on Click
                    </button>
                    <button onClick={RemoveExSpaces} className="btn mt-3 btn-sm mx-1 btn-primary">
                        Remove Extra Spaces
                    </button>
                    <button onClick={CopyText} className="btn mt-3 btn-sm mx-1 btn-primary">
                        Copy Text
                    </button>
                </div>

                {showAlert.message ? <Alert message={showAlert.message} style={showAlert.style} /> : ''} {/*check => if message is none mean no alert*/}
            </div>

            <div className="container my-4" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Details</h2>
                <p>
                    Words: {words} and Characters: {characters}
                </p>
                <h2 className="mt-4">Preview</h2>
                <p>{text.length > 0 ? text : "Write something above to see the preview"}</p>
            </div>

        </>
    );
}

TextArea.propTypes = {
    text: PropTypes.string,
};
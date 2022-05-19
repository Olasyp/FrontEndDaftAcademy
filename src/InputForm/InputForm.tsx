import {useState, useEffect, useCallback} from "react";

interface InputFormProps {
    defaultValue?: string;
}

const storageFormKey = 'inputValue';

export const InputForm = (props?: InputFormProps) => {
    const [displayError, setDisplayError] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('Empty value')
    const [errorMessage, setErrorMessage] = useState<string>('')

    const formReadyToSubmit: boolean = !(displayError || !inputValue);

    const handleInputChange = (event: any) => {
        const userValue = event.target.value;
        const messageLength = event.target.value.length;
        setInputValue(event.target.value);
        if (messageLength < 3 || messageLength > 20) {
            if (messageLength < 3) {
                let b = userValue.charAt(0) !== userValue.charAt(0).toUpperCase();
                setErrorMessage(`User name ${userValue} is too short`)
            }
            else {
                setErrorMessage(`User name ${userValue} is too long`)
            }
            setDisplayError(true)
        } else {
            if (userValue.charAt(0) !== userValue.charAt(0).toUpperCase()) {
                setErrorMessage('Username should start with a capital letter')
            }
            else {
                setDisplayError(false)
                setErrorMessage('')
            }
        }
    }

    const handleSubmit = useCallback(() => {
        if (formReadyToSubmit) {
            localStorage.setItem(storageFormKey, inputValue)
        }
    }, [inputValue])

    useEffect(() => {
        let valueToSet = '';
        const localStorageData = localStorage.getItem(storageFormKey)
        if (!!localStorageData) {
            valueToSet = localStorageData;
        } else {
            if (!!props?.defaultValue) {
                valueToSet = props?.defaultValue;
            }
        }

        setInputValue(valueToSet);
    }, [])

    return <div style={{display: "flex", flexDirection: 'column'}}>
        {displayError && <div style={{color: 'red'}}>{errorMessage}</div>}
        <div>User name:</div>
        <input onInput={handleInputChange} value={inputValue} type="text"/>
        <br/>
        <button onClick={handleSubmit} disabled={!formReadyToSubmit}>Submit username</button>
    </div>
}
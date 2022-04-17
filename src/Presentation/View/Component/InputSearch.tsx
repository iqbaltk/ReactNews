import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Input, InputGroup, InputGroupText } from "reactstrap";

const InputSearch = () => {
    const [input, setInput] = React.useState({
        cari: " ",
    });

    let history = useHistory()

    const handleChange = (event: any) => {

        event.preventDefault();
        let value = event.target.value;
        let name = event.target.name;
        setInput({ ...input, [name]: value });
        history.push(`/search/${value.trim()}`)

    };

    return (
        <>
            <div>
                <InputGroup>
                    <InputGroupText className="bg-warning">
                        Search
                    </InputGroupText>
                    <Input
                        type="text"
                        name="cari"
                        placeholder="Pencarian..."
                        onChange={handleChange}
                        value={input.cari}
                    />
                </InputGroup>
            </div>
        </>
    )

}
export default InputSearch
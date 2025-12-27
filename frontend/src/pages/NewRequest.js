import React from "react";
import { useNavigate } from "react-router-dom";
import RequestForm from "../components/RequestForm";

const NewRequest = () => {
    const navigate = useNavigate();

    const handleSubmit = (data) => {
        console.log("Submit to API:", data);
        // TODO: call backend here
        navigate("/requests");
    };

    return (
        <div>
            <h1 className="h3 mb-3" style={{ color: "#0f172a" }}>
                Create Maintenance Request
            </h1>
            <RequestForm
                onSubmit={handleSubmit}
                onCancel={() => navigate("/requests")}
            />
        </div>
    );
};

export default NewRequest;

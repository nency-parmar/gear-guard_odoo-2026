import RequestForm from "../components/RequestForm";

const NewRequest = () => {
    const handleSubmit = (data) => {
        console.log("Submit to API:", data);
        // later: call backend, then navigate back to /requests
    };

    return (
        <div>
            <h1 className="h3 mb-3" style={{ color: "#0f172a" }}>
                Create Maintenance Request
            </h1>
            <RequestForm onSubmit={handleSubmit} />
        </div>
    );
};

export default NewRequest;

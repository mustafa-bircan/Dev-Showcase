import { useState } from "react";

const useRequestStatus = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);
    const setRequestError = (err) => setError(err);

    const resetError = () => setError(null);

    return {
        loading,
        error,
        startLoading,
        stopLoading,
        setRequestError,
        resetError,
    };
};

export default useRequestStatus;

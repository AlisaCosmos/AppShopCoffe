
const ErrorFallback = ({error, resetErrorBoundary}) => {
    console.log(`error ${error}`);
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )

}
export default ErrorFallback;

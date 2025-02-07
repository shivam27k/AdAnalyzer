import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    const handleUploadButton = () => {
        navigate('/upload');
    }


    return (
        <div className="flex flex-col p-4 md:p-10 gap-4 md:gap-10 justify-between md:flex-row">
            <div className="flex flex-col gap-4 md:gap-10">
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-semibold text-center md:text-left md:text-4xl">Welcome to Ad Performance Analyzer</h2>
                    <p className="text-md md:text-2xl text-center md:text-left text-gray-700">Upload your ad data and get insights to improve your campaign.</p>
                </div>
                <button className="border p-3 cursor-pointer text-lg font-bold bg-blue-500 text-white rounded-md" onClick={handleUploadButton}>
                    Upload a csv file
                </button>
            </div>
            <div className="" >
                <img src="./analyzer.png" className="h-[20rem] md:h-[30rem]" />
            </div>
        </div>
    );
};

export default Dashboard;

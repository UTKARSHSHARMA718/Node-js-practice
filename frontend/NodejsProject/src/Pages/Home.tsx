import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../interceptor';


interface truth {
    truth: String,
    author: String,
    year: Number,
}

interface dataInterface {
    isError: Boolean;
    data: truth;
    errorMessage: String;
    statusCode: Number;
}

const Home = () => {
    const [data, setData] = useState<Array<truth>>([]);
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [error, setError] = useState<String>('');;

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const res: dataInterface = await axiosInstance.get("truths");
                if (res.isError) {
                    setError(res.errorMessage);
                    return;
                }
                setData(res?.data?.data);
                console.log({ res });
                setIsLoading(false);
            } catch (err: any) {
                setIsLoading(false);
                console.log({ err });
                setError(err.message);
            }
        }
        getData();
    }, [])
    return (
        <>
            <div>Home</div>
            <div>
                {
                    isLoading && <h2>Loading...</h2>
                }
                {!isLoading && !error &&
                    data?.map((item: truth, index: Number) => <div key={index}><h1>{item?.truth}</h1></div>)
                }
            </div>
        </>
    )
}

export default Home
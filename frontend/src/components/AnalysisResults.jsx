import React from 'react'

const AnalysisResults = ({ adPerformance, highPerformingKeywords, lowPerformingKeywords, keywordActions, suggestions }) => {

    const TextAndList = ({ heading, list }) => {
        return (
            <div className="flex flex-col gap-2">
                <p className="font-medium text-xl text-gray-600">{heading}</p>
                <ol className="list-decimal pl-5 flex gap-2 flex-col">
                    {list.map((keyword, index) => (
                        <li key={index} className="text-gray-500">{keyword}</li>
                    ))}
                </ol>
            </div>
        );
    };


    return (
        <div className="flex flex-col gap-5">
            <h1 className='text-2xl font-semibold'>Analysis Results:</h1>
            <div className='flex flex-col gap-2'>
                <p className="font-medium text-xl text-gray-600">Performance Summary</p>
                <p className="text-gray-500">{adPerformance}</p>
            </div>
            <TextAndList heading={'High Performing Keywords'} list={highPerformingKeywords} />
            <TextAndList heading={'Low Performing Keywords'} list={lowPerformingKeywords} />
            <TextAndList heading={'Keyword Actions'} list={keywordActions} />
            <TextAndList heading={'Suggestions'} list={suggestions} />

        </div>
    )
}

export default AnalysisResults
import React from "react";


const ProgressBarWithLabel = ({
                                  label,
                                  labelClass = "text-sub-head-5 text-white font-primary font-medium",
                                  progress,
                                  background = "white",
                                  foreground = "black",
                                  height = "4",
                              }) => (
    <>
        <div className="mb-2">
            <div className="flex justify-between">
                <p
                    className={labelClass}
                >
                    {label}
                </p>
                <p
                    className={labelClass}
                >
                    {progress + "%"}
                </p>
            </div>

            {/* ProgressBar */}

            <div className={`bg-${background} h-${height} mt-2`}>
                <div
                    className={`bg-${foreground} h-${height}`}
                    style={{
                        width: progress + "%",
                    }}
                ></div>
            </div>
        </div>
    </>
);


export default ProgressBarWithLabel;

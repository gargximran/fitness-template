import {useState, useEffect} from 'react'
import './style.css'


const scheduleLists = {
    crossfit: {
        sunday: {
            first: [18, 20],
            second: [],
            third: [20, 22],
            forth: [],
            fifth: [7, 9],
            sixth: [],
            seventh: [],
            eigthth: []
        },
        monday: {
            first: [18, 20],
            second: [18, 20],
            third: [],
            forth: [20, 22],
            fifth: [],
            sixth: [],
            seventh: [],
            eigthth: [7, 9]
        },
        tuesday: {
            first: [],
            second: [],
            third: [7, 9],
            forth: [20, 22],
            fifth: [],
            sixth: [18, 20],
            seventh: [18, 20],
            eigthth: []
        },
        wednesday: {
            first: [],
            second: [7, 9],
            third: [],
            forth: [],
            fifth: [],
            sixth: [18, 20],
            seventh: [],
            eigthth: []
        },
        thursday: {
            first: [7, 9],
            second: [],
            third: [],
            forth: [],
            fifth: [],
            sixth: [18, 20],
            seventh: [],
            eigthth: [8, 12]
        },
        saturday: {
            first: [12, 14],
            second: [],
            third: [],
            forth: [8, 10],
            fifth: [],
            sixth: [18, 20],
            seventh: [],
            eigthth: [8, 12]
        }
    },
    pbsr: {
        sunday: {
            first: [],
            second: [18, 20],
            third: [],
            forth: [20, 22],
            fifth: [7, 9],
            sixth: [],
            seventh: [20, 22],
            eigthth: []
        },
        monday: {
            first: [],
            second: [],
            third: [],
            forth: [20, 22],
            fifth: [],
            sixth: [20, 22],
            seventh: [],
            eigthth: [7, 9]
        },
        tuesday: {
            first: [7, 9],
            second: [],
            third: [],
            forth: [],
            fifth: [20, 22],
            sixth: [18, 20],
            seventh: [],
            eigthth: []
        },
        wednesday: {
            first: [],
            second: [],
            third: [],
            forth: [7, 9],
            fifth: [],
            sixth: [18, 20],
            seventh: [],
            eigthth: []
        },
        thursday: {
            first: [7, 9],
            second: [],
            third: [],
            forth: [7, 9],
            fifth: [],
            sixth: [18, 20],
            seventh: [],
            eigthth: [8, 12]
        },
        saturday: {
            first: [12, 14],
            second: [],
            third: [7, 9],
            forth: [8, 10],
            fifth: [],
            sixth: [18, 20],
            seventh: [],
            eigthth: [8, 12]
        }
    },
    'lungeball ball': {
        sunday: {
            first: [18, 20],
            second: [],
            third: [],
            forth: [20, 22],
            fifth: [7, 9],
            sixth: [],
            seventh: [],
            eigthth: []
        },
        monday: {
            first: [],
            second: [20, 22],
            third: [20, 22],
            forth: [],
            fifth: [],
            sixth: [],
            seventh: [20, 22],
            eigthth: [7, 9]
        },
        tuesday: {
            first: [7, 9],
            second: [],
            third: [],
            forth: [18, 20],
            fifth: [20, 22],
            sixth: [],
            seventh: [],
            eigthth: []
        },
        wednesday: {
            first: [],
            second: [],
            third: [],
            forth: [7, 9],
            fifth: [],
            sixth: [18, 20],
            seventh: [],
            eigthth: []
        },
        thursday: {
            first: [7, 9],
            second: [],
            third: [],
            forth: [7, 9],
            fifth: [],
            sixth: [18, 20],
            seventh: [],
            eigthth: [8, 12]
        },
        saturday: {
            first: [12, 14],
            second: [],
            third: [],
            forth: [],
            fifth: [],
            sixth: [18, 20],
            seventh: [],
            eigthth: [8, 12]
        }
    },
    'candy': {
        sunday: {
            first: [],
            second: [18, 20],
            third: [],
            forth: [],
            fifth: [7, 9],
            sixth: [],
            seventh: [],
            eigthth: [20, 22]
        },
        monday: {
            first: [20, 22],
            second: [],
            third: [20, 22],
            forth: [],
            fifth: [],
            sixth: [20, 22],
            seventh: [],
            eigthth: []
        },
        tuesday: {
            first: [7, 9],
            second: [],
            third: [18, 20],
            forth: [],
            fifth: [20, 22],
            sixth: [],
            seventh: [],
            eigthth: []
        },
        wednesday: {
            first: [],
            second: [18, 20],
            third: [],
            forth: [7, 9],
            fifth: [],
            sixth: [],
            seventh: [],
            eigthth: [18, 20]
        },
        thursday: {
            first: [7, 9],
            second: [],
            third: [7, 9],
            forth: [],
            fifth: [],
            sixth: [],
            seventh: [18, 20],
            eigthth: []
        },
        saturday: {
            first: [],
            second: [],
            third: [12, 14],
            forth: [],
            fifth: [],
            sixth: [18, 20],
            seventh: [],
            eigthth: [8, 12]
        }
    },
    'walls': {
        sunday: {
            first: [18, 20],
            second: [],
            third: [],
            forth: [],
            fifth: [7, 9],
            sixth: [],
            seventh: [],
            eigthth: []
        },
        monday: {
            first: [20, 22],
            second: [],
            third: [],
            forth: [],
            fifth: [],
            sixth: [20, 22],
            seventh: [],
            eigthth: []
        },
        tuesday: {
            first: [7, 9],
            second: [],
            third: [],
            forth: [],
            fifth: [20, 22],
            sixth: [],
            seventh: [],
            eigthth: []
        },
        wednesday: {
            first: [],
            second: [18, 20],
            third: [],
            forth: [7, 9],
            fifth: [],
            sixth: [],
            seventh: [],
            eigthth: [18, 20]
        },
        thursday: {
            first: [7, 9],
            second: [],
            third: [],
            forth: [],
            fifth: [],
            sixth: [7, 9],
            seventh: [18, 20],
            eigthth: []
        },
        saturday: {
            first: [],
            second: [18, 20],
            third: [12, 14],
            forth: [],
            fifth: [],
            sixth: [],
            seventh: [],
            eigthth: [8, 12]
        }
    }
}

const ScheduleTable = ({title}) => {


    const [keyLists] = useState(Object.keys(scheduleLists))
    const [selectedKey, setSelectedKey] = useState(keyLists[0])

    const [schedule, setSchedule] = useState(scheduleLists[selectedKey])

    useEffect(() => {
        setSchedule(scheduleLists[selectedKey])
    }, [selectedKey])



    return (
        <div className={'pt-4'}>
            <h2 className={'py-3 font-primary text-white uppercase font-bold text-sub-head-2 md:text-head-6 text-center'}>{title}</h2>
            <div className={'text-center mt-10 mb-8'}>
                {
                    keyLists.map((value, ind) => (
                        <span key={ind} onClick={() => setSelectedKey(value)} className={selectedKey === value ? 'schedule-changer-active' : 'schedule-changer'}>{value}</span>
                    ))
                }

            </div>
            <div className={'overflow-scroll-table'}>
                <table className="border-collapse border border-gray-400 mx-auto">
                    <thead>
                    <tr className={'schedule-table-head-tr'}>
                        <th className="schedule-table-head-th">Sunday</th>
                        <th className="schedule-table-head-th">Monday</th>
                        <th className="schedule-table-head-th">Tuesday</th>
                        <th className="schedule-table-head-th">Wednesday</th>
                        <th className="schedule-table-head-th">Thursday</th>
                        <th className="schedule-table-head-th">Saturday</th>
                    </tr>
                    {
                        ['first', 'second', 'third', 'forth', 'fifth', 'sixth', 'seventh', 'eigthth'].map((sec, index) => (
                            <tr key={index} className={'schedule-table-body-tr'}>
                                {
                                    ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'saturday'].map((day, i) => (
                                        <td key={i + index}
                                            className={'schedule-table-body-td'}>{schedule[day][sec].length ? schedule[day][sec][0] + '.00 - ' + schedule[day][sec][1]+ ".00" : ' '}</td>
                                    ))
                                }

                            </tr>
                        ))
                    }

                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ScheduleTable
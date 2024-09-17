import React from 'react'
import CommonTextDiv from '../CommonTextDiv'
import { PiPaperPlaneRightFill } from "react-icons/pi";

const CardListSect = () => {


    const list1 = [
        {
            id: 0,
            text: 'Requires building everything from the ground up'
        },
        {
            id: 1,
            text: 'Involves creating all functionalities yourself'
        },
        {
            id: 2,
            text: 'More room for mistakes and bugs'
        },
        {
            id: 3,
            text: 'Longer time to complete the project'
        },
        {
            id: 4,
            text: 'Can cost thousands of dollars'
        },
    ]

    const list2 = [
        {
            id: 0,
            text: 'Quick to start with pre-built solutions'
        },
        {
            id: 1,
            text: 'Simplified by using existing, tested code'
        },
        {
            id: 2,
            text: 'Proven code reduces the risk of issues'
        },
        {
            id: 3,
            text: 'Saves time, allowing focus on customization'
        },
        {
            id: 4,
            text: 'Significantly lowers development costs'
        },
    ]


    return (
        <section className='cardListSect container commonMT'>
            <div className="row commonRowGap">
                <div className="col-12">
                    <CommonTextDiv blueText={'Why Start from Scratch '} title={'Why Start from Scratch When You Can Just Build On What’s Already There?'} desc={``} />
                </div>
                <div className="col-12">
                    <div className="row mt-4 commonRowGap">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className='title'>
                                    <span>Building From Scratch</span>
                                </div>
                                <div className='listWrapper'>
                                    {
                                        list1.map((items)=>{
                                            return <div className='d-flex align-items-baseline gap-3' key={items.id}>
                                            <span><PiPaperPlaneRightFill /></span>
                                            <span>{items.text}</span>
                                        </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className='title'>
                                    <span>Ready Source Code</span>
                                </div>
                                <div className='listWrapper'>
                                    {
                                        list2.map((items)=>{
                                            return <div className='d-flex align-items-baseline gap-3' key={items.id}>
                                            <span><PiPaperPlaneRightFill /></span>
                                            <span>{items.text}</span>
                                        </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardListSect